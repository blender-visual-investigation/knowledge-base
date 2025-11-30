import React, { useState } from 'react';
import Visualizer from './components/Visualizer';
import { chaikinSubdivide } from './utils/geometry';
import { ModelingMode, Point } from './types';
import BlenderViewport from '../BlenderViewport';

/**
 * PolyVsNurbsInteractive: A reusable, self-contained React component for embedding.
 * This omits the app shell, AI chat, and uses only the core interactive visualization and controls.
 */
const PolyVsNurbsInteractive: React.FC = () => {
  const [mode, setMode] = useState<ModelingMode>(ModelingMode.POLYGONAL);
  const [resolution, setResolution] = useState<number>(0);
  const [points, setPoints] = useState<Point[]>([
    { id: 'p1', x: 150, y: 280 },
    { id: 'p2', x: 250, y: 120 },
    { id: 'p3', x: 400, y: 120 },
    { id: 'p4', x: 500, y: 280 },
  ]);

  // Calculate face (edge) count and vertices for current subdivision level (polygonal mode)
  let vertCount = points.length;
  let edgeCount = Math.max(0, points.length - 1);
  let faceCount = 0;
  
  if (mode === ModelingMode.POLYGONAL) {
    const subdivided = chaikinSubdivide(points, resolution);
    vertCount = subdivided.length;
    edgeCount = Math.max(0, subdivided.length - 1);
    faceCount = edgeCount; // In 2D, edges act as "faces"
  } else {
    // NURBS: control points, mathematical curve (infinite resolution)
    vertCount = points.length;
    edgeCount = 0; // Mathematical curve, no discrete edges
    faceCount = 0;
  }

  // Stats for the BlenderViewport
  const stats = {
    verts: vertCount,
    edges: edgeCount,
    faces: faceCount,
    tris: mode === ModelingMode.NURBS ? 0 : edgeCount // In 2D representation
  };

  const resetPoints = () => {
    setPoints([
      { id: 'p1', x: 150, y: 280 },
      { id: 'p2', x: 250, y: 120 },
      { id: 'p3', x: 400, y: 120 },
      { id: 'p4', x: 500, y: 280 },
    ]);
    setResolution(0);
  };

  const sidebarContent = (
    <div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#e77e22', marginBottom: 8, display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: 3, height: 10, backgroundColor: '#e77e22', marginRight: 6, borderRadius: 1 }}></span>
          Modeling Mode
        </div>
        <div style={{ display: 'flex', gap: 4, background: '#1d1d1d', padding: 2, borderRadius: 4, border: '1px solid #444' }}>
          <button
            onClick={() => setMode(ModelingMode.POLYGONAL)}
            style={{
              flex: 1,
              background: mode === ModelingMode.POLYGONAL ? '#3d3d3d' : 'transparent',
              color: mode === ModelingMode.POLYGONAL ? '#fff' : '#888',
              border: 'none',
              padding: '4px 8px',
              fontSize: 11,
              cursor: 'pointer',
              borderRadius: 2
            }}
          >
            Polygonal
          </button>
          <button
            onClick={() => setMode(ModelingMode.NURBS)}
            style={{
              flex: 1,
              background: mode === ModelingMode.NURBS ? '#3d3d3d' : 'transparent',
              color: mode === ModelingMode.NURBS ? '#fff' : '#888',
              border: 'none',
              padding: '4px 8px',
              fontSize: 11,
              cursor: 'pointer',
              borderRadius: 2
            }}
          >
            NURBS
          </button>
        </div>
      </div>

      {mode === ModelingMode.POLYGONAL ? (
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#e77e22', marginBottom: 8, display: 'flex', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: 3, height: 10, backgroundColor: '#e77e22', marginRight: 6, borderRadius: 1 }}></span>
            Subdivision
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 8, alignItems: 'center', marginBottom: 8 }}>
            <label style={{ fontSize: 11, color: '#aaa' }}>Levels</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={resolution}
                onChange={e => setResolution(parseInt(e.target.value))}
                style={{ flex: 1, accentColor: '#e77e22' }}
              />
              <span style={{ fontSize: 11, color: '#e0e0e0', width: 12, textAlign: 'right' }}>{resolution}</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#ccc' }}>
            <span>Edges:</span>
            <span style={{ fontWeight: 600 }}>{edgeCount}</span>
          </div>
        </div>
      ) : (
        <div style={{ marginBottom: 16, opacity: 0.5 }}>
           <div style={{ fontSize: 11, fontWeight: 600, color: '#e77e22', marginBottom: 8, display: 'flex', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: 3, height: 10, backgroundColor: '#e77e22', marginRight: 6, borderRadius: 1 }}></span>
            Precision
          </div>
          <div style={{ fontSize: 11, color: '#aaa' }}>Infinite (Mathematical)</div>
        </div>
      )}

      <div style={{ marginTop: 24, borderTop: '1px solid #333', paddingTop: 16 }}>
        <button
          onClick={resetPoints}
          style={{
            width: '100%',
            background: '#2d2d2d',
            border: '1px solid #444',
            color: '#ccc',
            padding: '6px',
            fontSize: 11,
            cursor: 'pointer',
            borderRadius: 3
          }}
        >
          Reset Points
        </button>
      </div>
    </div>
  );

  return (
    <BlenderViewport 
      extraSidebarContent={sidebarContent} 
      stats={stats}
      activeTab="Curve (2D)"
      disableTransform={true}
      nurbsMode={mode === ModelingMode.NURBS}
    >
      <Visualizer mode={mode} resolution={resolution} points={points} setPoints={setPoints} />
    </BlenderViewport>
  );
};

export default PolyVsNurbsInteractive;
