import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import BlenderViewport from '../BlenderViewport';

export default function Interactive1D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  
  // Animation step (0-4)
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Refs for scene objects that change per step
  const objectsRef = useRef({
    point1: null,
    point2: null,
    greyLine: null,
    orangeEdge: null,
    ticks: [],
    tickLabels: []
  });

  // Animation frame ref for step 3
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const totalSteps = 5;

  // Autoplay - automatically progress through steps
  useEffect(() => {
    if (!isPlaying) return;
    
    const autoplayInterval = setInterval(() => {
      setStep(prevStep => {
        if (prevStep < totalSteps - 1) {
          return prevStep + 1;
        } else {
          // Loop back to start
          return 0;
        }
      });
      setPosition(0);
      isAnimatingRef.current = false;
    }, 6000); // 6 seconds per step

    return () => clearInterval(autoplayInterval);
  }, [isPlaying]);

  // Step descriptions for the info box
  const stepInfo = [
    {
      title: "The Origin",
      text: "We inherit the World Origin from 0D. But now, we extend a line infinitely to the left and right."
    },
    {
      title: "Coordinates",
      text: "By adding numbers at steady intervals, we can measure distance. Negative to the left, Positive to the right."
    },
    {
      title: "The X Axis",
      text: "In 3D space, this red line is the X Axis. It represents our first dimension of freedom."
    },
    {
      title: "Position (Coordinates)",
      text: "We can now move the point. Look at the Location X in the properties panel updating as it moves."
    },
    {
      title: "The Line Segment",
      text: "If we add a second point, we contain the infinite line into a finite piece. This is a Line Segment."
    }
  ];

  // Calculate stats based on step
  const getStats = () => {
    if (step < 4) {
      return { points: 1, lines: 0 };
    } else {
      return { points: 2, lines: 1 };
    }
  };

  const stats = getStats();

  // Navigation handlers
  const handlePrevStep = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
      setPosition(0);
      isAnimatingRef.current = false;
    }
  }, [step]);

  const handleNextStep = useCallback(() => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
      setPosition(0);
      isAnimatingRef.current = false;
    }
  }, [step]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1d1d1d);
    sceneRef.current = scene;

    // Camera - orthographic for true 2D view of 1D line
    const aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
    const frustumSize = 12;
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
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update scene based on current step
  useEffect(() => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;
    const objects = objectsRef.current;

    // Clear previous dynamic objects
    if (objects.point1) { scene.remove(objects.point1); objects.point1 = null; }
    if (objects.point2) { scene.remove(objects.point2); objects.point2 = null; }
    if (objects.greyLine) { scene.remove(objects.greyLine); objects.greyLine = null; }
    if (objects.orangeEdge) { scene.remove(objects.orangeEdge); objects.orangeEdge = null; }
    objects.ticks.forEach(t => scene.remove(t));
    objects.ticks = [];
    objects.tickLabels.forEach(l => scene.remove(l));
    objects.tickLabels = [];

    // Create infinite line (grey for steps 0-1, red from step 2)
    const lineLength = 20;
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-lineLength, 0, 0),
      new THREE.Vector3(lineLength, 0, 0)
    ]);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: step >= 2 ? 0xff5252 : 0x666666,
      linewidth: 2,
      transparent: true,
      opacity: 0.8
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.renderOrder = 998;
    scene.add(line);
    objects.greyLine = line;

    // Create permanent small origin point
    const originGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const originMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xe77e22,
      depthTest: false
    });
    const originPoint = new THREE.Mesh(originGeometry, originMaterial);
    originPoint.renderOrder = 999;
    originPoint.position.set(0, 0, 0);
    scene.add(originPoint);
    objects.ticks.push(originPoint); // reuse for cleanup

    // Origin "0" label
    const originCanvas = document.createElement('canvas');
    const originCtx = originCanvas.getContext('2d');
    originCanvas.width = 32;
    originCanvas.height = 32;
    originCtx.fillStyle = '#e77e22';
    originCtx.font = '500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    originCtx.textAlign = 'center';
    originCtx.textBaseline = 'middle';
    originCtx.fillText('0', 16, 16);
    const originTexture = new THREE.CanvasTexture(originCanvas);
    const originSpriteMat = new THREE.SpriteMaterial({ map: originTexture, transparent: true });
    const originSprite = new THREE.Sprite(originSpriteMat);
    originSprite.position.set(0, 0.5, 0);
    originSprite.scale.set(0.5, 0.5, 1);
    scene.add(originSprite);
    objects.ticks.push(originSprite); // reuse for cleanup

    // Create main point (orange dot)
    const pointGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const pointMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xe77e22,
      depthTest: false
    });
    const point1 = new THREE.Mesh(pointGeometry, pointMaterial);
    
    // Add halo
    const haloGeometry = new THREE.SphereGeometry(0.35, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xe77e22,
      transparent: true,
      opacity: 0.25,
      depthTest: false
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    point1.add(halo);
    point1.renderOrder = 1000;
    point1.position.set(0, 0, 0);
    scene.add(point1);
    objects.point1 = point1;

    // Step 1+: Add coordinate ticks and labels
    if (step >= 1) {
      const tickMaterial = new THREE.LineBasicMaterial({ 
        color: 0x555555,
        linewidth: 1,
        depthTest: false
      });

      for (let i = -7; i <= 7; i++) {
        // Tick marks
        const tickGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(i, -0.2, 0),
          new THREE.Vector3(i, 0.2, 0)
        ]);
        const tick = new THREE.Line(tickGeometry, tickMaterial);
        tick.renderOrder = 997;
        scene.add(tick);
        objects.ticks.push(tick);

        // Tick labels
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 48;
        canvas.height = 48;
        context.fillStyle = '#666666';
        context.font = '300 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(i.toString(), 24, 24);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(i, -0.75, 0);
        sprite.scale.set(0.7, 0.7, 1);
        scene.add(sprite);
        objects.tickLabels.push(sprite);
      }
    }

    // Step 4: Add second point and orange edge
    if (step === 4) {
      // Position first point at -2
      point1.position.set(-2, 0, 0);

      // Second point at position 3
      const point2Geometry = new THREE.SphereGeometry(0.2, 32, 32);
      const point2Material = new THREE.MeshBasicMaterial({ 
        color: 0xe77e22,
        depthTest: false
      });
      const point2 = new THREE.Mesh(point2Geometry, point2Material);
      
      const halo2Geometry = new THREE.SphereGeometry(0.35, 32, 32);
      const halo2Material = new THREE.MeshBasicMaterial({
        color: 0xe77e22,
        transparent: true,
        opacity: 0.25,
        depthTest: false
      });
      const halo2 = new THREE.Mesh(halo2Geometry, halo2Material);
      point2.add(halo2);
      point2.renderOrder = 1000;
      point2.position.set(3, 0, 0);
      scene.add(point2);
      objects.point2 = point2;

      // Orange edge between points - highlighted with glow effect
      // Create a thicker background glow line
      const glowGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-2, 0, 0),
        new THREE.Vector3(3, 0, 0)
      ]);
      const glowMaterial = new THREE.LineBasicMaterial({ 
        color: 0xe77e22,
        linewidth: 8,
        transparent: true,
        opacity: 0.3
      });
      const glowLine = new THREE.Line(glowGeometry, glowMaterial);
      glowLine.renderOrder = 998;
      scene.add(glowLine);
      objects.ticks.push(glowLine); // reuse ticks array for cleanup

      // Main edge line
      const edgeGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-2, 0, 0),
        new THREE.Vector3(3, 0, 0)
      ]);
      const edgeMaterial = new THREE.LineBasicMaterial({ 
        color: 0xe77e22,
        linewidth: 4
      });
      const orangeEdge = new THREE.Line(edgeGeometry, edgeMaterial);
      orangeEdge.renderOrder = 999;
      scene.add(orangeEdge);
      objects.orangeEdge = orangeEdge;

      // Add pulsing animation for edge highlight
      let pulseDirection = 1;
      let pulseOpacity = 0.3;
      const pulseEdge = () => {
        if (step !== 4) return;
        pulseOpacity += 0.015 * pulseDirection;
        if (pulseOpacity > 0.5) pulseDirection = -1;
        if (pulseOpacity < 0.2) pulseDirection = 1;
        glowMaterial.opacity = pulseOpacity;
        requestAnimationFrame(pulseEdge);
      };
      pulseEdge();
    }

    // Step 3: Animate point back and forth
    if (step === 3) {
      isAnimatingRef.current = true;
      let direction = 1;
      let pos = 0;
      
      const animatePoint = () => {
        if (!isAnimatingRef.current) return;
        
        pos += 0.03 * direction;
        if (pos > 4) direction = -1;
        if (pos < -4) direction = 1;
        
        setPosition(parseFloat(pos.toFixed(1)));
        
        if (objects.point1) {
          objects.point1.position.set(pos, 0, 0);
        }
        
        animationRef.current = requestAnimationFrame(animatePoint);
      };
      
      animatePoint();
    }

    return () => {
      isAnimatingRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [step]);

  // Calculate location for properties panel
  const getLocation = () => {
    if (step === 3) {
      return { x: parseFloat(position.toFixed(1)), y: 0, z: 0 };
    }
    if (step === 4) {
      return { x: -2, y: 0, z: 0 };
    }
    return { x: 0, y: 0, z: 0 };
  };

  return (
    <BlenderViewport
      title="Interactive 1D Space"
      activeTab="Line (1D)"
      stats={{ points: stats.points, lines: stats.lines }}
      use1DLabels={true}
      location={getLocation()}
      rotation={{ x: 0, y: 0, z: 0 }}
      scale={{ x: 1, y: 1, z: 1 }}
      disableTransform={step !== 3}
      disableScale={true}
      disableYZ={true}
      nurbsMode={false}
      timelineFrame={step + 1}
      totalFrames={totalSteps}
      isPlaying={isPlaying}
      onPlayPause={handlePlayPause}
      onPrevStep={handlePrevStep}
      onNextStep={handleNextStep}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
        {/* Info box in bottom left */}
        <div style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          background: 'rgba(29, 29, 29, 0.95)',
          backdropFilter: 'blur(4px)',
          padding: '12px 16px',
          borderRadius: 8,
          border: '1px solid #444',
          maxWidth: 320,
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          <div style={{ 
            fontSize: 14, 
            fontWeight: 700, 
            color: '#e77e22', 
            marginBottom: 6 
          }}>
            {stepInfo[step].title}
          </div>
          <div style={{ 
            fontSize: 12, 
            color: '#ccc', 
            lineHeight: 1.5 
          }}>
            {stepInfo[step].text}
          </div>
        </div>
      </div>
    </BlenderViewport>
  );
}
