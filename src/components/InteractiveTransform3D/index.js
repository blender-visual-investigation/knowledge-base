import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from '../Interactive3D/styles.module.css';

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
    scene.background = new THREE.Color(0x111111);
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
    const renderer = new THREE.WebGLRenderer({ antialias: true });
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
    controls.enableZoom = false;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Grid helpers
    const gridXY = new THREE.GridHelper(10, 10, 0x333333, 0x222222);
    gridXY.rotation.x = Math.PI / 2;
    scene.add(gridXY);
    const gridXZ = new THREE.GridHelper(10, 10, 0x333333, 0x222222);
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
      new THREE.LineBasicMaterial({ color: 0x308ce7, linewidth: 2, transparent: true, opacity: 0.8 }) // Y is blue
    );
    scene.add(yAxis);
    const zAxis = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -axisLength),
        new THREE.Vector3(0, 0, axisLength)
      ]),
      new THREE.LineBasicMaterial({ color: 0x2dc66b, linewidth: 2, transparent: true, opacity: 0.8 }) // Z is green
    );
    scene.add(zAxis);

    // Cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0xff9f2c, roughness: 0.4, metalness: 0.2 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Neon orange outline
    const edges = new THREE.EdgesGeometry(geometry);
    const outlineMaterial = new THREE.LineBasicMaterial({ color: 0xff6f00, linewidth: 2, transparent: true, opacity: 0.95 });
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
      cubeRef.current.position.set(position.x, position.z, position.y);
      cubeRef.current.rotation.set(rotation.x, rotation.z, rotation.y);
      cubeRef.current.scale.set(scale.x, scale.z, scale.y);
    }
  }, [position, rotation, scale]);

  const handleSliderChange = (type, axis, value) => {
    const v = parseFloat(value);
    if (type === 'position') setPosition(prev => ({ ...prev, [axis]: v }));
    if (type === 'rotation') setRotation(prev => ({ ...prev, [axis]: v }));
    if (type === 'scale') setScale(prev => ({ ...prev, [axis]: v }));
  };

  const resetAll = () => {
    setPosition({ x: 0, y: 0, z: 0 });
    setRotation({ x: 0, y: 0, z: 0 });
    setScale({ x: 1, y: 1, z: 1 });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Interactive 3D Cube Transform</h3>
      <p className={styles.description}>
        Move, rotate, and scale the orange cube in 3D space. Drag to orbit the view. Axes: X (red), Y (blue), Z (green).
      </p>

      <div className={styles.viewportWrapper}>
        <div ref={mountRef} className={styles.canvas}></div>

        <div className={styles.controls}>
          {/* Position Controls */}
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#ff5252' }}>X Position</span>
              <span style={{ color: '#ff5252' }}>{position.x.toFixed(2)}</span>
            </label>
            <input type="range" min="-5" max="5" step="0.1" value={position.x} onChange={e => handleSliderChange('position', 'x', e.target.value)} className={`${styles.slider} ${styles.sliderX}`} />
          </div>
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#2dc66b' }}>Y Position</span>
              <span style={{ color: '#2dc66b' }}>{position.y.toFixed(2)}</span>
            </label>
            <input type="range" min="-5" max="5" step="0.1" value={position.y} onChange={e => handleSliderChange('position', 'y', e.target.value)} className={`${styles.slider} ${styles.sliderZ}`} />
          </div>
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#308ce7' }}>Z Position</span>
              <span style={{ color: '#308ce7' }}>{position.z.toFixed(2)}</span>
            </label>
            <input type="range" min="-5" max="5" step="0.1" value={position.z} onChange={e => handleSliderChange('position', 'z', e.target.value)} className={`${styles.slider} ${styles.sliderY}`} />
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #222', margin: '1.5rem 0' }} />
          {/* Rotation Controls */}
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#ff5252' }}>X Rotation</span>
              <span style={{ color: '#ff5252' }}>{rotation.x.toFixed(2)}</span>
            </label>
            <input type="range" min={(-Math.PI).toFixed(2)} max={Math.PI.toFixed(2)} step="0.01" value={rotation.x} onChange={e => handleSliderChange('rotation', 'x', e.target.value)} className={`${styles.slider} ${styles.sliderX}`} />
          </div>
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#2dc66b' }}>Y Rotation</span>
              <span style={{ color: '#2dc66b' }}>{rotation.y.toFixed(2)}</span>
            </label>
            <input type="range" min={(-Math.PI).toFixed(2)} max={Math.PI.toFixed(2)} step="0.01" value={rotation.y} onChange={e => handleSliderChange('rotation', 'y', e.target.value)} className={`${styles.slider} ${styles.sliderZ}`} />
          </div>
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#308ce7' }}>Z Rotation</span>
              <span style={{ color: '#308ce7' }}>{rotation.z.toFixed(2)}</span>
            </label>
            <input type="range" min={(-Math.PI).toFixed(2)} max={Math.PI.toFixed(2)} step="0.01" value={rotation.z} onChange={e => handleSliderChange('rotation', 'z', e.target.value)} className={`${styles.slider} ${styles.sliderY}`} />
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #222', margin: '1.5rem 0' }} />
          {/* Scale Controls */}
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#ff5252' }}>X Scale</span>
              <span style={{ color: '#ff5252' }}>{scale.x.toFixed(2)}</span>
            </label>
            <input type="range" min="0.2" max="3" step="0.01" value={scale.x} onChange={e => handleSliderChange('scale', 'x', e.target.value)} className={`${styles.slider} ${styles.sliderX}`} />
          </div>
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#2dc66b' }}>Y Scale</span>
              <span style={{ color: '#2dc66b' }}>{scale.y.toFixed(2)}</span>
            </label>
            <input type="range" min="0.2" max="3" step="0.01" value={scale.y} onChange={e => handleSliderChange('scale', 'y', e.target.value)} className={`${styles.slider} ${styles.sliderZ}`} />
          </div>
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#308ce7' }}>Z Scale</span>
              <span style={{ color: '#308ce7' }}>{scale.z.toFixed(2)}</span>
            </label>
            <input type="range" min="0.2" max="3" step="0.01" value={scale.z} onChange={e => handleSliderChange('scale', 'z', e.target.value)} className={`${styles.slider} ${styles.sliderY}`} />
          </div>
          <button className={styles.resetButton} onClick={resetAll}>Reset</button>
        </div>
      </div>
      <div className={styles.explanation}>
        <h4 style={{ color: '#2dc66b' }}>How to Use:</h4>
        <ul>
          <li><strong style={{ color: '#2dc66b' }}>Move:</strong> Change the cube's position along X, Y, Z axes</li>
          <li><strong style={{ color: '#2dc66b' }}>Rotate:</strong> Rotate the cube around each axis (radians)</li>
          <li><strong style={{ color: '#2dc66b' }}>Scale:</strong> Stretch or shrink the cube along each axis</li>
          <li><strong style={{ color: '#2dc66b' }}>Drag to orbit:</strong> Click and drag to rotate the view</li>
        </ul>
      </div>
    </div>
  );
}
