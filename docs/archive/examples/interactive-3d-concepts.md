---
sidebar_position: 4
---

import React from 'react';

# Interactive 3D Concepts

Learn the fundamental concepts of 3D modeling and visualization through interactive examples tailored for visual investigation work.

---

## Understanding 3D Coordinates (X, Y, Z)

In 3D space, every point is defined by three coordinates. In Blender (and most 3D software), we use a Z-up coordinate system where:
- **X Axis (Red)** - Moves left and right
- **Y Axis (Green)** - Moves forward and back (depth)
- **Z Axis (Blue)** - Moves up and down (height)

Move the sliders to see how a point moves through 3D space:

export const CoordinateDemo = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [z, setZ] = React.useState(0);
  
  return (
    <div style={{
      border: 'none',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '30px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>
        <div>
          <h4 style={{marginTop: 0}}>Axis Controls</h4>
          
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', fontWeight: 'bold', color: '#e53935', marginBottom: '5px'}}>
              X Axis (Left ← → Right): {x}
            </label>
            <input
              type="range"
              min="-100"
              max="100"
              value={x}
              onChange={(e) => setX(Number(e.target.value))}
              style={{width: '100%'}}
            />
          </div>
          
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', fontWeight: 'bold', color: '#43a047', marginBottom: '5px'}}>
              Y Axis (Back ← → Front): {y}
            </label>
            <input
              type="range"
              min="-100"
              max="100"
              value={y}
              onChange={(e) => setY(Number(e.target.value))}
              style={{width: '100%'}}
            />
          </div>
          
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', fontWeight: 'bold', color: '#1976d2', marginBottom: '5px'}}>
              Z Axis (Down ← → Up): {z}
            </label>
            <input
              type="range"
              min="-100"
              max="100"
              value={z}
              onChange={(e) => setZ(Number(e.target.value))}
              style={{width: '100%'}}
            />
          </div>
          
          <button
            onClick={() => { setX(0); setY(0); setZ(0); }}
            style={{
              backgroundColor: '#666',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%'
            }}>
            Reset to Origin (0, 0, 0)
          </button>
          
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px'
          }}>
            <div style={{fontWeight: 'bold', marginBottom: '8px'}}>Current Position:</div>
            <div style={{fontFamily: 'monospace', fontSize: '16px'}}>
              <span style={{color: '#e53935'}}>X: {x}</span><br/>
              <span style={{color: '#43a047'}}>Y: {y}</span><br/>
              <span style={{color: '#1976d2'}}>Z: {z}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 style={{marginTop: 0}}>3D View (Z-Up)</h4>
          <div style={{
            width: '100%',
            height: '500px',
            backgroundColor: '#0f0f1e',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            perspective: '1000px',
            border: 'none'
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '500px',
              height: '500px',
              transformStyle: 'preserve-3d',
              transform: 'translateX(-50%) translateY(-50%) rotateX(60deg) rotateZ(-45deg)'
            }}>
              {/* Ground Grid */}
              <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                left: '-200px',
                top: '-200px',
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 49px,
                    rgba(100, 150, 200, 0.15) 49px,
                    rgba(100, 150, 200, 0.15) 50px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 49px,
                    rgba(100, 150, 200, 0.15) 49px,
                    rgba(100, 150, 200, 0.15) 50px
                  )
                `,
                transform: 'rotateX(90deg) translateZ(-100px)'
              }}></div>
              
              {/* X Axis - Red */}
              <div style={{
                position: 'absolute',
                left: '-200px',
                top: '0',
                width: '400px',
                height: '3px',
                background: 'linear-gradient(to right, rgba(229, 57, 53, 0.3), #e53935 40%, #e53935 60%, rgba(229, 57, 53, 0.3))',
                boxShadow: '0 0 15px rgba(229, 57, 53, 0.8)'
              }}></div>
              <div style={{
                position: 'absolute',
                right: '-220px',
                top: '-12px',
                color: '#e53935',
                fontWeight: 'bold',
                fontSize: '20px',
                textShadow: '0 0 10px rgba(0,0,0,1), 0 0 20px rgba(229, 57, 53, 1)'
              }}>+X</div>
              
              {/* Y Axis - Green */}
              <div style={{
                position: 'absolute',
                left: '0',
                top: '-200px',
                width: '3px',
                height: '400px',
                background: 'linear-gradient(to bottom, rgba(67, 160, 71, 0.3), #43a047 40%, #43a047 60%, rgba(67, 160, 71, 0.3))',
                transform: 'rotateZ(90deg) rotateX(90deg)',
                transformOrigin: 'center center',
                boxShadow: '0 0 15px rgba(67, 160, 71, 0.8)'
              }}></div>
              <div style={{
                position: 'absolute',
                left: '-12px',
                top: '-220px',
                color: '#43a047',
                fontWeight: 'bold',
                fontSize: '20px',
                textShadow: '0 0 10px rgba(0,0,0,1), 0 0 20px rgba(67, 160, 71, 1)',
                transform: 'rotateX(-90deg)'
              }}>+Y</div>
              
              {/* Z Axis - Blue */}
              <div style={{
                position: 'absolute',
                left: '0',
                top: '-200px',
                width: '3px',
                height: '400px',
                background: 'linear-gradient(to bottom, rgba(25, 118, 210, 0.3), #1976d2 40%, #1976d2 60%, rgba(25, 118, 210, 0.3))',
                boxShadow: '0 0 15px rgba(25, 118, 210, 0.8)'
              }}></div>
              <div style={{
                position: 'absolute',
                left: '-12px',
                top: '-220px',
                color: '#1976d2',
                fontWeight: 'bold',
                fontSize: '20px',
                textShadow: '0 0 10px rgba(0,0,0,1), 0 0 20px rgba(25, 118, 210, 1)'
              }}>+Z</div>
              
              {/* The Point/Dot */}
              <div style={{
                position: 'absolute',
                left: '0',
                top: '0',
                transform: `translate3d(${x}px, ${-y}px, ${z}px)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                {/* Vertical line to ground */}
                {z !== 0 && (
                  <div style={{
                    position: 'absolute',
                    width: '1px',
                    height: `${Math.abs(z)}px`,
                    backgroundColor: 'rgba(255, 152, 0, 0.4)',
                    left: '-0.5px',
                    top: z > 0 ? '0' : `${z}px`,
                    transformOrigin: 'top center',
                    transform: 'translateZ(-100px) rotateX(-90deg)'
                  }}></div>
                )}
                
                {/* Main glowing dot */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#ff9800',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `
                    0 0 30px rgba(255, 152, 0, 1),
                    0 0 60px rgba(255, 152, 0, 0.6),
                    inset 0 0 15px rgba(255, 220, 150, 1)
                  `,
                  border: '3px solid rgba(255, 220, 150, 0.9)',
                  position: 'relative',
                  zIndex: 10
                }}></div>
                
                {/* Outer glow */}
                <div style={{
                  position: 'absolute',
                  width: '50px',
                  height: '50px',
                  left: '-25px',
                  top: '-25px',
                  backgroundColor: 'rgba(255, 152, 0, 0.15)',
                  borderRadius: '50%',
                  filter: 'blur(10px)'
                }}></div>
              </div>
            </div>
            
            {/* View label */}
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(25, 118, 210, 0.95)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: 'bold',
              letterSpacing: '0.5px'
            }}>
              BLENDER COORDINATE SYSTEM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<CoordinateDemo />

:::info Real-World Application
In crime scene reconstruction, every piece of evidence needs precise coordinates. Understanding the X, Y, Z coordinate system is fundamental to accurately placing objects, bullet trajectories, and witness positions in your 3D model.
:::

:::tip Blender Tip
In Blender, you can press **G** (Grab/Move) then **X**, **Y**, or **Z** to constrain movement along a single axis. This helps you position objects precisely along each coordinate axis.
:::

---

## Camera Focal Length & Field of View

Understanding how camera focal length affects perspective is essential for matching real-world photography in your reconstructions:

export const FocalLengthDemo = () => {
  const [focalLength, setFocalLength] = React.useState(50);
  
  const getFOV = (fl) => {
    return Math.round(2 * Math.atan(36 / (2 * fl)) * (180 / Math.PI));
  };
  
  const getScale = (fl) => {
    return fl / 100;
  };
  
  return (
    <div style={{
      border: 'none',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '30px'
    }}>
      <div style={{marginBottom: '20px'}}>
        <label style={{display: 'block', fontWeight: 'bold', marginBottom: '10px'}}>
          Focal Length: {focalLength}mm (FOV: ~{getFOV(focalLength)}°)
        </label>
        <input
          type="range"
          min="18"
          max="200"
          value={focalLength}
          onChange={(e) => setFocalLength(Number(e.target.value))}
          style={{width: '100%'}}
        />
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginTop: '5px'}}>
          <span>Wide Angle (18mm)</span>
          <span>Standard (50mm)</span>
          <span>Telephoto (200mm)</span>
        </div>
      </div>
      
      <div style={{
        width: '100%',
        height: '300px',
        backgroundColor: '#2c3e50',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          display: 'flex',
          gap: '20px',
          transform: `scale(${getScale(focalLength)})`,
          transition: 'transform 0.3s ease'
        }}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '60px'}}>🚗</div>
            <div style={{color: 'white', fontSize: '12px'}}>Vehicle</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '60px'}}>🚶</div>
            <div style={{color: 'white', fontSize: '12px'}}>Witness</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '60px'}}>🏠</div>
            <div style={{color: 'white', fontSize: '12px'}}>Building</div>
          </div>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          color: 'white',
          fontSize: '14px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '5px 10px',
          borderRadius: '5px'
        }}>
          📷 {focalLength}mm | FOV: {getFOV(focalLength)}°
        </div>
      </div>
      
      <div style={{marginTop: '15px', fontSize: '14px'}}>
        <strong>Lens Type:</strong> {
          focalLength < 35 ? '🔭 Wide Angle - Great for interiors and tight spaces' :
          focalLength < 70 ? '📸 Standard - Natural perspective, similar to human eye' :
          '🎯 Telephoto - Compressed perspective, good for distant subjects'
        }
      </div>
    </div>
  );
};

<FocalLengthDemo />

:::tip Forensic Photography Matching
When reconstructing scenes from photographs, matching the focal length of your virtual camera to the real camera used is critical for accurate perspective matching and measurements.
:::

---

## Why Interactive Learning?

These interactive examples help you understand:

- **Immediate Feedback** - See results as you adjust parameters
- **Visual Understanding** - Concepts become clear through visualization
- **Practical Application** - Direct relevance to forensic work
- **Experimentation** - Learn by doing without risk

:::tip Next Steps
Now that you understand these core 3D concepts, explore the tutorials section for hands-on Blender workflows specific to visual investigation work.
:::
