import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import BlenderViewport from '../BlenderViewport';

export default function Interactive3D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  
  // Animation step (0-5)
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  
  // Refs for scene objects that change per step
  const objectsRef = useRef({
    originPoint: null,
    xAxis: null,
    yAxis: null,
    zAxis: null,
    quad: null,
    prism: null,
    cube: null,
    gridXY: null,
    gridXZ: null,
    ticks: [],
    labels: []
  });

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
      title: "The Face (from 2D)",
      text: "We start with the quad from 2D space - four points forming two triangles. This is our foundation."
    },
    {
      title: "The Z Axis",
      text: "The blue Z axis extends into depth. Now we have three dimensions of freedom: X, Y, and Z."
    },
    {
      title: "Depth (The Third Dimension)",
      text: "By moving a point along Z, we add depth. Position is now described by (X, Y, Z) coordinates."
    },
    {
      title: "The Prism",
      text: "Extruding a triangle along Z creates a Prism - our first 3D volume with triangular faces."
    },
    {
      title: "The Cube",
      text: "Extruding a quad creates a Cube - 6 faces, 12 edges, 8 vertices. The fundamental 3D primitive."
    },
    {
      title: "The Mesh",
      text: "Complex 3D models are meshes - networks of vertices, edges, and faces defining any shape."
    }
  ];

  // Calculate stats based on step
  const getStats = () => {
    switch(step) {
      case 0: return { points: 4, segments: 5 }; // Quad (4 points, 4 edges + 1 diagonal)
      case 1: return { points: 4, segments: 5 }; // Same + Z axis shown
      case 2: return { points: 5, segments: 5 }; // Moving point
      case 3: return { points: 6, segments: 9 }; // Prism (triangular)
      case 4: return { points: 8, segments: 12 }; // Cube
      case 5: return { points: 8, segments: 12 }; // Mesh
      default: return { points: 4, segments: 4 };
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

    // Camera - perspective for 3D
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

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
    controls.minDistance = 5;
    controls.maxDistance = 30;
    controls.enableZoom = true;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
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
    if (objects.zAxis) { scene.remove(objects.zAxis); objects.zAxis = null; }
    if (objects.quad) { scene.remove(objects.quad); objects.quad = null; }
    if (objects.prism) { scene.remove(objects.prism); objects.prism = null; }
    if (objects.cube) { scene.remove(objects.cube); objects.cube = null; }
    if (objects.gridXY) { scene.remove(objects.gridXY); objects.gridXY = null; }
    if (objects.gridXZ) { scene.remove(objects.gridXZ); objects.gridXZ = null; }
    objects.ticks.forEach(t => scene.remove(t));
    objects.ticks = [];
    objects.labels.forEach(l => scene.remove(l));
    objects.labels = [];

    // Create permanent origin point (small orange dot)
    const originGeometry = new THREE.SphereGeometry(0.08, 32, 32);
    const originMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xe77e22,
      depthTest: false
    });
    const originPoint = new THREE.Mesh(originGeometry, originMaterial);
    originPoint.renderOrder = 1001;
    originPoint.position.set(0, 0, 0);
    scene.add(originPoint);
    objects.originPoint = originPoint;

    // Origin "0,0,0" label
    const originCanvas = document.createElement('canvas');
    const originCtx = originCanvas.getContext('2d');
    originCanvas.width = 64;
    originCanvas.height = 32;
    originCtx.fillStyle = '#e77e22';
    originCtx.font = '500 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    originCtx.textAlign = 'center';
    originCtx.textBaseline = 'middle';
    originCtx.fillText('0,0,0', 32, 16);
    const originTexture = new THREE.CanvasTexture(originCanvas);
    const originSpriteMat = new THREE.SpriteMaterial({ map: originTexture, transparent: true });
    const originSprite = new THREE.Sprite(originSpriteMat);
    originSprite.position.set(0.5, 0.5, 0);
    originSprite.scale.set(1, 0.5, 1);
    scene.add(originSprite);
    objects.labels.push(originSprite);

    // X and Y axes (always visible)
    const axisLength = 10;
    
    // X-axis (Red)
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

    // Y-axis (Green)
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

    // Grid on XY plane (always visible)
    const gridXY = new THREE.GridHelper(12, 12, 0x333333, 0x252525);
    gridXY.rotation.x = Math.PI / 2;
    gridXY.position.z = -0.01;
    scene.add(gridXY);
    objects.gridXY = gridXY;

    // Step 0: Show the quad from 2D (face in XY plane)
    if (step >= 0) {
      // Quad vertices at Z=0
      const quadPoints = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 2, 0),
        new THREE.Vector3(2, 0, 0),
        new THREE.Vector3(2, 2, 0)
      ];

      // First triangle (orange)
      const triangle1Shape = new THREE.Shape();
      triangle1Shape.moveTo(0, 0);
      triangle1Shape.lineTo(0, 2);
      triangle1Shape.lineTo(2, 0);
      triangle1Shape.lineTo(0, 0);
      
      const triangle1Geometry = new THREE.ShapeGeometry(triangle1Shape);
      const triangle1Material = new THREE.MeshBasicMaterial({ 
        color: 0xe77e22,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const triangle1 = new THREE.Mesh(triangle1Geometry, triangle1Material);
      triangle1.renderOrder = 996;
      scene.add(triangle1);
      objects.ticks.push(triangle1);

      // Second triangle (blue)
      const triangle2Shape = new THREE.Shape();
      triangle2Shape.moveTo(2, 2);
      triangle2Shape.lineTo(0, 2);
      triangle2Shape.lineTo(2, 0);
      triangle2Shape.lineTo(2, 2);
      
      const triangle2Geometry = new THREE.ShapeGeometry(triangle2Shape);
      const triangle2Material = new THREE.MeshBasicMaterial({ 
        color: 0x308ce7,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const triangle2 = new THREE.Mesh(triangle2Geometry, triangle2Material);
      triangle2.renderOrder = 996;
      scene.add(triangle2);
      objects.quad = triangle2;

      // Quad border
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

      // Diagonal
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

      // Corner points (only for step 0-2)
      if (step <= 2) {
        quadPoints.forEach((point, index) => {
          const cornerGeometry = new THREE.SphereGeometry(0.12, 32, 32);
          const cornerMaterial = new THREE.MeshBasicMaterial({ 
            color: index === 3 ? 0x308ce7 : 0xe77e22,
            depthTest: false
          });
          const cornerPoint = new THREE.Mesh(cornerGeometry, cornerMaterial);
          cornerPoint.renderOrder = 1000;
          cornerPoint.position.copy(point);
          scene.add(cornerPoint);
          objects.ticks.push(cornerPoint);
        });
      }
    }

    // Step 1+: Add Z axis
    if (step >= 1) {
      // Z-axis (Blue)
      const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -axisLength),
        new THREE.Vector3(0, 0, axisLength)
      ]);
      const zAxisMaterial = new THREE.LineBasicMaterial({ 
        color: 0x308ce7,
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const zAxis = new THREE.Line(zAxisGeometry, zAxisMaterial);
      zAxis.renderOrder = 998;
      scene.add(zAxis);
      objects.zAxis = zAxis;

      // Grid on XZ plane
      const gridXZ = new THREE.GridHelper(12, 12, 0x333333, 0x252525);
      gridXZ.position.y = -0.01;
      scene.add(gridXZ);
      objects.gridXZ = gridXZ;
    }

    // Step 2: Animate a point moving in Z
    if (step === 2) {
      // Create moving point
      const pointGeometry = new THREE.SphereGeometry(0.18, 32, 32);
      const pointMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x308ce7,
        depthTest: false
      });
      const movingPoint = new THREE.Mesh(pointGeometry, pointMaterial);
      
      const haloGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      const haloMaterial = new THREE.MeshBasicMaterial({
        color: 0x308ce7,
        transparent: true,
        opacity: 0.25,
        depthTest: false
      });
      const halo = new THREE.Mesh(haloGeometry, haloMaterial);
      movingPoint.add(halo);
      movingPoint.renderOrder = 1000;
      movingPoint.position.set(1, 1, 0);
      scene.add(movingPoint);
      objects.ticks.push(movingPoint);

      // Animate point along Z
      isAnimatingRef.current = true;
      let zPos = 0;
      let direction = 1;
      
      const animatePoint = () => {
        if (!isAnimatingRef.current || step !== 2) return;
        
        zPos += 0.03 * direction;
        if (zPos > 3) direction = -1;
        if (zPos < 0) direction = 1;
        
        movingPoint.position.set(1, 1, zPos);
        setPosition({ x: 1, y: 1, z: parseFloat(zPos.toFixed(1)) });
        
        animationRef.current = requestAnimationFrame(animatePoint);
      };
      
      animatePoint();
    }

    // Step 3: Show prism (triangular extrusion)
    if (step === 3) {
      // Create triangular prism
      const prismGeometry = new THREE.BufferGeometry();
      
      // Vertices for triangular prism
      const vertices = new Float32Array([
        // Front triangle (z=0)
        0, 0, 0,  0, 2, 0,  2, 0, 0,
        // Back triangle (z=2)
        0, 0, 2,  0, 2, 2,  2, 0, 2,
        // Bottom face
        0, 0, 0,  2, 0, 0,  2, 0, 2,
        0, 0, 0,  2, 0, 2,  0, 0, 2,
        // Left face
        0, 0, 0,  0, 0, 2,  0, 2, 2,
        0, 0, 0,  0, 2, 2,  0, 2, 0,
        // Diagonal face
        2, 0, 0,  0, 2, 0,  0, 2, 2,
        2, 0, 0,  0, 2, 2,  2, 0, 2
      ]);
      
      prismGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      prismGeometry.computeVertexNormals();
      
      const prismMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xe77e22,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const prism = new THREE.Mesh(prismGeometry, prismMaterial);
      prism.renderOrder = 996;
      scene.add(prism);
      objects.prism = prism;

      // Prism edges
      const edgePoints = [
        // Front triangle
        [0, 0, 0], [0, 2, 0],
        [0, 2, 0], [2, 0, 0],
        [2, 0, 0], [0, 0, 0],
        // Back triangle
        [0, 0, 2], [0, 2, 2],
        [0, 2, 2], [2, 0, 2],
        [2, 0, 2], [0, 0, 2],
        // Connecting edges
        [0, 0, 0], [0, 0, 2],
        [0, 2, 0], [0, 2, 2],
        [2, 0, 0], [2, 0, 2]
      ];

      for (let i = 0; i < edgePoints.length; i += 2) {
        const edgeGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...edgePoints[i]),
          new THREE.Vector3(...edgePoints[i + 1])
        ]);
        const edgeMaterial = new THREE.LineBasicMaterial({ 
          color: 0xe77e22,
          linewidth: 2,
          transparent: true,
          opacity: 0.8
        });
        const edge = new THREE.Line(edgeGeometry, edgeMaterial);
        edge.renderOrder = 999;
        scene.add(edge);
        objects.ticks.push(edge);
      }

      // Prism vertices
      const prismVerts = [
        [0, 0, 0], [0, 2, 0], [2, 0, 0],
        [0, 0, 2], [0, 2, 2], [2, 0, 2]
      ];
      prismVerts.forEach(v => {
        const vertGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const vertMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xe77e22,
          depthTest: false
        });
        const vert = new THREE.Mesh(vertGeometry, vertMaterial);
        vert.renderOrder = 1000;
        vert.position.set(...v);
        scene.add(vert);
        objects.ticks.push(vert);
      });

      // Pulsing animation
      let pulseDirection = 1;
      let pulseOpacity = 0.25;
      const pulsePrism = () => {
        if (step !== 3) return;
        pulseOpacity += 0.006 * pulseDirection;
        if (pulseOpacity > 0.4) pulseDirection = -1;
        if (pulseOpacity < 0.15) pulseDirection = 1;
        prismMaterial.opacity = pulseOpacity;
        requestAnimationFrame(pulsePrism);
      };
      pulsePrism();
    }

    // Step 4: Show cube
    if (step === 4) {
      // Cube geometry
      const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
      const cubeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x308ce7,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(1, 1, 1);
      cube.renderOrder = 996;
      scene.add(cube);
      objects.cube = cube;

      // Cube edges
      const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ 
        color: 0x308ce7,
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      edges.position.set(1, 1, 1);
      edges.renderOrder = 999;
      scene.add(edges);
      objects.ticks.push(edges);

      // Cube vertices
      const cubeVerts = [
        [0, 0, 0], [0, 0, 2], [0, 2, 0], [0, 2, 2],
        [2, 0, 0], [2, 0, 2], [2, 2, 0], [2, 2, 2]
      ];
      cubeVerts.forEach(v => {
        const vertGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const vertMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xe77e22,
          depthTest: false
        });
        const vert = new THREE.Mesh(vertGeometry, vertMaterial);
        vert.renderOrder = 1000;
        vert.position.set(...v);
        scene.add(vert);
        objects.ticks.push(vert);
      });

      // Pulsing animation
      let pulseDirection = 1;
      let pulseOpacity = 0.2;
      const pulseCube = () => {
        if (step !== 4) return;
        pulseOpacity += 0.005 * pulseDirection;
        if (pulseOpacity > 0.35) pulseDirection = -1;
        if (pulseOpacity < 0.15) pulseDirection = 1;
        cubeMaterial.opacity = pulseOpacity;
        requestAnimationFrame(pulseCube);
      };
      pulseCube();
    }

    // Step 5: Show mesh (more complex shape - icosahedron)
    if (step === 5) {
      const meshGeometry = new THREE.IcosahedronGeometry(1.5, 0);
      const meshMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xe77e22,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
        depthTest: false
      });
      const mesh = new THREE.Mesh(meshGeometry, meshMaterial);
      mesh.position.set(1, 1.5, 1);
      mesh.renderOrder = 996;
      scene.add(mesh);
      objects.cube = mesh;

      // Mesh edges
      const edgesGeometry = new THREE.EdgesGeometry(meshGeometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ 
        color: 0xe77e22,
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      edges.position.set(1, 1.5, 1);
      edges.renderOrder = 999;
      scene.add(edges);
      objects.ticks.push(edges);

      // Animate rotation
      isAnimatingRef.current = true;
      const animateMesh = () => {
        if (!isAnimatingRef.current || step !== 5) return;
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
        edges.rotation.y += 0.01;
        edges.rotation.x += 0.005;
        animationRef.current = requestAnimationFrame(animateMesh);
      };
      animateMesh();

      // Pulsing animation
      let pulseDirection = 1;
      let pulseOpacity = 0.25;
      const pulseMesh = () => {
        if (step !== 5) return;
        pulseOpacity += 0.006 * pulseDirection;
        if (pulseOpacity > 0.4) pulseDirection = -1;
        if (pulseOpacity < 0.15) pulseDirection = 1;
        meshMaterial.opacity = pulseOpacity;
        requestAnimationFrame(pulseMesh);
      };
      pulseMesh();
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
    if (step === 2) {
      return { x: position.x, y: position.y, z: position.z };
    }
    return { x: 0, y: 0, z: 0 };
  };

  return (
    <BlenderViewport
      title="Interactive 3D Space"
      activeTab="Volume (3D)"
      stats={{ points: stats.points, lines: stats.segments }}
      use1DLabels={true}
      location={getLocation()}
      rotation={{ x: 0, y: 0, z: 0 }}
      scale={{ x: 1, y: 1, z: 1 }}
      disableTransform={step !== 2}
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
