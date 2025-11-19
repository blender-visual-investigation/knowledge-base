import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from './styles.module.css';

const SENSOR_SIZES = {
  'Full Frame (35mm)': { width: 36, height: 24 },
  'APS-C (Canon)': { width: 22.3, height: 14.9 },
  'APS-C (Nikon)': { width: 22.2, height: 14.8 },
  'Micro 4/3': { width: 17.3, height: 13 },
  '1 inch': { width: 13.2, height: 8.8 },
  'iPhone Main (1/1.28")': { width: 9.8, height: 7.3 }, // Approx
};

export default function InteractiveCamera() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const virtualCameraRef = useRef(null);
  const cameraHelperRef = useRef(null);
  
  const [focalLength, setFocalLength] = useState(50);
  const [sensorType, setSensorType] = useState('Full Frame (35mm)');
  const [fov, setFov] = useState(0);

  // Calculate FOV whenever parameters change
  useEffect(() => {
    const sensor = SENSOR_SIZES[sensorType];
    // Calculate horizontal FOV in degrees
    // FOV = 2 * arctan(sensorWidth / (2 * focalLength))
    // Note: Three.js PerspectiveCamera uses Vertical FOV
    
    // Vertical FOV calculation for Three.js
    const vFovRad = 2 * Math.atan(sensor.height / (2 * focalLength));
    const vFovDeg = vFovRad * (180 / Math.PI);
    
    // Horizontal FOV for display
    const hFovRad = 2 * Math.atan(sensor.width / (2 * focalLength));
    const hFovDeg = hFovRad * (180 / Math.PI);
    
    setFov(hFovDeg);

    if (virtualCameraRef.current) {
      virtualCameraRef.current.fov = vFovDeg;
      virtualCameraRef.current.aspect = sensor.width / sensor.height;
      virtualCameraRef.current.updateProjectionMatrix();
    }
    
    if (cameraHelperRef.current) {
      cameraHelperRef.current.update();
    }
  }, [focalLength, sensorType]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    sceneRef.current = scene;

    // Main Camera (The one viewing the setup)
    const mainCamera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    mainCamera.position.set(20, 20, 20);
    mainCamera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(mainCamera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // Grid
    const gridHelper = new THREE.GridHelper(50, 50, 0x444444, 0x222222);
    scene.add(gridHelper);

    // Virtual Camera (The one we are simulating)
    const sensor = SENSOR_SIZES[sensorType];
    const vFov = 2 * Math.atan(sensor.height / (2 * focalLength)) * (180 / Math.PI);
    
    const virtualCamera = new THREE.PerspectiveCamera(vFov, sensor.width / sensor.height, 1, 30);
    virtualCamera.position.set(0, 2, 0);
    virtualCamera.lookAt(0, 2, -20);
    scene.add(virtualCamera);
    virtualCameraRef.current = virtualCamera;

    // Camera Helper (Visualizes the frustum)
    const helper = new THREE.CameraHelper(virtualCamera);
    scene.add(helper);
    cameraHelperRef.current = helper;

    // Camera Body Model
    const cameraGeo = new THREE.BoxGeometry(2, 2, 3);
    const cameraMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const cameraMesh = new THREE.Mesh(cameraGeo, cameraMat);
    cameraMesh.position.copy(virtualCamera.position);
    scene.add(cameraMesh);
    
    // Lens Model
    const lensGeo = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 32);
    const lensMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    lensMesh.rotation.x = Math.PI / 2;
    lensMesh.position.set(0, 2, -2);
    scene.add(lensMesh);

    // Target Objects (to see what's in frame)
    const createTarget = (x, z, color) => {
      const geo = new THREE.BoxGeometry(2, 4, 2);
      const mat = new THREE.MeshStandardMaterial({ color });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, 2, z);
      scene.add(mesh);
    };

    createTarget(0, -15, 0xff0000);   // Center
    createTarget(-8, -15, 0x00ff00);  // Left
    createTarget(8, -15, 0x0000ff);   // Right
    createTarget(-15, -25, 0xffff00); // Far Left
    createTarget(15, -25, 0x00ffff);  // Far Right

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, mainCamera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      mainCamera.aspect = width / height;
      mainCamera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Interactive Camera Optics</h3>
      <p className={styles.description}>
        Adjust focal length and sensor size to see how they affect the Field of View (FOV).
        The yellow frustum lines show what the camera "sees".
      </p>

      <div ref={mountRef} className={styles.canvas}></div>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <div className={styles.labelRow}>
            <span>Focal Length</span>
            <span className={styles.valueDisplay}>{focalLength} mm</span>
          </div>
          <input
            type="range"
            min="10"
            max="200"
            step="1"
            value={focalLength}
            onChange={(e) => setFocalLength(Number(e.target.value))}
            className={styles.slider}
          />
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#666'}}>
            <span>Wide (10mm)</span>
            <span>Telephoto (200mm)</span>
          </div>
        </div>

        <div className={styles.controlGroup}>
          <div className={styles.labelRow}>
            <span>Sensor Size</span>
          </div>
          <select 
            value={sensorType} 
            onChange={(e) => setSensorType(e.target.value)}
            className={styles.select}
          >
            {Object.keys(SENSOR_SIZES).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.infoPanel}>
        <h4>Calculated Properties</h4>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Horizontal FOV</span>
            <span className={styles.infoValue}>{fov.toFixed(1)}°</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Sensor Dimensions</span>
            <span className={styles.infoValue}>
              {SENSOR_SIZES[sensorType].width} x {SENSOR_SIZES[sensorType].height} mm
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Crop Factor</span>
            <span className={styles.infoValue}>
              {(36 / SENSOR_SIZES[sensorType].width).toFixed(2)}x
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
