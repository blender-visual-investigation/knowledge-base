import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './styles.module.css';

export default function Interactive1D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const pointRef = useRef(null);
  const rendererRef = useRef(null);
  const helperLineRef = useRef(null);
  
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    sceneRef.current = scene;

    // Camera - orthographic for true 2D view of 1D line
    const aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
    const frustumSize = 15;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // X-axis line with gradient effect (simulated with segments)
    const axisLength = 12;
    const segmentCount = 100;
    const axisGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    for (let i = 0; i <= segmentCount; i++) {
      const t = i / segmentCount;
      const x = -axisLength + (2 * axisLength * t);
      positions.push(x, 0, 0);
      // #308ce7 (48,140,231) blue
      colors.push(48/255, 140/255, 231/255);
    }

    axisGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    axisGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const axisMaterial = new THREE.LineBasicMaterial({ 
      vertexColors: true,
      linewidth: 2,
      depthTest: false,
      transparent: true,
      opacity: 0.8
    });
    const axis = new THREE.Line(axisGeometry, axisMaterial);
    axis.renderOrder = 999;
    scene.add(axis);

    // Tick marks
    const tickMaterial = new THREE.LineBasicMaterial({ 
      color: 0x888888,
      linewidth: 2,
      depthTest: false
    });

    [-10, -5, 0, 5, 10].forEach(x => {
      const tickGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, -0.5, 0),
        new THREE.Vector3(x, 0.5, 0)
      ]);
      const tick = new THREE.Line(tickGeometry, tickMaterial);
      tick.renderOrder = 998;
      scene.add(tick);

      // Tick labels using sprites
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 64;
      canvas.height = 64;
      context.fillStyle = '#ffffff';
      context.font = 'Bold 32px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(x.toString(), 32, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(x, -1.5, 0);
      sprite.scale.set(1.5, 1.5, 1);
      scene.add(sprite);
    });

    // Origin label
    const originCanvas = document.createElement('canvas');
    const originContext = originCanvas.getContext('2d');
    originCanvas.width = 128;
    originCanvas.height = 64;
    originContext.fillStyle = '#ff9f2c'; // orange
    originContext.fillRect(0, 10, 128, 44);
    originContext.fillStyle = '#111111'; // black text
    originContext.font = 'Bold 24px Arial';
    originContext.textAlign = 'center';
    originContext.textBaseline = 'middle';
    originContext.fillText('Origin (0)', 64, 32);
    const originTexture = new THREE.CanvasTexture(originCanvas);
    const originSpriteMaterial = new THREE.SpriteMaterial({ 
      map: originTexture,
      transparent: true
    });
    const originSprite = new THREE.Sprite(originSpriteMaterial);
    originSprite.position.set(0, 2, 0);
    originSprite.scale.set(3, 1.5, 1);
    scene.add(originSprite);

    // Point sphere
    const pointGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const pointMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff9f2c, // orange
      depthTest: false
    });
    const point = new THREE.Mesh(pointGeometry, pointMaterial);
    // Add a glow/halo to the point
    const haloGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9f2c,
      transparent: true,
      opacity: 0.3,
      depthTest: false
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    point.add(halo);
    point.renderOrder = 1000;
    scene.add(point);
    pointRef.current = point;

    // Helper line from origin to point
    const helperLineGeometry = new THREE.BufferGeometry();
    const helperLineMaterial = new THREE.LineDashedMaterial({
      color: 0x2dc66b, // green
      linewidth: 1,
      dashSize: 0.2,
      gapSize: 0.2,
      opacity: 0.4,
      transparent: true
    });
    const helperLine = new THREE.Line(helperLineGeometry, helperLineMaterial);
    scene.add(helperLine);
    helperLineRef.current = helperLine;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
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
    };
  }, []);

  // Update point position when state changes
  useEffect(() => {
    if (pointRef.current && helperLineRef.current) {
      pointRef.current.position.set(position, 0, 0);
      
      // Update helper line
      helperLineRef.current.geometry.setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(position, 0, 0)
      ]);
      helperLineRef.current.computeLineDistances();
    }
  }, [position]);

  const handleSliderChange = (value) => {
    setPosition(parseFloat(value));
  };

  const resetPosition = () => {
    setPosition(0);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Interactive 1D Space</h3>
      <p className={styles.description}>
        Use the slider to move the point along the line. The point can only move left (negative) or right (positive) relative to the origin.
      </p>

      <div className={styles.viewportWrapper}>
        <div ref={mountRef} className={styles.canvas}></div>

        <div className={styles.controls}>
          <div className={styles.sliderGroup}>
            <label className={styles.sliderLabel}>
              <span className={styles.axisLabel} style={{ color: '#ff5252' }}>X-axis</span>
              <span style={{ color: '#ff5252' }}>Coordinate: {position.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={position}
              onChange={(e) => handleSliderChange(e.target.value)}
              className={styles.slider}
            />
          </div>
        </div>
      </div>

      <div className={styles.explanation}>
        <h4>Understanding 1D Space:</h4>
        <ul>
          <li><strong>The Point</strong> can only move along a single line (the X-axis)</li>
          <li><strong>The Origin</strong> (0) is our reference point - where measurements begin</li>
          <li><strong>Direction</strong> is either positive (right) or negative (left) from the origin</li>
          <li><strong>The Coordinate</strong> is a single number describing the point's position</li>
          <li><strong>Dashed line:</strong> Shows the distance from origin to the point</li>
          <li>In 1D, there is no "up/down" or "forward/back" - only this one dimension</li>
        </ul>
      </div>
    </div>
  );
}
