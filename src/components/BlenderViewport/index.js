import React from 'react';
import styles from './styles.module.css';

export default function BlenderViewport({ 
  children, 
  title = "3D Viewport",
  activeTab = "Mesh (3D)",
  stats = { verts: 0, edges: 0, faces: 0, tris: 0 },
  location = { x: 0, y: 0, z: 0 },
  rotation = { x: 0, y: 0, z: 0 },
  scale = null,
  onLocationChange = undefined,
  onRotationChange = undefined,
  onScaleChange = undefined,
  extraSidebarContent = null,
  timelineFrame = 1,
  totalFrames = 250,
  disableTransform = false,
  disableYZ = false,
  disableScale = false,
  nurbsMode = false,
  use1DLabels = false,
  isPlaying = false,
  onPlayPause = null,
  onPrevStep = null,
  onNextStep = null
}) {
  const tabs = use1DLabels ? [
    "Point (0D)",
    "Line (1D)",
    "Plane (2D)",
    "Volume (3D)",
    "Topology"
  ] : [
    "Vertex (0D)",
    "Edge (1D)",
    "Face (2D)",
    "Mesh (3D)",
    "Topology"
  ];

  // Helper to format numbers
  const fmt = (n) => typeof n === 'number' ? n.toFixed(1) : '0.0';

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span>BVI: 3D basics</span>
        </div>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <div 
              key={tab} 
              className={`${styles.tab} ${tab === activeTab ? styles.active : ''}`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Main Area */}
      <div className={styles.mainArea}>
        {/* Viewport */}
        <div className={styles.viewport}>
          <div className={styles.viewportHeader}>
            Dimension: {activeTab.split('(')[1]?.replace(')', '') || '3D'} <br/>
            (1) {activeTab.split(' ')[0]}
          </div>
          <div className={styles.viewportControls}>
            <span className={styles.viewControl}>Options</span>
            <span className={styles.viewControl}>View</span>
          </div>
          
          {/* The Canvas Content */}
          {children}
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <i className="fa-solid fa-sliders"></i> Properties
          </div>
          
          <div className={styles.sidebarContent}>
            {/* Transform Panel */}
            <div className={styles.panel} style={disableTransform ? { opacity: 0.4, pointerEvents: 'none' } : {}}>
              <div className={styles.panelTitle}>Transform</div>
              
              {/* Location */}
              <div className={styles.propertyGroup}>
                <span className={styles.propertyLabel}>Location</span>
                <div className={styles.vectorInput}>
                  <div className={styles.inputWrapper}>
                    <div className={`${styles.axisIndicator} ${styles.axisX}`}></div>
                    <input 
                      type="number" 
                      className={styles.numberInput} 
                      value={location.x}
                      step="0.1"
                      onChange={(e) => onLocationChange && onLocationChange('x', parseFloat(e.target.value))}
                      readOnly={!onLocationChange}
                    />
                  </div>
                  <div className={styles.inputWrapper} style={disableYZ ? { opacity: 0.3, pointerEvents: 'none' } : {}}>
                    <div className={`${styles.axisIndicator} ${styles.axisY}`}></div>
                    <input 
                      type="number" 
                      className={styles.numberInput} 
                      value={location.y}
                      step="0.1"
                      onChange={(e) => onLocationChange && onLocationChange('y', parseFloat(e.target.value))}
                      readOnly={!onLocationChange || disableYZ}
                    />
                  </div>
                  <div className={styles.inputWrapper} style={disableYZ ? { opacity: 0.3, pointerEvents: 'none' } : {}}>
                    <div className={`${styles.axisIndicator} ${styles.axisZ}`}></div>
                    <input 
                      type="number" 
                      className={styles.numberInput} 
                      value={location.z}
                      step="0.1"
                      onChange={(e) => onLocationChange && onLocationChange('z', parseFloat(e.target.value))}
                      readOnly={!onLocationChange || disableYZ}
                    />
                  </div>
                </div>
              </div>

              {/* Rotation */}
              <div className={styles.propertyGroup}>
                <span className={styles.propertyLabel}>Rotation</span>
                <div className={styles.vectorInput}>
                  <div className={styles.inputWrapper}>
                    <div className={`${styles.axisIndicator} ${styles.axisX}`}></div>
                    <input 
                      type="number" 
                      className={styles.numberInput} 
                      value={rotation.x}
                      onChange={(e) => onRotationChange && onRotationChange('x', parseFloat(e.target.value))}
                      readOnly={!onRotationChange}
                    />
                    <span className={styles.unit}>°</span>
                  </div>
                  <div className={styles.inputWrapper} style={disableYZ ? { opacity: 0.3, pointerEvents: 'none' } : {}}>
                    <div className={`${styles.axisIndicator} ${styles.axisY}`}></div>
                    <input 
                      type="number" 
                      className={styles.numberInput} 
                      value={rotation.y}
                      onChange={(e) => onRotationChange && onRotationChange('y', parseFloat(e.target.value))}
                      readOnly={!onRotationChange || disableYZ}
                    />
                    <span className={styles.unit}>°</span>
                  </div>
                  <div className={styles.inputWrapper} style={disableYZ ? { opacity: 0.3, pointerEvents: 'none' } : {}}>
                    <div className={`${styles.axisIndicator} ${styles.axisZ}`}></div>
                    <input 
                      type="number" 
                      className={styles.numberInput} 
                      value={rotation.z}
                      onChange={(e) => onRotationChange && onRotationChange('z', parseFloat(e.target.value))}
                      readOnly={!onRotationChange || disableYZ}
                    />
                    <span className={styles.unit}>°</span>
                  </div>
                </div>
              </div>

              {/* Scale */}
              {scale && (
                <div className={styles.propertyGroup} style={disableScale ? { opacity: 0.3, pointerEvents: 'none' } : {}}>
                  <span className={styles.propertyLabel}>Scale</span>
                  <div className={styles.vectorInput}>
                    <div className={styles.inputWrapper}>
                      <div className={`${styles.axisIndicator} ${styles.axisX}`}></div>
                      <input 
                        type="number" 
                        className={styles.numberInput} 
                        value={scale.x}
                        step="0.1"
                        onChange={(e) => onScaleChange && onScaleChange('x', parseFloat(e.target.value))}
                        readOnly={!onScaleChange}
                      />
                    </div>
                    <div className={styles.inputWrapper}>
                      <div className={`${styles.axisIndicator} ${styles.axisY}`}></div>
                      <input 
                        type="number" 
                        className={styles.numberInput} 
                        value={scale.y}
                        step="0.1"
                        onChange={(e) => onScaleChange && onScaleChange('y', parseFloat(e.target.value))}
                        readOnly={!onScaleChange}
                      />
                    </div>
                    <div className={styles.inputWrapper}>
                      <div className={`${styles.axisIndicator} ${styles.axisZ}`}></div>
                      <input 
                        type="number" 
                        className={styles.numberInput} 
                        value={scale.z}
                        step="0.1"
                        onChange={(e) => onScaleChange && onScaleChange('z', parseFloat(e.target.value))}
                        readOnly={!onScaleChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Extra Sidebar Content */}
            {extraSidebarContent && (
              <div className={styles.panel}>
                {extraSidebarContent}
              </div>
            )}

            {/* Statistics Panel */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Scene Statistics</div>
              <div className={styles.statRow}>
                <span>{use1DLabels ? 'Points:' : (nurbsMode ? 'Control Points:' : 'Verts:')}</span>
                <span className={styles.statValue}>{use1DLabels ? stats.points : stats.verts}</span>
              </div>
              <div className={styles.statRow}>
                <span>{use1DLabels ? 'Segments:' : 'Edges:'}</span>
                <span className={styles.statValue}>{use1DLabels ? stats.lines : (nurbsMode ? '∞' : stats.edges)}</span>
              </div>
            </div>
            
            <div style={{ marginTop: 'auto', paddingTop: '20px', fontSize: '10px', color: '#555', textAlign: 'center' }}>
              BVI: 3D Basics v1.0<br/>Interactive Learning
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Timeline */}
      <div className={styles.footer}>
        <div className={styles.playbackControls}>
          <button 
            className={styles.controlBtn} 
            onClick={onPrevStep}
            disabled={!onPrevStep}
          >
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button 
            className={styles.controlBtn}
            onClick={onPlayPause}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          <button 
            className={styles.controlBtn}
            onClick={onNextStep}
            disabled={!onNextStep}
          >
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineTrack} style={{ width: `${((timelineFrame - 1) / (totalFrames - 1)) * 100}%` }}></div>
          <div className={styles.timelineScrubber} style={{ left: `${((timelineFrame - 1) / (totalFrames - 1)) * 100}%` }}></div>
        </div>
        <div className={styles.frameCounter}>
          {timelineFrame} / {totalFrames}
        </div>
      </div>
    </div>
  );
}
