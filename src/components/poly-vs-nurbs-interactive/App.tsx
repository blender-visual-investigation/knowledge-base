import React, { useState } from 'react';
import Visualizer from './components/Visualizer';
import { ModelingMode, Point } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<ModelingMode>(ModelingMode.POLYGONAL);
  const [resolution, setResolution] = useState<number>(0); // Start at 0 to show raw polygon
  const [points, setPoints] = useState<Point[]>([
    { id: 'p1', x: 100, y: 300 },
    { id: 'p2', x: 200, y: 100 },
    { id: 'p3', x: 400, y: 100 },
    { id: 'p4', x: 500, y: 300 },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Poly vs NURBS</h1>
            <p className="text-slate-500 text-sm">Interactive Modeling Concepts Explorer</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-400">React + D3 Visualization</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left/Top: Visualization and Controls */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          
          {/* Mode Toggle & Controls */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            <div className="flex items-center bg-slate-100 p-1 rounded-lg shrink-0">
              <button
                onClick={() => setMode(ModelingMode.POLYGONAL)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  mode === ModelingMode.POLYGONAL 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Polygonal
              </button>
              <button
                onClick={() => setMode(ModelingMode.NURBS)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  mode === ModelingMode.NURBS 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                NURBS
              </button>
            </div>

            <div className="flex-1 w-full sm:w-auto">
              {mode === ModelingMode.POLYGONAL ? (
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <label htmlFor="res-slider">Subdivision Levels: {resolution}</label>
                  </div>
                  <input
                    id="res-slider"
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={resolution}
                    onChange={(e) => setResolution(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-2 opacity-50 cursor-not-allowed">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <label>Mathematical Precision: ∞</label>
                  </div>
                  <div className="w-full h-2 bg-blue-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-blue-500 w-full"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden sm:block shrink-0">
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
                 className="text-xs text-slate-500 hover:text-indigo-600 underline"
               >
                 Reset
               </button>
            </div>
          </div>

          {/* Visualizer Container */}
          <div className="flex-1 min-h-[400px] relative">
            <Visualizer 
              mode={mode} 
              resolution={resolution} 
              points={points} 
              setPoints={setPoints} 
            />
          </div>
        </div>

        {/* Right: Static Explanation */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">The Difference</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">Polygonal Modeling</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Uses <strong>straight lines</strong> and flat faces to approximate shapes. To create smooth curves, you must "subdivide" the geometry, which splits lines into smaller segments.
                </p>
                <div className="mt-2 text-xs text-slate-500 bg-slate-50 p-2 rounded">
                  <strong>Trade-off:</strong> More smoothness = more data (heavier files).
                </div>
              </div>

              <hr className="border-slate-100" />

              <div>
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">NURBS</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Uses <strong>mathematical formulas</strong> (Splines) to define geometry. The curve is calculated perfectly between points.
                </p>
                <div className="mt-2 text-xs text-slate-500 bg-slate-50 p-2 rounded">
                  <strong>Benefit:</strong> Perfectly smooth at any zoom level without adding vertex data.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 text-indigo-900">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span>Try this</span>
            </h3>
            <ul className="space-y-2 text-sm opacity-90 list-disc list-inside">
              <li>
                Switch to <strong>Polygonal</strong> mode.
              </li>
              <li>
                Set <strong>Subdivision</strong> to 0 to see the raw shape.
              </li>
              <li>
                Increase the slider to see how the computer smoothes it.
              </li>
              <li>
                Switch to <strong>NURBS</strong> to see the perfect mathematical curve.
              </li>
            </ul>
          </div>

        </div>

      </main>
    </div>
  );
};

export default App;