import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from './styles.module.css';

export default function Interactive3D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const pointRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const helperLinesRef = useRef([]);
  
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(15, 15, 15);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.enableZoom = false; // Disable zoom
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Grid helpers
    const gridXY = new THREE.GridHelper(20, 20, 0x333333, 0x222222);
    gridXY.rotation.x = Math.PI / 2;
    scene.add(gridXY);

    const gridXZ = new THREE.GridHelper(20, 20, 0x333333, 0x222222);
    scene.add(gridXZ);

    // Axes
    const axisLength = 12;
    
    // X-axis (Red)
    const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-axisLength, 0, 0),
      new THREE.Vector3(axisLength, 0, 0)
    ]);
    const xAxisMaterial = new THREE.LineBasicMaterial({ 
      color: 0xff5252, 
      linewidth: 2,
      depthTest: false,
      transparent: true,
      opacity: 0.8
    });
    const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial);
    xAxis.renderOrder = 999;
    scene.add(xAxis);

    // Y-axis (Blue)
    const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -axisLength, 0),
      new THREE.Vector3(0, axisLength, 0)
    ]);
    const yAxisMaterial = new THREE.LineBasicMaterial({ 
      color: 0x308ce7, 
      linewidth: 2,
      depthTest: false,
      transparent: true,
      opacity: 0.8
    });
    const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial);
    yAxis.renderOrder = 999;
    scene.add(yAxis);

    // Z-axis (Green)
    const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -axisLength),
      new THREE.Vector3(0, 0, axisLength)
    ]);
    const zAxisMaterial = new THREE.LineBasicMaterial({ 
      color: 0x69f0ae, 
      linewidth: 2,
      depthTest: false,
      transparent: true,
      opacity: 0.8
    });
    const zAxis = new THREE.Line(zAxisGeometry, zAxisMaterial);
    zAxis.renderOrder = 999;
    scene.add(zAxis);

    // Origin sphere
    const originGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const originMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
    const origin = new THREE.Mesh(originGeometry, originMaterial);
    scene.add(origin);

    // Point sphere
    const pointGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const pointMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff9f2c, // orange
      emissive: 0xff9f2c,
      emissiveIntensity: 0.2,
      depthTest: false
    });
    const point = new THREE.Mesh(pointGeometry, pointMaterial);
    
    // Add a glow/halo to the point
    const haloGeometry = new THREE.SphereGeometry(1.0, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9f2c,
      transparent: true,
      opacity: 0.2,
      depthTest: false
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    point.add(halo);

    point.renderOrder = 1000;
    scene.add(point);
    pointRef.current = point;

    // Volume box visualization
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: 0x308ce7,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthTest: false
    });
    const volumeBox = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(volumeBox);
    volumeBox.visible = false;
    // Store for later update
    pointRef.current.volumeBox = volumeBox;

    // Helper lines (will be updated based on position)
    const helperLineMaterial = new THREE.LineDashedMaterial({
      color: 0xffffff,
      linewidth: 1,
      dashSize: 0.2,
      gapSize: 0.2,
      opacity: 0.3,
      transparent: true
    });

    const xHelperGeometry = new THREE.BufferGeometry();
    const xHelper = new THREE.Line(xHelperGeometry, helperLineMaterial.clone());
    xHelper.material.color.setHex(0xff5252);
    scene.add(xHelper);

    const yHelperGeometry = new THREE.BufferGeometry();
    const yHelper = new THREE.Line(yHelperGeometry, helperLineMaterial.clone());
    yHelper.material.color.setHex(0x308ce7);
    scene.add(yHelper);

    const zHelperGeometry = new THREE.BufferGeometry();
    const zHelper = new THREE.Line(zHelperGeometry, helperLineMaterial.clone());
    zHelper.material.color.setHex(0x69f0ae);
    scene.add(zHelper);

    // Diagonal helper line (from origin directly to point)
    const diagonalHelperGeometry = new THREE.BufferGeometry();
    const diagonalHelper = new THREE.Line(diagonalHelperGeometry, helperLineMaterial.clone());
    diagonalHelper.material.color.setHex(0xffffff);
    diagonalHelper.material.opacity = 0.7;
    scene.add(diagonalHelper);

    helperLinesRef.current = [xHelper, yHelper, zHelper, diagonalHelper];

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

  // Update point position when state changes
  useEffect(() => {
    if (pointRef.current) {
      pointRef.current.position.set(position.x, position.y, position.z);
      
      // Update volume box
      if (pointRef.current.volumeBox) {
        const width = Math.abs(position.x);
        const height = Math.abs(position.y);
        const depth = Math.abs(position.z);
        pointRef.current.volumeBox.scale.set(Math.max(0.01, width), Math.max(0.01, height), Math.max(0.01, depth));
        pointRef.current.volumeBox.position.set(position.x / 2, position.y / 2, position.z / 2);
        pointRef.current.volumeBox.visible = (width > 0.1 && height > 0.1 && depth > 0.1);
      }

      // Update helper lines
      if (helperLinesRef.current.length === 4) {
        // X helper (from origin to X projection)
        helperLinesRef.current[0].geometry.setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(position.x, 0, 0)
        ]);
        helperLinesRef.current[0].computeLineDistances();

        // Y helper (from X projection to XY projection)
        helperLinesRef.current[1].geometry.setFromPoints([
          new THREE.Vector3(position.x, 0, 0),
          new THREE.Vector3(position.x, position.y, 0)
        ]);
        helperLinesRef.current[1].computeLineDistances();

        // Z helper (from XY projection to final point)
        helperLinesRef.current[2].geometry.setFromPoints([
          new THREE.Vector3(position.x, position.y, 0),
          new THREE.Vector3(position.x, position.y, position.z)
        ]);
        helperLinesRef.current[2].computeLineDistances();

        // Diagonal helper (from origin directly to point)
        helperLinesRef.current[3].geometry.setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(position.x, position.y, position.z)
        ]);
        helperLinesRef.current[3].computeLineDistances();
      }
    }
  }, [position]);

  const handleSliderChange = (axis, value) => {
    setPosition(prev => ({ ...prev, [axis]: parseFloat(value) }));
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0, z: 0 });
  };

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const getOctant = () => {
    const { x, y, z } = position;
    if (x === 0 && y === 0 && z === 0) return 'Origin';
    if (x === 0 || y === 0 || z === 0) return 'On Axis/Plane';
    if (x > 0 && y > 0 && z > 0) return 'Octant I (+,+,+)';
    if (x < 0 && y > 0 && z > 0) return 'Octant II (−,+,+)';
    if (x < 0 && y < 0 && z > 0) return 'Octant III (−,−,+)';
    if (x > 0 && y < 0 && z > 0) return 'Octant IV (+,−,+)';
    if (x > 0 && y > 0 && z < 0) return 'Octant V (+,+,−)';
    if (x < 0 && y > 0 && z < 0) return 'Octant VI (−,+,−)';
    if (x < 0 && y < 0 && z < 0) return 'Octant VII (−,−,−)';
    if (x > 0 && y < 0 && z < 0) return 'Octant VIII (+,−,−)';
    return 'Unknown';
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Interactive 3D Space</h3>
      <p className={styles.description}>
        Use the sliders to move the point in 3D space. Drag to rotate your view around the coordinate system.
      </p>

      <div ref={mountRef} className={styles.canvas}></div>

      <div className={styles.controls}>
        <div className={styles.sliderGroup}>
          <label className={styles.sliderLabel}>
            <span className={styles.axisLabel} style={{ color: '#ff5252' }}>X-axis</span>
            <span style={{ color: '#ff5252' }}>Coordinate: {position.x.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.5"
            value={position.x}
            onChange={(e) => handleSliderChange('x', e.target.value)}
            className={`${styles.slider} ${styles.sliderX}`}
          />
        </div>

        <div className={styles.sliderGroup}>
          <label className={styles.sliderLabel}>
            <span className={styles.axisLabel} style={{ color: '#69f0ae' }}>Y-axis</span>
            <span style={{ color: '#69f0ae' }}>Coordinate: {position.z.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.5"
            value={position.z}
            onChange={(e) => handleSliderChange('z', e.target.value)}
            className={`${styles.slider} ${styles.sliderZ}`}
          />
        </div>

        <div className={styles.sliderGroup}>
          <label className={styles.sliderLabel}>
            <span className={styles.axisLabel} style={{ color: '#308ce7' }}>Z-axis</span>
            <span style={{ color: '#308ce7' }}>Coordinate: {position.y.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.5"
            value={position.y}
            onChange={(e) => handleSliderChange('y', e.target.value)}
            className={`${styles.slider} ${styles.sliderY}`}
          />
        </div>
      </div>

      <div className={styles.explanation}>
        <h4>Understanding 3D Space:</h4>
        <ul>
          <li><strong>Three Independent Axes:</strong> X (red), Y (blue), and Z (green) are all independent</li>
          <li><strong>The Volume:</strong> The point can move anywhere in 3D space</li>
          <li><strong>Coordinates:</strong> Need three numbers (X,Y,Z) to describe the point's position</li>
          <li><strong>Eight Octants:</strong> Created by the positive/negative combinations of X, Y, and Z</li>
          <li><strong>Dashed lines:</strong> Show the point's distance from origin along each axis</li>
          <li><strong>Drag to rotate:</strong> Click and drag to orbit around the coordinate system</li>
          <li><strong>Grid planes:</strong> Help visualize depth and spatial relationships</li>
        </ul>
      </div>
    </div>
  );
}
