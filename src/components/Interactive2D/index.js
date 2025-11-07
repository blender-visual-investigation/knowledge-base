import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from './styles.module.css';

export default function Interactive2D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const pointRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const helperLinesRef = useRef([]);
  const coordinateLabelRef = useRef(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera - orthographic for true 2D view
    const aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
    const frustumSize = 25;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls (limited to 2D)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false; // Disable rotation for 2D
    controls.enableZoom = true;
    controls.minZoom = 0.5;
    controls.maxZoom = 2;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Grid
    const gridSize = 20;
    const gridDivisions = 20;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x444444, 0x222222);
    gridHelper.rotation.x = Math.PI / 2; // Rotate to XY plane
    scene.add(gridHelper);

    // Axes
    const axisLength = 12;
    
    // X-axis (Red)
    const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-axisLength, 0, 0),
      new THREE.Vector3(axisLength, 0, 0)
    ]);
    const xAxisMaterial = new THREE.LineBasicMaterial({ 
      color: 0xef4c3c,
      linewidth: 3,
      depthTest: false
    });
    const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial);
    xAxis.renderOrder = 999;
    scene.add(xAxis);

    // Y-axis (Green)
    const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -axisLength, 0),
      new THREE.Vector3(0, axisLength, 0)
    ]);
    const yAxisMaterial = new THREE.LineBasicMaterial({ 
      color: 0x2ecc71,
      linewidth: 3,
      depthTest: false
    });
    const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial);
    yAxis.renderOrder = 999;
    scene.add(yAxis);

    // Origin marker
    const originGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const originMaterial = new THREE.MeshBasicMaterial({ color: 0x666666 });
    const origin = new THREE.Mesh(originGeometry, originMaterial);
    scene.add(origin);

    // Point sphere
    const pointGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const pointMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff9f2c,
      depthTest: false
    });
    const point = new THREE.Mesh(pointGeometry, pointMaterial);
    point.renderOrder = 1000;
    scene.add(point);
    pointRef.current = point;

    // Helper lines
    const helperLineMaterial = new THREE.LineDashedMaterial({
      color: 0xffffff,
      linewidth: 1,
      dashSize: 0.3,
      gapSize: 0.2,
      opacity: 0.5,
      transparent: true
    });

    const xHelperGeometry = new THREE.BufferGeometry();
    const xHelper = new THREE.Line(xHelperGeometry, helperLineMaterial.clone());
    xHelper.material.color.setHex(0xef4c3c);
    scene.add(xHelper);

    const yHelperGeometry = new THREE.BufferGeometry();
    const yHelper = new THREE.Line(yHelperGeometry, helperLineMaterial.clone());
    yHelper.material.color.setHex(0x2ecc71);
    scene.add(yHelper);

    // Diagonal helper line (hypotenuse)
    const diagonalHelperGeometry = new THREE.BufferGeometry();
    const diagonalHelper = new THREE.Line(diagonalHelperGeometry, helperLineMaterial.clone());
    diagonalHelper.material.color.setHex(0xffffff);
    diagonalHelper.material.opacity = 0.7;
    scene.add(diagonalHelper);

    helperLinesRef.current = [xHelper, yHelper, diagonalHelper];

    // Coordinate label in bottom right
    const createCoordinateLabel = (x, y) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 128;
      context.fillStyle = 'rgba(0, 0, 0, 0.7)';
      context.fillRect(0, 0, 256, 128);
      context.fillStyle = '#ffffff';
      context.font = 'Bold 32px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(`x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`, 128, 64);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(4, 2, 1);
      return sprite;
    };

    const coordinateLabel = createCoordinateLabel(0, 0);
    scene.add(coordinateLabel);
    coordinateLabelRef.current = coordinateLabel;

    // Update coordinate label position based on camera
    const updateCoordinateLabelPosition = () => {
      const frustumHeight = frustumSize;
      const frustumWidth = frustumSize * aspect;
      coordinateLabel.position.set(
        frustumWidth / 2 - 2.5,
        -frustumHeight / 2 + 1.5,
        0
      );
    };
    updateCoordinateLabelPosition();

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
      const aspect = width / height;
      camera.left = frustumSize * aspect / -2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
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
      pointRef.current.position.set(position.x, position.y, 0);
      
      // Update helper lines
      if (helperLinesRef.current.length === 3) {
        // X helper (from origin to X projection)
        helperLinesRef.current[0].geometry.setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(position.x, 0, 0)
        ]);
        helperLinesRef.current[0].computeLineDistances();

        // Y helper (from X projection to point)
        helperLinesRef.current[1].geometry.setFromPoints([
          new THREE.Vector3(position.x, 0, 0),
          new THREE.Vector3(position.x, position.y, 0)
        ]);
        helperLinesRef.current[1].computeLineDistances();

        // Diagonal helper (from origin directly to point - hypotenuse)
        helperLinesRef.current[2].geometry.setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(position.x, position.y, 0)
        ]);
        helperLinesRef.current[2].computeLineDistances();
      }

      // Update coordinate label
      if (coordinateLabelRef.current) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 128;
        context.fillStyle = 'rgba(0, 0, 0, 0.7)';
        context.fillRect(0, 0, 256, 128);
        context.fillStyle = '#ffffff';
        context.font = 'Bold 32px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(`x: ${position.x.toFixed(1)}, y: ${position.y.toFixed(1)}`, 128, 64);
        
        const texture = new THREE.CanvasTexture(canvas);
        coordinateLabelRef.current.material.map = texture;
        coordinateLabelRef.current.material.needsUpdate = true;
      }
    }
  }, [position]);

  const handleSliderChange = (axis, value) => {
    setPosition(prev => ({ ...prev, [axis]: parseFloat(value) }));
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const getQuadrant = () => {
    if (position.x === 0 && position.y === 0) return 'Origin';
    if (position.x === 0) return 'Y-axis';
    if (position.y === 0) return 'X-axis';
    if (position.x > 0 && position.y > 0) return 'Quadrant I (+,+)';
    if (position.x < 0 && position.y > 0) return 'Quadrant II (−,+)';
    if (position.x < 0 && position.y < 0) return 'Quadrant III (−,−)';
    if (position.x > 0 && position.y < 0) return 'Quadrant IV (+,−)';
    return 'Unknown';
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Interactive 2D Space</h3>
      <p className={styles.description}>
        Use the sliders to move the point anywhere on the 2D plane. The point can move in two independent directions: X (horizontal) and Y (vertical).
      </p>

      <div ref={mountRef} className={styles.canvas}></div>

      <div className={styles.controls}>
        <div className={styles.sliderGroup}>
          <label className={styles.sliderLabel}>
            <span className={styles.axisLabel} style={{ color: '#ef4c3c' }}>X-axis</span>
            <span style={{ color: '#ef4c3c' }}>Coordinate: {position.x.toFixed(1)}</span>
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
            <span className={styles.axisLabel} style={{ color: '#2ecc71' }}>Y-axis</span>
            <span style={{ color: '#2ecc71' }}>Coordinate: {position.y.toFixed(1)}</span>
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
        <h4>Understanding 2D Space:</h4>
        <ul>
          <li><strong>Two Independent Axes:</strong> X (red, horizontal) and Y (green, vertical) are completely independent</li>
          <li><strong>The Plane:</strong> The point can now move anywhere on a flat surface, not just along a line</li>
          <li><strong>Coordinates:</strong> Need two numbers (X,Y) to describe the point's position</li>
          <li><strong>Four Quadrants:</strong> Created by the positive/negative combinations of X and Y</li>
          <li><strong>Red line:</strong> Shows X component (horizontal distance from origin)</li>
          <li><strong>Green line:</strong> Shows Y component (vertical distance from origin)</li>
          <li><strong>Scroll to zoom:</strong> Get a closer or wider view of the plane</li>
        </ul>
      </div>
    </div>
  );
}
