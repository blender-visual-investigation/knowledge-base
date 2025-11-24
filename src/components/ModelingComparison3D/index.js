
import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { NURBSCurve } from 'three/examples/jsm/curves/NURBSCurve';


function PolygonalViewport({ className }) {
  const mountRef = React.useRef(null);
  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x181818);
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    // Polygonal points
    const points = [
      new THREE.Vector3(-3, -2, 0),
      new THREE.Vector3(-1, 2, 0),
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(3, 2, 0),
      new THREE.Vector3(5, 0, 0)
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({ color: 0xff5252, linewidth: 3 })
    );
    scene.add(line);
    points.forEach(pt => {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff5252 })
      );
      sphere.position.copy(pt);
      scene.add(sphere);
    });
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    // Resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      controls.dispose();
    };
  }, []);
  return <div className={className} ref={mountRef}></div>;
}

function NURBSViewport({ className }) {
  const mountRef = React.useRef(null);
  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x181818);
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    // NURBS points
    const controlPoints = [
      new THREE.Vector4(-3, -2, 0, 1),
      new THREE.Vector4(-1, 2, 0, 1),
      new THREE.Vector4(1, 0, 0, 1),
      new THREE.Vector4(3, 2, 0, 1),
      new THREE.Vector4(5, 0, 0, 1)
    ];
    const degree = 3;
    const n = controlPoints.length;
    const knots = [];
    for (let i = 0; i < degree + 1; i++) knots.push(0);
    for (let i = 1; i < n - degree; i++) knots.push(i / (n - degree));
    for (let i = 0; i < degree + 1; i++) knots.push(1);
    const nurbs = new NURBSCurve(degree, knots, controlPoints);
    const nurbsPoints = nurbs.getPoints(100).filter(Boolean);
    const geometry = new THREE.BufferGeometry().setFromPoints(nurbsPoints.map(v => new THREE.Vector3(v.x, v.y, v.z)));
    const line = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({ color: 0x308ce7, linewidth: 3 })
    );
    scene.add(line);
    controlPoints.forEach(pt => {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x308ce7 })
      );
      sphere.position.set(pt.x, pt.y, pt.z);
      scene.add(sphere);
    });
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    // Resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      controls.dispose();
    };
  }, []);
  return <div className={className} ref={mountRef}></div>;
}

import styles from './ModelingComparison3D.module.css';

export default function ModelingComparison3D() {
  return (
    <div className={styles.sideBySide}>
      <div>
        <div className={styles.label}>Polygonal Modeling</div>
        <PolygonalViewport className={styles.viewport} />
      </div>
      <div>
        <div className={styles.label}>NURBS Modeling</div>
        <NURBSViewport className={styles.viewport} />
      </div>
    </div>
  );
}
