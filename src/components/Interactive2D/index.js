import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import BlenderViewport from '../BlenderViewport';

export default function Interactive2D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  
  // Animation step (0-4)
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Refs for scene objects that change per step
  const objectsRef = useRef({
    originPoint: null,
    xAxis: null,
    yAxis: null,
    movingPoint: null,
    plane: null,
    grid: null,
    ticks: [],
    labels: []
  });

  // Position state for transform panel (used in step 3)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Animation refs
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const totalSteps = 6;

  // Autoplay - automatically progress through steps
  useEffect(() => {
    if (!isPlaying) return;
    
    const autoplayInterval = setInterval(() => {
      setStep(prevStep => {
        if (prevStep < totalSteps - 1) {
          return prevStep + 1;
        } else {
          return 0;
        }
      });
      isAnimatingRef.current = false;
    }, 6000); // 6 seconds per step

    return () => clearInterval(autoplayInterval);
  }, [isPlaying]);

  // Step descriptions for the info box
  const stepInfo = [
    {
      title: "The Origin",
      text: "We start with the World Origin at coordinates (0, 0). This is our reference point in 2D space."
    },
    {
      title: "The X Axis",
      text: "The red X axis extends horizontally. Moving right is positive, moving left is negative."
    },
    {
      title: "The Y Axis", 
      text: "The green Y axis extends vertically. Moving up is positive, moving down is negative."
    },
    {
      title: "Position in 2D",
      text: "A point can now move freely in two dimensions. Its position is described by (X, Y) coordinates."
    },
    {
      title: "The Triangle",
      text: "With three points, we define the first enclosed shape - the Triangle. It is the most basic polygon and the foundation of all 3D graphics."
    },
    {
      title: "The Quad (Face)",
      text: "By adding a fourth point, we create a second triangle. Together they form a Quad - the building block of 3D surfaces."
    }
  ];

  // Calculate stats based on step
  const getStats = () => {
    if (step < 4) {
      return { points: 1, lines: step >= 1 ? (step >= 2 ? 2 : 1) : 0 };
    } else if (step === 4) {
      // Triangle: 3 points, 3 lines
      return { points: 3, lines: 3 };
    } else {
      // Plane: 4 points, 4 lines
      return { points: 4, lines: 4 };
    }
  };

  const stats = getStats();

  // Navigation handlers
  const handlePrevStep = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
      isAnimatingRef.current = false;
    }
  }, [step]);

  const handleNextStep = useCallback(() => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
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

    // Camera - orthographic for true 2D view
    const aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
    const frustumSize = 14;
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
    if (objects.originPoint) { scene.remove(objects.originPoint); objects.originPoint = null; }
    if (objects.xAxis) { scene.remove(objects.xAxis); objects.xAxis = null; }
    if (objects.yAxis) { scene.remove(objects.yAxis); objects.yAxis = null; }
    if (objects.movingPoint) { scene.remove(objects.movingPoint); objects.movingPoint = null; }
    if (objects.plane) { scene.remove(objects.plane); objects.plane = null; }
    if (objects.grid) { scene.remove(objects.grid); objects.grid = null; }
    objects.ticks.forEach(t => scene.remove(t));
    objects.ticks = [];
    objects.labels.forEach(l => scene.remove(l));
    objects.labels = [];

    // Create permanent origin point (small orange dot)
    const originGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const originMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xe77e22,
      depthTest: false
    });
    const originPoint = new THREE.Mesh(originGeometry, originMaterial);
    originPoint.renderOrder = 1001;
    originPoint.position.set(0, 0, 0);
    scene.add(originPoint);
    objects.originPoint = originPoint;

    // Origin "0,0" label
    const originCanvas = document.createElement('canvas');
    const originCtx = originCanvas.getContext('2d');
    originCanvas.width = 48;
    originCanvas.height = 32;
    originCtx.fillStyle = '#e77e22';
    originCtx.font = '500 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    originCtx.textAlign = 'center';
    originCtx.textBaseline = 'middle';
    originCtx.fillText('0,0', 24, 16);
    const originTexture = new THREE.CanvasTexture(originCanvas);
    const originSpriteMat = new THREE.SpriteMaterial({ map: originTexture, transparent: true });
    const originSprite = new THREE.Sprite(originSpriteMat);
    originSprite.position.set(0.5, 0.5, 0);
    originSprite.scale.set(0.8, 0.5, 1);
    scene.add(originSprite);
    objects.labels.push(originSprite);

    // Step 1+: Add X axis (red)
    if (step >= 1) {
      const axisLength = 15;
      const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-axisLength, 0, 0),
        new THREE.Vector3(axisLength, 0, 0)
      ]);
      const xAxisMaterial = new THREE.LineBasicMaterial({ 
        color: 0xff5252,
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial);
      xAxis.renderOrder = 998;
      scene.add(xAxis);
      objects.xAxis = xAxis;

      // X axis ticks and labels
      const tickMaterial = new THREE.LineBasicMaterial({ 
        color: 0x555555,
        linewidth: 1,
        depthTest: false
      });

      for (let i = -6; i <= 6; i++) {
        if (i === 0) continue; // Skip origin
        const tickGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(i, -0.15, 0),
          new THREE.Vector3(i, 0.15, 0)
        ]);
        const tick = new THREE.Line(tickGeometry, tickMaterial);
        tick.renderOrder = 997;
        scene.add(tick);
        objects.ticks.push(tick);

        // X tick labels
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 32;
        canvas.height = 32;
        ctx.fillStyle = '#666666';
        ctx.font = '300 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(i.toString(), 16, 16);
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.position.set(i, -0.5, 0);
        sprite.scale.set(0.5, 0.5, 1);
        scene.add(sprite);
        objects.labels.push(sprite);
      }
    }

    // Step 2+: Add Y axis (green) and grid
    if (step >= 2) {
      // Add grid
      const gridHelper = new THREE.GridHelper(20, 20, 0x333333, 0x252525);
      gridHelper.rotation.x = Math.PI / 2;
      gridHelper.position.z = -0.1;
      scene.add(gridHelper);
      objects.grid = gridHelper;

      const axisLength = 15;
      const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -axisLength, 0),
        new THREE.Vector3(0, axisLength, 0)
      ]);
      const yAxisMaterial = new THREE.LineBasicMaterial({ 
        color: 0x2dc66b,
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial);
      yAxis.renderOrder = 998;
      scene.add(yAxis);
      objects.yAxis = yAxis;

      // Y axis ticks and labels
      const tickMaterial = new THREE.LineBasicMaterial({ 
        color: 0x555555,
        linewidth: 1,
        depthTest: false
      });

      for (let i = -5; i <= 5; i++) {
        if (i === 0) continue; // Skip origin
        const tickGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-0.15, i, 0),
          new THREE.Vector3(0.15, i, 0)
        ]);
        const tick = new THREE.Line(tickGeometry, tickMaterial);
        tick.renderOrder = 997;
        scene.add(tick);
        objects.ticks.push(tick);

        // Y tick labels
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 32;
        canvas.height = 32;
        ctx.fillStyle = '#666666';
        ctx.font = '300 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(i.toString(), 16, 16);
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.position.set(-0.5, i, 0);
        sprite.scale.set(0.5, 0.5, 1);
        scene.add(sprite);
        objects.labels.push(sprite);
      }
    }

    // Step 3: Add moving point with animation
    if (step === 3) {
      // Create moving point
      const pointGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const pointMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xe77e22,
        depthTest: false
      });
      const movingPoint = new THREE.Mesh(pointGeometry, pointMaterial);
      
      const haloGeometry = new THREE.SphereGeometry(0.35, 32, 32);
      const haloMaterial = new THREE.MeshBasicMaterial({
        color: 0xe77e22,
        transparent: true,
        opacity: 0.25,
        depthTest: false
      });
      const halo = new THREE.Mesh(haloGeometry, haloMaterial);
      movingPoint.add(halo);
      movingPoint.renderOrder = 1000;
      movingPoint.position.set(2, 2, 0);
      scene.add(movingPoint);
      objects.movingPoint = movingPoint;

      // Animate point in a circle
      isAnimatingRef.current = true;
      let angle = 0;
      const radius = 3;
      
      const animatePoint = () => {
        if (!isAnimatingRef.current || step !== 3) return;
        
        angle += 0.02;
        const x = parseFloat((Math.cos(angle) * radius).toFixed(1));
        const y = parseFloat((Math.sin(angle) * radius).toFixed(1));
        
        if (objects.movingPoint) {
          objects.movingPoint.position.set(x, y, 0);
        }
        
        // Update position state for transform panel
        setPosition({ x, y });
        
        animationRef.current = requestAnimationFrame(animatePoint);
      };
      
      animatePoint();
    }

    // Step 4: Show triangle with 3 points starting from origin
    if (step === 4) {
      // Triangle vertices - right triangle from origin
      const trianglePoints = [
        new THREE.Vector3(0, 0, 0),   // Origin
        new THREE.Vector3(0, 2, 0),   // Top
        new THREE.Vector3(2, 0, 0)    // Right
      ];

      // Create triangle fill
      const triangleShape = new THREE.Shape();
      triangleShape.moveTo(0, 0);
      triangleShape.lineTo(0, 2);
      triangleShape.lineTo(2, 0);
      triangleShape.lineTo(0, 0);
      
      const triangleGeometry = new THREE.ShapeGeometry(triangleShape);
      const triangleMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xe77e22,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
      triangle.renderOrder = 996;
      scene.add(triangle);
      objects.plane = triangle;

      // Triangle border
      const borderGeometry = new THREE.BufferGeometry().setFromPoints([
        ...trianglePoints,
        trianglePoints[0] // Close the triangle
      ]);
      const borderMaterial = new THREE.LineBasicMaterial({ 
        color: 0xe77e22,
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const border = new THREE.Line(borderGeometry, borderMaterial);
      border.renderOrder = 999;
      scene.add(border);
      objects.ticks.push(border);

      // Corner points
      trianglePoints.forEach(point => {
        const cornerGeometry = new THREE.SphereGeometry(0.18, 32, 32);
        const cornerMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xe77e22,
          depthTest: false
        });
        const cornerPoint = new THREE.Mesh(cornerGeometry, cornerMaterial);
        
        // Add halo
        const haloGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const haloMaterial = new THREE.MeshBasicMaterial({
          color: 0xe77e22,
          transparent: true,
          opacity: 0.25,
          depthTest: false
        });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        cornerPoint.add(halo);
        
        cornerPoint.renderOrder = 1000;
        cornerPoint.position.copy(point);
        scene.add(cornerPoint);
        objects.ticks.push(cornerPoint);
      });

      // Pulsing animation for triangle
      let pulseDirection = 1;
      let pulseOpacity = 0.2;
      const pulseTriangle = () => {
        if (step !== 4) return;
        pulseOpacity += 0.008 * pulseDirection;
        if (pulseOpacity > 0.4) pulseDirection = -1;
        if (pulseOpacity < 0.15) pulseDirection = 1;
        triangleMaterial.opacity = pulseOpacity;
        requestAnimationFrame(pulseTriangle);
      };
      pulseTriangle();
    }

    // Step 5: Show quad (2 triangles) - adding 4th point to previous triangle
    if (step === 5) {
      // Quad vertices - extends the triangle from step 4
      const quadPoints = [
        new THREE.Vector3(0, 0, 0),   // Origin (shared)
        new THREE.Vector3(0, 2, 0),   // Top-left (shared)
        new THREE.Vector3(2, 0, 0),   // Bottom-right (shared)
        new THREE.Vector3(2, 2, 0)    // NEW: Top-right (4th point)
      ];

      // First triangle (same as step 4) - orange
      const triangle1Shape = new THREE.Shape();
      triangle1Shape.moveTo(0, 0);
      triangle1Shape.lineTo(0, 2);
      triangle1Shape.lineTo(2, 0);
      triangle1Shape.lineTo(0, 0);
      
      const triangle1Geometry = new THREE.ShapeGeometry(triangle1Shape);
      const triangle1Material = new THREE.MeshBasicMaterial({ 
        color: 0xe77e22,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const triangle1 = new THREE.Mesh(triangle1Geometry, triangle1Material);
      triangle1.renderOrder = 996;
      scene.add(triangle1);
      objects.ticks.push(triangle1);

      // Second triangle (new) - blue/cyan to show it's the added triangle
      const triangle2Shape = new THREE.Shape();
      triangle2Shape.moveTo(2, 2);
      triangle2Shape.lineTo(0, 2);
      triangle2Shape.lineTo(2, 0);
      triangle2Shape.lineTo(2, 2);
      
      const triangle2Geometry = new THREE.ShapeGeometry(triangle2Shape);
      const triangle2Material = new THREE.MeshBasicMaterial({ 
        color: 0x308ce7,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const triangle2 = new THREE.Mesh(triangle2Geometry, triangle2Material);
      triangle2.renderOrder = 996;
      scene.add(triangle2);
      objects.plane = triangle2;

      // Outer border of the quad
      const borderGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 2, 0),
        new THREE.Vector3(2, 2, 0),
        new THREE.Vector3(2, 0, 0),
        new THREE.Vector3(0, 0, 0)
      ]);
      const borderMaterial = new THREE.LineBasicMaterial({ 
        color: 0xe77e22,
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const border = new THREE.Line(borderGeometry, borderMaterial);
      border.renderOrder = 999;
      scene.add(border);
      objects.ticks.push(border);

      // Diagonal line showing the two triangles
      const diagonalGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 2, 0),
        new THREE.Vector3(2, 0, 0)
      ]);
      const diagonalMaterial = new THREE.LineDashedMaterial({ 
        color: 0xffffff,
        linewidth: 1,
        dashSize: 0.15,
        gapSize: 0.1,
        transparent: true,
        opacity: 0.5
      });
      const diagonal = new THREE.Line(diagonalGeometry, diagonalMaterial);
      diagonal.computeLineDistances();
      diagonal.renderOrder = 998;
      scene.add(diagonal);
      objects.ticks.push(diagonal);

      // Corner points with halos
      quadPoints.forEach((point, index) => {
        const cornerGeometry = new THREE.SphereGeometry(0.15, 32, 32);
        const cornerMaterial = new THREE.MeshBasicMaterial({ 
          color: index === 3 ? 0x308ce7 : 0xe77e22, // New point is blue
          depthTest: false
        });
        const cornerPoint = new THREE.Mesh(cornerGeometry, cornerMaterial);
        
        // Add halo
        const haloGeometry = new THREE.SphereGeometry(0.25, 32, 32);
        const haloMaterial = new THREE.MeshBasicMaterial({
          color: index === 3 ? 0x308ce7 : 0xe77e22,
          transparent: true,
          opacity: 0.25,
          depthTest: false
        });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        cornerPoint.add(halo);
        
        cornerPoint.renderOrder = 1000;
        cornerPoint.position.copy(point);
        scene.add(cornerPoint);
        objects.ticks.push(cornerPoint);
      });

      // Pulsing animation for the new triangle
      let pulseDirection = 1;
      let pulseOpacity = 0.25;
      const pulsePlane = () => {
        if (step !== 5) return;
        pulseOpacity += 0.008 * pulseDirection;
        if (pulseOpacity > 0.45) pulseDirection = -1;
        if (pulseOpacity < 0.2) pulseDirection = 1;
        triangle2Material.opacity = pulseOpacity;
        requestAnimationFrame(pulsePlane);
      };
      pulsePlane();
    }

    return () => {
      isAnimatingRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [step]);

  // Get current location for transform panel
  const getLocation = () => {
    if (step === 3) {
      return { x: position.x, y: position.y, z: 0 };
    }
    if (step === 4) {
      return { x: 0, y: 0, z: 0 };
    }
    return { x: 0, y: 0, z: 0 };
  };

  return (
    <BlenderViewport
      title="Interactive 2D Space"
      activeTab="Plane (2D)"
      stats={{ points: stats.points, lines: stats.lines }}
      use1DLabels={true}
      location={getLocation()}
      rotation={{ x: 0, y: 0, z: 0 }}
      scale={{ x: 1, y: 1, z: 1 }}
      disableTransform={step !== 3}
      disableScale={true}
      disableYZ={false}
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
