

# 3D Cursor

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
	<div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
		<span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
		<span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
		<span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>ADVANCED</span>
		<span style={{backgroundColor: '#f44336', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>EXPERT</span>
	</div>
	<div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
		<span style={{fontSize: '16px'}}>📖</span>
		<span>5 min read</span>
	</div>
</div>

---

<div style={{
	position: 'relative',
	paddingBottom: '56.25%',
	height: 0,
	overflow: 'hidden',
	maxWidth: '100%',
	marginBottom: '30px',
	borderRadius: '8px',
	boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
}}>
	<iframe
		style={{
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			border: 0
		}}
		src="https://www.youtube.com/embed/2_3dynQg0gw"
		title="YouTube video player"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen>
	</iframe>
</div>

## Introduction

The 3D Cursor is the spawn point for all new primitives. It is also a versatile tool for precision alignment, pivoting, and origin manipulation.

This page covers:
- What the 3D Cursor is and why it matters
- How to use it for object placement and pivoting
- Practical shortcuts and best practices

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
	<FeatureCard 
		title="Resources" 
		headerColor="#6dfb72"
		textColor="#333"
		icon="fa-solid fa-book"
	>
		<p style={{margin: 0}}>Official Blender documentation and community tutorials on the 3D Cursor.</p>
	</FeatureCard>
  
	<FeatureCard 
		title="Links" 
		headerColor="#1C75BC"
		icon="fa-solid fa-link"
	>
		<p style={{margin: 0}}><a href="https://docs.blender.org/manual/en/latest/editors/3dview/3d_cursor.html" target="_blank" rel="noopener">Blender Manual: 3D Cursor</a></p>
	</FeatureCard>
  
	<FeatureCard 
		title="Videos" 
		headerColor="#EF4C3C"
		icon="fa-solid fa-play"
	>
		<p style={{margin: 0}}>See the video above for a practical demonstration of the 3D Cursor in action.</p>
	</FeatureCard>
</FeatureCardGrid>

---

## Main Content

### What is the 3D Cursor?

The 3D Cursor is Blender’s unique tool for marking a specific location in 3D space. It can be used as:
- The spawn point for new objects
- A pivot for transformations
- A snapping target for precise alignment

### 1. Basic Controls & Navigation

- **Move Cursor:** `Shift + RMB` (Click to place manually).
- **Snapping Menu (Crucial):** `Shift + S`. This is the primary interface for precision control.
	- **Cursor to World Origin:** Resets cursor to (0,0,0).
	- **Cursor to Selected:** Snaps cursor to the center of the current selection (object, face, edge, or vertex).
	- **Selection to Cursor:** Snaps the selected object to the 3D cursor's current location.

- **Transform Orientation:** `Comma (,)`. Changes the axis orientation (Global, Local, etc.). Set to **Cursor** to align movement axes to the cursor's rotation.
- **Pivot Point:** `Period (.)`. Changes the point around which objects rotate or scale. Set to **3D Cursor** to rotate objects around the cursor location rather than their own origin.

### 2. Recommended Configuration (Pro Setup)

To make the cursor useful for hard surface modeling, adjust the preferences to allow it to snap to surface angles.

1. Go to **Edit > Preferences > Keymap**.
2. Search for "3D cursor".
3. Ensure **Surface Project** is enabled.
4. Change **Orientation** to **Geometry**.

**Effect:** When you `Shift + RMB` click on a surface, the cursor will not only snap to the surface location but also align its rotation to the normal of that face.

### 3. Practical Workflows

#### A. Creating Primitives at Specific Angles
Instead of creating a cylinder at the world origin and rotating it manually:
1. `Shift + RMB` click on the target face (with the configuration above, the cursor aligns to the face normal).
2. `Shift + S` > **Cursor to Selected** (optional, ensures it is perfectly centered on the face).
3. Add the primitive (`Shift + A`).
4. In the "Add Object" menu (bottom left), set **Align** to **3D Cursor**. The object spawns perfectly aligned to the surface.

#### B. Moving the Origin Point
The origin point (orange dot) dictates how an object transforms. To move it precisely:
1. Enter Edit Mode. Select the vertex/face where you want the origin.
2. `Shift + S` > **Cursor to Selected**.
3. Enter Object Mode.
4. Right Click > **Set Origin** > **Origin to 3D Cursor**.

Bonus: Enable the "3D Viewport Pie Menus" add-on in preferences to access `Ctrl + Alt + X` for faster origin manipulation.

#### C. Aligning Objects (e.g., Bolts into Holes)
1. Select the target geometry (the hole).
2. `Shift + S` > **Cursor to Selected**.
3. Select the object to move (the bolt).
4. `Shift + S` > **Selection to Cursor**.

#### D. Radial Arrays (Rotating around a point)
To rotate an object around a specific point rather than its own center:
1. Place the 3D Cursor at the desired center of rotation.
2. Set **Pivot Point** (`Period`) to **3D Cursor**.
3. Set **Transform Orientation** (`Comma`) to **Cursor** (if the cursor is rotated).
4. Select the object.
5. Duplicate (`Shift + D`) and Rotate (`R`). The object will orbit the cursor.

---

## Summary

The 3D Cursor is a versatile anchor for modeling, placement, and transformation in Blender. Mastering its use can greatly speed up your workflow and improve precision.

**Key Takeaways:**
- The 3D Cursor is a unique Blender feature for spatial accuracy
- It can be used for spawning, pivoting, and snapping
- Shortcuts make it fast and efficient to use
- Integrating the 3D Cursor into your workflow boosts productivity

**Further Resources:**
- [Blender Manual: 3D Cursor](https://docs.blender.org/manual/en/latest/editors/3dview/3d_cursor.html)
- [Blender Stack Exchange: 3D Cursor Questions](https://blender.stackexchange.com/questions/tagged/3d-cursor)
- [Blender Guru: Essential Blender Shortcuts](https://www.youtube.com/watch?v=MF1qEhBSfq4)
