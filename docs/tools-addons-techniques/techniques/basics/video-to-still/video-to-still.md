---
title: Video from Stills
description: Create a video sequence from still images in Blender, including frame rate, ordering, and export settings.
sidebar_position: 1
---

# Video from Stills

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
	<div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
		<span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
		<span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
	</div>
	<div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
		<span style={{fontSize: '16px'}}>📖</span>
		<span>6 min read</span>
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
		src="https://www.youtube.com/embed/Hqs4QwQ1Mb4"
		title="YouTube video player"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen>
	</iframe>
</div>

## Introduction

Turn a folder of still images into a video directly in Blender. This covers importing image sequences, setting frame rate and duration, previewing, and exporting to common formats.

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
		<p style={{margin: 0}}>Blender manual pages for video editing, image sequences, and rendering.</p>
	</FeatureCard>
  
	<FeatureCard 
		title="Links" 
		headerColor="#1C75BC"
		icon="fa-solid fa-link"
	>
		<p style={{margin: 0}}><a href="https://docs.blender.org/manual/en/latest/editors/vse/sequencer.html" target="_blank" rel="noopener">Blender VSE (Sequencer)</a></p>
	</FeatureCard>
  
	<FeatureCard 
		title="Videos" 
		headerColor="#EF4C3C"
		icon="fa-solid fa-play"
	>
		<p style={{margin: 0}}>The tutorial above shows the full workflow from images to video.</p>
	</FeatureCard>
</FeatureCardGrid>

---

## Main Content

### Import an Image Sequence (Video Sequencer)
- Switch to the Video Editing workspace.
- Add > Image/Sequence, navigate to the folder, select all frames (A), and confirm.
- Ensure files are numerically ordered (zero-padded filenames recommended).

### Set Frame Rate and Duration
- Output Properties > Frame Rate (e.g., 24/25/30).
- Set Start/End frames to match the sequence length.
- Preview the sequence in the VSE timeline.

### Export Settings
- Output Properties > Output > pick a folder.
- File Format: FFmpeg video; Encoding: Container MP4; Video Codec H.264.
- Quality: High; Keyframe distance: 12–24; Color: RGB.
- Press Render > Render Animation.

### Tips
- Use the Compositor for basic color correction if needed.
- Ensure consistent naming: image_0001.png … image_0123.png.
- For very large sequences, consider proxy strips for smoother preview.

---

## Summary

You can quickly convert still frames into a video in Blender’s VSE: import the image sequence, set frame rate and output settings, then render an MP4 using H.264.

**Key Takeaways:**
- Image sequences must be numerically ordered.
- Match frame rate to desired playback.
- Export with FFmpeg → MP4 (H.264) for broad compatibility.

---

## Documentation for Methodology

Understanding the technique is only half the work—documenting it properly is what makes your investigation defensible and reproducible.

<details>
<summary><strong>What to document when creating video from stills</strong></summary>

### In Your Method Section

Describe the source of the images, their original resolution and color space, the ordering method, and the final export settings (frame rate, codec, container).

### In Your Decision Log

Record:
- Source and provenance of the still images
- Any preprocessing (renaming, color correction)
- Frame rate chosen and rationale
- Export format (container + codec) and output resolution
- Date performed

### Verification

Confirm the total frame count matches the number of images; verify no ordering gaps; spot-check timecode against expected duration (frames ÷ fps).

### Common Limitations

Mixed resolutions/formats in one sequence may cause issues; very high-res sequences can be slow to preview; recompression may introduce artifacts.

### Example Methodology Statement

> "We assembled 352 original PNG frames (1920×1080, sRGB) into a video sequence using Blender 4.2. Frames were numerically ordered and imported via the Video Sequencer. Output was encoded with FFmpeg to MP4 (H.264) at 25 fps, 1920×1080. No color grading was applied beyond gamma-consistent viewing."

</details>