import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import BlenderViewport from '../BlenderViewport';

export default function InteractiveTransform3D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cubeRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [scale, setScale] = useState({ x: 1, y: 1, z: 1 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1d1d1d); // Match BlenderViewport
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 20;
    controls.enableZoom = true;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Grid helpers
    const gridXY = new THREE.GridHelper(10, 10, 0x444444, 0x2a2a2a);
    gridXY.rotation.x = Math.PI / 2;
    scene.add(gridXY);
    const gridXZ = new THREE.GridHelper(10, 10, 0x444444, 0x2a2a2a);
    scene.add(gridXZ);

    // Axes
    const axisLength = 5;
    const xAxis = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-axisLength, 0, 0),
        new THREE.Vector3(axisLength, 0, 0)
      ]),
      new THREE.LineBasicMaterial({ color: 0xff5252, linewidth: 2, transparent: true, opacity: 0.8 })
    );
    scene.add(xAxis);
    const yAxis = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -axisLength, 0),
        new THREE.Vector3(0, axisLength, 0)
      ]),
      new THREE.LineBasicMaterial({ color: 0x2dc66b, linewidth: 2, transparent: true, opacity: 0.8 }) // Y is green
    );
    scene.add(yAxis);
    const zAxis = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -axisLength),
        new THREE.Vector3(0, 0, axisLength)
      ]),
      new THREE.LineBasicMaterial({ color: 0x308ce7, linewidth: 2, transparent: true, opacity: 0.8 }) // Z is blue
    );
    scene.add(zAxis);

    // Cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0xe77e22, roughness: 0.4, metalness: 0.2 }); // Orange
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Neon orange outline
    const edges = new THREE.EdgesGeometry(geometry);
    const outlineMaterial = new THREE.LineBasicMaterial({ color: 0xff9f2c, linewidth: 2, transparent: true, opacity: 0.95 });
    const outline = new THREE.LineSegments(edges, outlineMaterial);
    outline.renderOrder = 1001;
    cube.add(outline);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  // Update cube transform
  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.position.set(position.x, position.y, position.z);
      cubeRef.current.rotation.set(
        THREE.MathUtils.degToRad(rotation.x),
        THREE.MathUtils.degToRad(rotation.y),
        THREE.MathUtils.degToRad(rotation.z)
      );
      cubeRef.current.scale.set(scale.x, scale.y, scale.z);
    }
  }, [position, rotation, scale]);

  const handleLocationChange = (axis, value) => {
    setPosition(prev => ({ ...prev, [axis]: value }));
  };

  const handleRotationChange = (axis, value) => {
    setRotation(prev => ({ ...prev, [axis]: value }));
  };

  const handleScaleChange = (axis, value) => {
    setScale(prev => ({ ...prev, [axis]: value }));
  };

  return (
    <BlenderViewport
      title="Interactive Transform"
      activeTab="Object Mode"
      stats={{ verts: 8, edges: 12, faces: 6, tris: 12 }}
      location={{ x: position.x, y: position.y, z: position.z }}
      rotation={{ x: rotation.x, y: rotation.y, z: rotation.z }}
      scale={{ x: scale.x, y: scale.y, z: scale.z }}
      onLocationChange={handleLocationChange}
      onRotationChange={handleRotationChange}
      onScaleChange={handleScaleChange}
      timelineFrame={1}
      totalFrames={250}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </BlenderViewport>
  );
}
