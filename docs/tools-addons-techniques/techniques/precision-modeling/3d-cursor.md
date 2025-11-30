

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

The 3D Cursor is a powerful tool unique to Blender. It acts as a temporary anchor point in 3D space, enabling precise placement and manipulation of objects.

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

### How to Use

- **Place the 3D Cursor:** `Shift + Right Click` (by default)
- **Snap objects to the cursor:** Use the Snap menu or shortcut (`Shift + S`)
- **Set as pivot point:** Change the pivot point to 3D Cursor in the header

### Practical Tips

- Use the 3D Cursor for accurate placement when modeling or aligning objects
- Combine with snapping for even more precision
- Reset the cursor to the world origin with `Shift + S` → “Cursor to World Origin”

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
