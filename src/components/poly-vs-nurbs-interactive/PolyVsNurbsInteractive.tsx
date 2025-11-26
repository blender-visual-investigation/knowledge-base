import React, { useState } from 'react';
import Visualizer from './components/Visualizer';
import { chaikinSubdivide } from './utils/geometry';
import { ModelingMode, Point } from './types';

/**
 * PolyVsNurbsInteractive: A reusable, self-contained React component for embedding.
 * This omits the app shell, AI chat, and uses only the core interactive visualization and controls.
 */
const PolyVsNurbsInteractive: React.FC = () => {
  const [mode, setMode] = useState<ModelingMode>(ModelingMode.POLYGONAL);
  const [resolution, setResolution] = useState<number>(0);
  const [points, setPoints] = useState<Point[]>([
    { id: 'p1', x: 100, y: 300 },
    { id: 'p2', x: 200, y: 100 },
    { id: 'p3', x: 400, y: 100 },
    { id: 'p4', x: 500, y: 300 },
  ]);

  // Calculate face (edge) count for current subdivision level (polygonal mode)
  let faceCount = 0;
  if (mode === ModelingMode.POLYGONAL) {
    const subdivided = chaikinSubdivide(points, resolution);
    faceCount = Math.max(0, subdivided.length - 1); // edges between points
  }

  return (
    <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', maxWidth: 800, margin: '32px auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 20 }}>
        <div style={{ background: '#e0e7ef', borderRadius: 8, padding: 4, display: 'flex', gap: 2 }}>
          <button
            onClick={() => setMode(ModelingMode.POLYGONAL)}
            style={{
              background: mode === ModelingMode.POLYGONAL ? '#fff' : 'transparent',
              color: mode === ModelingMode.POLYGONAL ? '#6366f1' : '#64748b',
              border: 'none',
              borderRadius: 6,
              padding: '6px 18px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: mode === ModelingMode.POLYGONAL ? '0 1px 4px rgba(99,102,241,0.08)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            Polygonal
          </button>
          <button
            onClick={() => setMode(ModelingMode.NURBS)}
            style={{
              background: mode === ModelingMode.NURBS ? '#fff' : 'transparent',
              color: mode === ModelingMode.NURBS ? '#2563eb' : '#64748b',
              border: 'none',
              borderRadius: 6,
              padding: '6px 18px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: mode === ModelingMode.NURBS ? '0 1px 4px rgba(37,99,235,0.08)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            NURBS
          </button>
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          {mode === ModelingMode.POLYGONAL ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <label htmlFor="res-slider" style={{ fontSize: 12, color: '#475569', fontWeight: 500 }}>
                Subdivision Levels: {resolution}
              </label>
              <input
                id="res-slider"
                type="range"
                min="0"
                max="5"
                step="1"
                value={resolution}
                onChange={e => setResolution(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#6366f1' }}
              />
              <span style={{ fontSize: 13, color: '#334155', fontWeight: 500, marginTop: 4 }}>
                Faces: <b>{faceCount}</b>
              </span>
            </div>
          ) : (
            <div style={{ opacity: 0.5, pointerEvents: 'none' }}>
              <label style={{ fontSize: 12, color: '#475569', fontWeight: 500 }}>
                Mathematical Precision: ∞
              </label>
              <div style={{ width: '100%', height: 8, background: '#dbeafe', borderRadius: 4, marginTop: 2 }}>
                <div style={{ width: '100%', height: 8, background: '#2563eb', borderRadius: 4 }} />
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setPoints([
              { id: 'p1', x: 100, y: 300 },
              { id: 'p2', x: 200, y: 100 },
              { id: 'p3', x: 400, y: 100 },
              { id: 'p4', x: 500, y: 300 },
            ]);
            setResolution(0);
          }}
          style={{ fontSize: 12, color: '#64748b', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', marginLeft: 8 }}
        >
          Reset
        </button>
      </div>
      <div
        style={{
          width: 600,
          height: 400,
          background: '#fff',
          borderRadius: 10,
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
          padding: 8,
          overflow: 'visible',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Visualizer mode={mode} resolution={resolution} points={points} setPoints={setPoints} />
      </div>
    </div>
  );
};

export default PolyVsNurbsInteractive;
