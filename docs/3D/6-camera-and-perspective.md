---
title: Camera & Perspective
description: Understanding how cameras work in 3D space and the principles of perspective for visual investigation.
sidebar_position: 6
---

# Camera Fundamentals for Investigation and 3D Reconstruction

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
    <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>ADVANCED</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>25 min read</span>
  </div>
</div>

---

import VideoCarousel from '@site/src/components/VideoCarousel';

<VideoCarousel videos={[
  { id: 'CKRIjej1nMI', title: 'Camera Fundamentals for 3D Reconstruction' },
  { id: 'vXBY4Uv7hgs', title: 'Camera Parameters Explained' },
  { id: '_AXwPrkWuMo', title: 'Understanding Camera Basics' }
]} />

## Introduction

Having a basic understanding of camera systems is crucial within the investigative context. This knowledge operates on two interconnected levels:

**First Level: Understanding Source Material**  
All visual evidence—photographs, video footage, security camera recordings—is the product of a camera system. You're analyzing the output of specific optical and sensor configurations, each with particular characteristics. Older cameras produce different artifacts than modern ones. Footage may be cropped, compressed, or otherwise manipulated, all of which distort the original perspective. Understanding what you're looking at requires understanding the camera that created it and being able to identify if an image has been altered in any way.

**Second Level: Virtual Camera Configuration**  
Within 3D software, you're always viewing through a camera. The viewport itself, even when no virtual camera is set up, functions as a camera with its own focal length and sensor size. When you render an image or video, you're rendering through a virtual camera. To meaningfully compare your 3D reconstruction to real evidence, camera parameters must align precisely.

This document covers the fundamental camera parameters needed for accurate investigative work. Getting these right isn't about aesthetics—it's about accuracy and valid visual comparison.

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard 
    title="What You'll Learn" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-book"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>Focal length and field of view</li>
      <li>Sensor size and crop factors</li>
      <li>Aperture, f-stops, and depth of field</li>
      <li>Image dimensions and aspect ratios</li>
      <li>Camera matching tools and techniques</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Key Concepts" 
    headerColor="#1C75BC"
    icon="fa-solid fa-camera"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>Real vs virtual camera parameters</li>
      <li>The dolly zoom effect</li>
      <li>Lens distortion handling</li>
      <li>EXIF data and metadata analysis</li>
      <li>Motion blur and shutter speed</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Why It Matters" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-magnifying-glass"
  >
    <p style={{margin: 0}}>Camera matching is essential for comparing 3D reconstructions to photographic evidence, verifying sightlines, and creating legally defensible spatial analysis.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## Why Camera Matching Matters

Camera matching is essential for:

- **Comparing 3D reconstructions to photographic evidence** - Your virtual camera must replicate the original camera's perspective
- **Verifying sightlines** - Determining what was visible from a specific vantage point
- **Analyzing spatial relationships** - Understanding distances and positions within a scene
- **Validating reconstructions** - Ensuring your 3D model accurately represents the real-world space

## Key Investigative Considerations

**Metadata Analysis**  
EXIF data from original footage can reveal focal length, sensor size, camera model, and other technical parameters. When metadata is available, it's your primary source of truth. When unavailable, you must establish these parameters through visual comparison and testing.

**Era-Specific Technology**  
Camera technology varies significantly by era. Footage from older equipment may contain specific artifacts, distortions, or compression patterns. Understanding the limitations and characteristics of different camera generations helps you interpret evidence accurately.

**Cropping and Manipulation**  
Cropping or manipulation of source imagery affects perspective and field of view. You must account for what was framed in or out, and whether the image you're analyzing represents the full original frame or has been altered.

**Device-Specific Characteristics**  
Different device types—smartphones, DSLRs, security cameras, body cameras—have distinct optical characteristics. A reconstruction based on smartphone footage will have different parameters than one based on professional camera equipment.

## Image Dimension

Image dimension refers to the width and height of the rendered image, measured in pixels. This determines both the resolution and aspect ratio of your output.

### Why It Matters in Investigation

Your output must match the aspect ratio and format of your reference footage. If you're comparing your reconstruction to a photograph taken at 1920×1080 pixels, your render should be 1920×1080 pixels. If you're documenting a crime scene with images shot on a specific device, match that device's aspect ratio precisely.

### Common Aspect Ratios

**16:9 (1920×1080, 3840×2160)**  
Standard for modern video and photography. Used by most contemporary cameras, smartphones, and security systems.

**4:3 (1024×768, 1600×1200)**  
Older cameras and some institutional equipment. Common in legacy security camera systems and older digital cameras.

**1:1 (1000×1000)**  
Square format used in social media documentation and some specialized cameras.

**Custom Ratios**  
Always match your reference footage exactly. If your source material has an unusual aspect ratio, replicate it precisely in your 3D software.

### Resolution Considerations

Higher resolution renders provide more detail but require longer rendering times. Choose resolution based on:

- The resolution of your source material
- The level of detail your analysis requires
- The intended output format (court presentation, report documentation, etc.)
- Available computational resources

## Sensor Size

The camera sensor is the physical component that captures light and creates the digital image. Sensor size refers to the physical dimensions of this component, typically measured in millimeters.

### Why It Matters in Investigation

Different cameras have different sensor sizes, which fundamentally affects how they capture a scene. A smartphone has a small sensor (typically 5×4mm or smaller), while a professional DSLR has a larger sensor (often 36×24mm for full-frame). When reconstructing a scene photographed with a specific camera, matching the sensor size ensures your virtual camera behaves the same way as the real one.

Sensor size, combined with focal length, determines the field of view—how much of the scene is captured in the frame.

### Common Sensor Sizes

**35mm Full-Frame: 36 × 24 mm**  
Standard for professional photography. Used in high-end DSLRs and mirrorless cameras. This is a reasonable default when the exact sensor size is unknown.

**APS-C: 23.5 × 15.6 mm**  
Common in mid-range DSLRs and many enthusiast cameras. Approximately 1.5x crop factor compared to full-frame.

**Micro Four Thirds: 17.3 × 13 mm**  
Used in compact mirrorless systems. Approximately 2x crop factor compared to full-frame.

**Smartphone Sensors: Typically 5 × 4 mm or smaller**  
Most modern smartphones use very small sensors. This results in unique optical characteristics, particularly very wide depth of field.

**Medium Format: 43.8 × 32.9 mm and larger**  
Larger than full-frame, used in high-end professional cameras. Uncommon in investigative contexts but may appear in specialized documentation.

**Security Camera Sensors: Variable, often 1/3" or smaller**  
Security and surveillance cameras typically use very small sensors, which affects their field of view characteristics and low-light performance.

### Finding Sensor Size Information

1. **Check camera model specifications** - If you know the camera model, look up its sensor dimensions
2. **Analyze EXIF metadata** - Some EXIF data includes sensor information or camera model
3. **Use 35mm full-frame as default** - When sensor size is unknown, 36×24mm is a reasonable starting point
4. **Test and compare** - Render test frames with different sensor sizes and compare to reference footage

## Aperture and F-Stops

The aperture is the opening in the lens through which light passes to reach the sensor. It's controlled by adjustable blades that form a larger or smaller hole. Aperture size is measured in f-stops (f/1.4, f/2.8, f/8, f/16, etc.).

### Understanding F-Stop Numbers

**Critical concept:** F-stop numbers work inversely to aperture size:
- **Small f-stop number (f/1.4, f/2)** = Large aperture opening = More light
- **Large f-stop number (f/16, f/22)** = Small aperture opening = Less light

This confuses many people when first learning photography. Think of f-stops as fractions: f/2 is like 1/2 (larger) and f/16 is like 1/16 (smaller).

### How Aperture Works: The Water Tank Analogy

Imagine filling two identical glasses with water from two different taps:

**Tap 1 (f/16 - Small Aperture):**  
Small hole, slow drip. Must stay open for a long time (slow shutter speed like 1/2 second) to fill the glass.

**Tap 2 (f/2 - Large Aperture):**  
Large hole, fast flow. Must stay open briefly (fast shutter speed like 1/1000 second) to fill the glass.

The "glass" is your sensor, and it needs the same amount of light (exposure) regardless of aperture size. Aperture and shutter speed work together to achieve proper exposure.

### Standard F-Stop Scale

Each stop either doubles or halves the amount of light:

f/1.4 → f/2 → f/2.8 → f/4 → f/5.6 → f/8 → f/11 → f/16 → f/22 → f/32

Moving from f/2.8 to f/4 cuts light by half. Moving from f/8 to f/5.6 doubles the light.

### Aperture in Video vs Photography

**Photography:** You can use any shutter speed. Want to shoot at f/32? Use a tripod and shoot at 1/2 second or longer.

**Video (24fps standard):** You're locked to approximately 1/48 second shutter speed for natural motion blur. This creates lighting challenges:

- **Large aperture (f/2.8):** Lots of light enters. On a bright day, even 1/48 second may overexpose your image. Solution: Use a neutral density (ND) filter to reduce light.
- **Small aperture (f/16 or smaller):** Very little light enters. You need extensive artificial lighting to achieve proper exposure at 1/48 second.

### Neutral Density (ND) Filters

ND filters are essential tools in video and investigative work. They're gray filters that reduce the amount of light entering the lens without affecting color. This allows you to:

- Shoot at large apertures (shallow depth of field) in bright conditions
- Maintain the 1/48 second shutter speed standard for natural motion blur
- Control exposure without changing aperture or shutter speed

**Variable ND Filters** use two polarizing filters that rotate relative to each other. At 0°, maximum light passes through. At 90°, minimal light passes through. This gives you adjustable light reduction in a single filter.

## Focal Length

Focal length is the distance between the lens and the image sensor when the subject is in focus, measured in millimeters. In theory, a 35mm lens should have exactly 35mm between the lens and sensor, but in practice the optical design is more complex, especially with zoom lenses where focal length changes.

Focal length directly determines the field of view: shorter focal lengths produce wider views, while longer focal lengths produce narrower, more magnified views.

### Why It Matters in Investigation

Focal length determines how much of a scene is visible in a photograph and how spatial relationships appear. This is critical for:

- **Spatial analysis** - Understanding what was visible from a specific location
- **Distance estimation** - Different focal lengths compress or expand apparent distances
- **Perspective matching** - Your 3D camera must use the same focal length as the source camera
- **Sightline verification** - Determining whether something could have been seen from a particular vantage point

### Critical Concept: The Dolly Zoom Effect

One of the most important concepts for understanding focal length in reconstruction work is the dolly zoom (also called the Vertigo effect). Instead of simply zooming in or out, consider what happens when you change focal length while keeping a subject the same size in frame by moving the camera position.

As you increase focal length and move the camera back to keep the subject framed identically, the background appears to grow larger and closer—perspective becomes compressed. As you decrease focal length and move closer, the background recedes and appears more distant—perspective becomes exaggerated.

This effect demonstrates that **focal length fundamentally changes spatial relationships in your image**. This is crucial in investigative work: two photographs of the same scene taken with different focal lengths will show dramatically different spatial relationships, even if the main subject appears similar in size.

### Common Focal Length Ranges

**14-24mm: Ultra-Wide Angle**  
Captures extensive surroundings with a very broad field of view. Common in architectural photography and wide environmental documentation. Creates noticeable perspective distortion, making close objects appear larger and distant objects appear farther away.

**Important for portraits:** Wide-angle lenses create unflattering distortion on faces. A 24mm portrait will exaggerate facial features unnaturally. Avoid using wide angles for facial documentation unless capturing environmental context is essential.

**24-35mm: Wide Angle**  
Still captures a broad view but with less dramatic distortion. Common in general photography and documentation work.

**35-50mm: Standard/Normal Lens**  
Approximately matches human eye perspective. 50mm on full-frame is considered the "normal" focal length—objects appear roughly as they do to the human eye in terms of size and spatial relationships. This is often the default in 3D software, but you should always verify this matches your reference material rather than accepting the default.

**70-100mm: Moderate Telephoto**  
Magnifies distant subjects and compresses perspective. Makes background elements appear closer to foreground subjects. Common in portrait photography and detail documentation. This range (particularly 80-100mm) is ideal for facial documentation as it produces natural, flattering perspective without distortion.

**200mm and longer: Strong Telephoto**  
Highly magnified view with very narrow field of view. Significant perspective compression. Used for distant subjects such as in surveillance or long-range documentation.

### Focal Length Terminology

**Prime Lens:** A lens with a fixed focal length (e.g., 50mm, 85mm). Cannot zoom.

**Zoom Lens:** A lens that can change focal length within a range (e.g., 24-70mm, 70-200mm).

**Common Mistake:** Many people incorrectly call telephoto lenses "zoom lenses." These are different concepts:
- A 70-200mm zoom lens is telephoto because it covers long focal lengths
- An 18-35mm zoom lens is wide-angle because it covers short focal lengths  
- Both are zoom lenses because they can change focal length
- A 200mm prime lens is telephoto but NOT a zoom lens

### Matching Focal Length to Reference

**When EXIF Data is Available:**  
Use the exact focal length value recorded in the metadata. This is your most reliable source.

**When EXIF Data is Unavailable:**  
You must estimate by visual comparison:

- Does the reference photo look wide and expansive? → Shorter focal length (24-35mm)
- Does it look relatively natural, similar to human vision? → Standard focal length (35-50mm)
- Does it look magnified with compressed depth? → Longer focal length (70mm+)

Test multiple values in your 3D software, render comparison frames, and match the field of view to your reference image.

### Focal Length and Perspective Distortion

Different focal lengths create different types of perspective distortion:

- **Wide-angle lenses** exaggerate distance between near and far objects
- **Telephoto lenses** compress apparent distances, making objects at different depths appear closer together
- **Standard lenses** produce the most natural-looking perspective

Understanding these effects is crucial when analyzing spatial relationships in evidence photography.

## Depth of Field

Depth of field (DOF) refers to the range of distance within a scene that appears acceptably sharp. Understanding depth of field is crucial for matching reference footage and creating realistic reconstructions.

### The Four Factors That Control Depth of Field

**1. Focal Length**  
Longer focal lengths create shallower depth of field. A 200mm lens will have much shallower DOF than a 50mm lens at the same aperture and distance.

- 200mm at f/2.8: Very shallow, significant background blur
- 50mm at f/2.8: Moderate depth of field
- 24mm at f/2.8: Deep depth of field, most elements sharp

**2. Aperture (F-Stop)**  
Larger apertures (smaller f-numbers) create shallower depth of field.

- f/2.8: Shallow depth of field, blurred background
- f/8: Moderate depth of field
- f/22: Deep depth of field, nearly everything sharp

**3. Distance to Subject**  
The closer you are to your subject, the shallower the depth of field becomes. This is why macro photography has extremely shallow DOF—you're very close to the subject.

- 1 meter from subject: Very shallow DOF
- 5 meters from subject: Moderate DOF
- 20 meters from subject: Deep DOF (harder to achieve shallow focus)

**4. Sensor Size**  
Larger sensors create shallower depth of field when framing the same shot. This is because you must use a longer focal length or get closer to achieve the same framing on a larger sensor.

- Full-frame sensor: Shallowest DOF potential
- APS-C sensor: Moderate DOF
- Smartphone sensor: Very deep DOF (almost everything in focus)

### The One-Third Rule

Depth of field is not evenly distributed around your focus point. The sharp zone extends:
- **One-third in front** of the focus point
- **Two-thirds behind** the focus point

This is crucial when setting focus in your 3D camera for accurate reconstruction.

### Smartphone "Portrait Mode" is Fake

Modern smartphones simulate shallow depth of field using computational photography (software processing), not optical depth of field. The small sensors in smartphones physically cannot achieve shallow DOF due to their tiny size. When analyzing smartphone footage:

- Default camera mode: Everything in focus (real optical behavior)
- Portrait mode: Artificial background blur (software effect, may have errors)
- Be cautious when reconstructing scenes from portrait mode images—the blur may not accurately represent what would be optically possible

### Why Scale Matters for Depth of Field

**This is critical for 3D reconstruction work:** Depth of field calculations in 3D software are based on real-world physics. If your 3D model is not built to accurate scale, depth of field will not behave correctly.

Example: If you model a person as 10 meters tall instead of 1.8 meters, the depth of field will be completely wrong. The scene will behave as if you're photographing a giant, not a person. Always model to real-world scale when depth of field matching is required.

## The Relationship Between Sensor Size and Focal Length

Sensor size and focal length work together to determine field of view. The same focal length on different sensor sizes produces different fields of view because the sensor captures different portions of the lens's image circle.

### The Crop Factor Concept

Smaller sensors "crop" into the image circle produced by the lens, creating a narrower field of view. This relationship is expressed as a crop factor:

- **Full-frame (35mm):** 1.0x crop factor (reference standard)
- **APS-C:** Approximately 1.5x crop factor
- **Micro Four Thirds:** Approximately 2.0x crop factor
- **Small smartphone sensors:** Often 5-7x crop factor or higher

### Field of View Equivalence

A 50mm lens produces different fields of view on different sensors:

- **50mm on full-frame sensor:** ≈ 47° field of view (normal/standard perspective)
- **50mm on APS-C sensor:** ≈ 32° field of view (narrower, more magnified)
- **50mm on Micro Four Thirds:** ≈ 24° field of view (even narrower)

### Practical Implications for Investigation

When you know the camera model:
1. Determine its sensor size
2. Find the focal length (from EXIF or estimation)
3. Your 3D software will automatically calculate the correct field of view

When you only know focal length:
1. Use 35mm full-frame as a default sensor size
2. Test render and compare to reference footage
3. Adjust sensor size if the field of view doesn't match

When you know neither:
1. Start with 35mm sensor and 50mm focal length (standard defaults)
2. Adjust focal length first to match field of view
3. Fine-tune sensor size if needed for precise matching

## Practical Workflow: Matching Your 3D Camera to Real Footage

### Step 1: Analyze Reference Footage

- Identify the camera model if possible
- Extract EXIF metadata from digital files
- Note the image dimensions and aspect ratio
- Assess the apparent field of view (wide, normal, or telephoto)

### Step 2: Gather Camera Specifications

- Look up sensor size for the identified camera model
- Record the focal length from EXIF data
- If unavailable, note the camera type (smartphone, DSLR, security camera, etc.) for reasonable defaults

### Step 3: Configure Your 3D Camera

- Set image dimensions to match reference footage exactly
- Input sensor size (or use 35mm full-frame as default)
- Input focal length (or start with 50mm if unknown)
- Ensure aspect ratio matches reference material
- **Never accept default 50mm without verification** - Always consciously set your focal length based on reference analysis

### Step 4: Verify Scale

**Critical step:** Ensure all 3D models are built to accurate real-world scale:
- Measure a human figure—should be approximately 1.7-1.8 meters tall
- Measure a door—should be approximately 2 meters tall
- Measure vehicles, furniture, and architectural elements against known dimensions

If scale is wrong, depth of field calculations will be completely incorrect. A scene built 10x too large will behave optically as if you're photographing giants, not humans.

### Step 5: Test and Verify

- Position your virtual camera to match a known reference viewpoint
- Render a test frame
- Compare the field of view to your reference photo
- Check if recognizable features align correctly

### Step 6: Refine Parameters

- If the field of view is too narrow, decrease focal length
- If the field of view is too wide, increase focal length
- Make small adjustments (5-10mm increments) and re-render
- When field of view matches, verify spatial relationships at multiple points in the scene
- Check that depth of field behavior matches (if applicable)

### Step 7: Handle Lens Distortion

If your reference footage shows barrel or pincushion distortion (especially with wide-angle lenses):

1. Use camera tracking software to calculate distortion parameters
2. Decide on workflow: undistort footage, or distort 3D render
3. Document distortion values for consistent application
4. Verify straight lines in your reconstruction align with straight lines in reference

### Step 8: Document Your Settings

- Record all final camera parameters
- Note any assumptions or estimates made
- Document your verification process
- Save multiple test renders showing your matching process

## Camera Matching Tools and Techniques

### fSpy: Automated Camera Matching

**fSpy** is a specialized open-source tool designed specifically for camera matching from single images. It's one of the most efficient ways to extract accurate camera parameters from reference photographs.

**How fSpy Works:**

fSpy uses vanishing points and perspective lines to calculate camera position, rotation, and focal length. The process is:

1. **Import your reference image** into fSpy
2. **Set vanishing points** by drawing lines along parallel edges in the scene (walls, buildings, floor tiles, etc.)
3. **Define reference measurements** if you know real-world dimensions of objects in the scene
4. **fSpy calculates camera parameters** including position, rotation, and focal length automatically
5. **Export to 3D software** - fSpy can export directly to Blender, creating a matched camera

**Key Advantages:**
- Fast and intuitive workflow
- No tracking markers needed
- Works from single still images
- Exports directly to major 3D software packages
- Calculates focal length automatically from perspective geometry
- Particularly effective with architectural photography where straight lines and right angles are prominent

**When to Use fSpy:**
- Static scenes with clear architectural elements
- Images with visible vanishing points (buildings, rooms, streets)
- When you have a single reference photo rather than video footage
- Quick camera matching for preliminary reconstruction work

**Limitations:**
- Requires visible parallel lines and vanishing points in the image
- Less effective in organic environments without clear geometric features
- Works with single images, not video sequences
- Cannot handle lens distortion (must be corrected first)

**Workflow Integration:**

1. If your reference image has lens distortion, undistort it first
2. Import into fSpy and set up vanishing points
3. Export camera to your 3D software
4. Use the matched camera as starting point for your reconstruction
5. Build geometry aligned with the perspective lines you identified

### Manual Camera Matching: The Dolly Zoom Technique

When automated tools aren't suitable or you need to fine-tune camera parameters manually, the dolly zoom technique is one of the most effective manual matching methods.

**The Manual Dolly Zoom Matching Process:**

This technique uses the principle of the dolly zoom effect in reverse: by adjusting focal length and camera distance simultaneously, you can match your 3D camera to reference footage.

**Setup:**
1. Place a reference object or marker in your 3D scene at a known location visible in your reference photo
2. Position your virtual camera roughly where you estimate the real camera was
3. Set an initial focal length estimate (e.g., 50mm)

**Matching Process:**

**Step 1: Match Vertical Field of View**
- Adjust focal length until the vertical extent of your view roughly matches the reference
- A building or tall object that spans most of the frame height is ideal for this

**Step 2: Match Horizontal Field of View**
- If horizontal FOV is wrong but vertical is right, your aspect ratio may be incorrect
- Verify your render resolution matches reference image aspect ratio

**Step 3: Dolly Zoom Adjustment**
- Pick a foreground reference point (e.g., corner of a building)
- Pick a background reference point (e.g., distant structure)
- If background appears too close: increase focal length AND move camera back (dolly out)
- If background appears too far: decrease focal length AND move camera forward (dolly in)
- Keep adjusting until foreground-to-background relationship matches

**Step 4: Fine-Tune Position**
- With focal length now approximately correct, adjust camera X, Y, Z position
- Align specific features: corners, edges, recognizable landmarks
- Use overlay comparison: render at 50% opacity over reference image

**Step 5: Verify Across Multiple Points**
- Check alignment at near, middle, and far distances
- If only some points align, your focal length may still need adjustment
- Perfect alignment across all depths confirms correct focal length and position

**Why This Works:**

The dolly zoom technique works because focal length and camera distance have opposite effects on perspective compression:
- Moving camera closer + shorter focal length = same framing, exaggerated perspective
- Moving camera farther + longer focal length = same framing, compressed perspective

By adjusting both together, you're searching through the space of possible camera configurations until perspective compression matches your reference.

**When to Use Manual Matching:**
- Reference images lack clear vanishing points (landscapes, organic scenes)
- Fine-tuning automated camera matches
- Video sequences where camera may have moved
- Learning and understanding camera behavior deeply
- When automated tools fail or produce incorrect results

**Pro Tip:** Set up two viewports—one showing your 3D scene, one showing reference image with overlay. Adjust parameters while watching both simultaneously for immediate visual feedback.

### Camera Tracking Software

For video sequences or complex camera movements, dedicated tracking software provides the most comprehensive solution:

**SynthEyes**
- Professional-grade camera tracking
- Automatically tracks camera movement through video
- Calculates lens distortion parameters
- Can solve for focal length, camera position, and movement simultaneously
- Exports tracking data to all major 3D software packages

**Blender's Built-in Camera Tracker**
- Free, integrated into Blender
- Can track camera movement and solve for focal length
- Handles lens distortion calculation
- Requires manual marker placement or automatic feature detection
- Good for simpler tracking scenarios

**PFTrack, 3DEqualizer**
- High-end professional solutions
- Used in VFX industry
- Handle complex camera movements and lens distortion
- More expensive but very accurate

**Workflow with Camera Tracking:**

1. Import video footage into tracking software
2. Let software automatically track features or manually place tracking markers
3. Solve for camera movement (this calculates position, rotation, and focal length over time)
4. Calculate lens distortion if needed
5. Export camera data to 3D software
6. Build 3D reconstruction aligned with tracked points

**Choosing Your Approach:**

- **Single still image with clear architecture** → Use fSpy (fastest, most straightforward)
- **Single image without clear vanishing points** → Manual dolly zoom technique
- **Video footage with static camera** → fSpy on one frame, or manual matching
- **Video footage with moving camera** → Camera tracking software (SynthEyes, Blender tracker)
- **Complex lens distortion** → Camera tracking software with distortion calculation

## Common Investigative Scenarios

### Security Camera Footage

Security cameras typically have:
- Very small sensors (often 1/3" or smaller)
- Wide-angle focal lengths (2.8mm to 8mm physical focal length)
- Fixed focal lengths (not zoom)
- Lower resolution than professional cameras
- Specific distortion patterns (especially barrel distortion at wide angles)

Match these characteristics carefully, as security footage often has unique optical properties.

### Smartphone Photography

Modern smartphones feature:
- Very small sensors (typically 1/2.3" to 1/1.7")
- Multiple cameras with different focal lengths
- Computational photography that may alter perspective
- Very wide depth of field due to small sensors (almost everything in focus)
- Possible digital zoom that crops the image
- Fast shutter speeds in bright light, resulting in no motion blur

Check if the image used digital zoom or is cropped, as this affects perspective.

### Body-Worn Cameras

Police body cameras and action cameras typically have:
- Wide-angle lenses (capturing broad field of view, often 120-170°)
- Small sensors
- Fixed focal lengths
- Significant distortion at the edges of the frame (barrel distortion)
- Lower positioning (chest-mounted perspective)
- Often lower frame rates or resolution

Account for both the optical characteristics and the typical mounting height/angle.

### Professional Photography

Professional cameras used in documentation may have:
- Full-frame or APS-C sensors
- Variable focal lengths (zoom lenses)
- High resolution
- Minimal distortion (especially with prime lenses)
- Accurate color reproduction
- Proper motion blur (1/48 second for video)

These typically provide the most accurate and undistorted perspective.

## Common Mistakes in 3D Reconstruction

### Accepting Default 50mm Focal Length

The single most common error in 3D reconstruction work is failing to change the default 50mm focal length. Most 3D software defaults to 50mm, which is almost never correct for your specific reference footage.

**Always verify and set focal length based on your reference material.** This oversight is immediately visible to anyone with camera knowledge and undermines the credibility of your reconstruction.

### Using Impossible F-Stops

3D software allows you to set any f-stop value, including physically impossible ones like f/0.1, f/0.4, or f/0.6. Real lenses don't go below approximately f/0.95 (with f/1.2 or f/1.4 being more common as the widest apertures).

**For realistic reconstruction:**
- Maximum aperture (shallowest DOF): f/1.2 to f/2.8
- Standard apertures: f/4 to f/8
- Deep DOF: f/11 to f/22

**Exception:** When recreating impossible or stylized perspectives (like macro/microscopic shots in films like Ant-Man), you may deliberately use impossible f-stops to achieve the desired visual effect. Document why you're breaking realism.

### Working at Wrong Scale

If your 3D models aren't built to accurate real-world scale, depth of field calculations will be wrong. A 2-meter cube modeled as 20 meters will produce completely incorrect DOF behavior.

**Always model to scale:** Use real-world measurements for all elements in your scene.

### Ignoring Lens Distortion

Wide-angle reference footage will have barrel distortion, but 3D renders have perfectly straight lines. If you ignore this mismatch, your composite will never look convincing. Always account for lens distortion in your workflow.

### Misunderstanding Crop Factor

When tracking a shot, software may ask for focal length and sensor size. If you input "50mm" but don't specify which sensor it was shot on, your calculations will be wrong.

**Example:** A 50mm lens on APS-C (1.6x crop) behaves like an 80mm lens in terms of field of view. You must either:
- Input the effective focal length (80mm) with full-frame sensor, OR
- Input the physical focal length (50mm) with correct sensor size (APS-C)

### Not Accounting for Digital Zoom or Cropping

If your reference image has been digitally zoomed or cropped, the EXIF data may show a wider focal length than what's actually visible in the frame. Always verify whether images are cropped before trusting metadata.

## 3D Software-Specific Considerations

### Camera Presets and Sensor Sizes

Most 3D software includes camera presets for common sensors:
- 35mm Full-Frame (36 × 24mm)
- Canon APS-C, Nikon APS-C (slightly different sizes)
- Micro Four Thirds
- Various cinema camera formats (RED, ARRI, etc.)

**Important limitation:** Most 3D software assumes you're matching lens to sensor correctly. If you use a lens designed for a different sensor format than specified, the software may auto-compensate incorrectly.

**Best practice:** Specify both the physical focal length AND the sensor size it was designed for, not just the effective field of view.

### Depth of Field in Rendering

To enable accurate depth of field in renders:

1. Enable DOF in camera settings
2. Set f-stop value (aperture)
3. Set focus distance (what distance should be sharp)
4. Verify scene scale is accurate
5. Render test frames to verify DOF behavior matches reference

**Performance note:** Depth of field significantly increases render times. Use lower quality settings for tests, full quality for final renders.

### Focal Length Animation

If you need to recreate a zoom shot (changing focal length during the shot), keyframe the focal length parameter in your 3D software. This is different from moving the camera (dolly) and produces different perspective effects.

**Dolly zoom effect:** Simultaneously change focal length and camera position to keep subject the same size while dramatically altering perspective compression. This requires keyframing both camera position and focal length.

## Troubleshooting Camera Matching

### Field of View Doesn't Match

- Verify you're using the correct sensor size
- Check if the reference image is cropped
- Ensure you're comparing the same aspect ratio
- Test incrementally different focal lengths

### Perspective Looks Wrong

- Confirm camera position and angle match exactly
- Check for lens distortion in the reference image
- Verify the reference image hasn't been digitally altered
- Consider if the reference used a different lens than specified

### Metadata is Contradictory

- Some cameras write incorrect EXIF data
- Crop modes may not be reflected in metadata
- Digital zoom may not be recorded
- Trust visual matching over questionable metadata

### Multiple Reference Images Don't Align

- Different images may be from different cameras
- Zoom settings may have changed between shots
- Images may be cropped differently
- Some images may be manipulated

## Advanced Considerations

### Lens Distortion

Real lenses, especially wide-angle lenses, introduce geometric distortion:

**Barrel Distortion:** Straight lines bow outward (common in wide-angle lenses)  
**Pincushion Distortion:** Straight lines bow inward (common in telephoto lenses)  
**Mustache Distortion:** Complex combination of barrel and pincushion

Many 3D software packages can simulate these distortions or correct for them when matching reference footage.

### Handling Lens Distortion in 3D Reconstruction

3D software renders with mathematically perfect lenses—no distortion. Real footage has lens distortion. This creates a fundamental matching problem. You have two approaches:

**Approach 1: Undistort the Footage**
1. Take your distorted reference footage
2. Use camera tracking software (SynthEyes, Blender's tracker) to calculate lens distortion
3. Undistort the footage to remove lens distortion
4. Match your 3D camera to the undistorted footage (now straight)
5. Composite your 3D elements onto the undistorted plate
6. Redistort the final composite to match the original footage

**Approach 2: Distort the 3D Render**
1. Keep your reference footage with its original distortion
2. Calculate the lens distortion parameters
3. Render your 3D scene with a perfect lens
4. Apply lens distortion to your 3D render in compositing
5. Composite the distorted 3D onto the distorted plate

Most professional workflows use Approach 1 because it's easier to work with straight lines in 3D, and tracking is more accurate on undistorted footage.

**Lens Distortion Grids:** To accurately measure lens distortion, photograph a grid pattern (like graph paper or a calibration grid) with the same lens and focal length used in your footage. The distortion of the straight grid lines reveals the exact distortion profile of the lens.

### Anamorphic Lenses

Anamorphic lenses are a specialized lens type that physically squeezes the image horizontally to fit a wider aspect ratio onto the sensor.

**History:** Film cameras originally shot at 4:3 aspect ratio (matching the full film frame). When cinema wanted wider formats (2.35:1 or 2.39:1) for theatrical release, simply cropping would lose significant image area and resolution. Anamorphic lenses solved this by optically compressing the wide image to fit the full film height, maximizing resolution.

**How They Work:**
- The lens squeezes the horizontal field of view by approximately 2x
- The sensor records a vertically stretched image
- During projection or post-production, the image is "desqueezed" back to the intended wide aspect ratio

**Distinctive Characteristics:**
- Oval/elliptical bokeh (out-of-focus highlights are stretched vertically)
- Horizontal lens flares (characteristic streaks across the frame)
- Unique optical character and feel

**Modern Usage:** Digital sensors provide plenty of resolution for wide formats without anamorphic compression, but filmmakers still use anamorphic lenses for their distinctive aesthetic look.

**Anamorphic in 3D Software:**

When working with anamorphic footage:
1. Import your footage at its recorded resolution (vertically stretched)
2. Set your 3D camera to the same recorded resolution
3. Adjust the aspect ratio to match the squeeze factor (typically 2:1 or 1.33:1)
4. Render your 3D at the squeezed resolution
5. Desqueeze both the footage and 3D render together in compositing

Example: If footage is 1920×1080 anamorphic with 1.33x squeeze:
- Camera resolution: 1920×1080
- Pixel aspect ratio: 1.333:1 (to desqueeze)
- Final output after desqueeze: 2560×1080 (wider)

### Vignetting

Many lenses, particularly at wider apertures, darken the corners of the image (vignetting). If your reference footage shows vignetting, you may need to replicate this for accurate visual matching.

### Motion Blur and Shutter Speed

Motion blur is controlled by shutter speed—how long the sensor is exposed to light for each frame.

**Standard Cinematic Motion Blur:** Film and professional video use the "180-degree shutter rule":
- For 24fps video: 1/48 second shutter speed
- For 30fps video: 1/60 second shutter speed
- This creates natural-looking motion blur that audiences expect

**Fast Shutter Speed (1/500, 1/1000 second):**
- Creates crisp, sharp images with minimal motion blur
- Objects frozen mid-motion appear sharp
- Produces an unnatural, staccato look that reveals the video is composed of discrete frames
- Smartphone footage often has this characteristic (especially in bright daylight)

**Example Analysis:** iPhone footage shot in bright sunlight typically shows very fast shutter speeds (1/1000 second or faster) with no motion blur. This is because the small aperture required to avoid overexposure forces fast shutter speed. Professional cameras use ND filters to maintain proper motion blur.

**Investigative Implications:**
- No motion blur = very fast shutter speed = likely bright conditions or small sensor
- Natural motion blur = controlled shutter speed = professional camera or manual settings
- Excessive motion blur = slow shutter speed = low light conditions

Certain films deliberately break the 180-degree rule for stylistic effect. Saving Private Ryan used faster shutter speeds in battle scenes to create a chaotic, sharp, and immediate feel—every explosion and dust particle rendered in crisp detail.

### Camera Sensor Damage Warnings

**Never Point Your Camera at the Sun or Lasers:**

Just as a magnifying glass can focus sunlight to burn paper, camera lenses focus light onto the sensor. Pointing a camera at the sun or a laser can permanently burn the sensor, creating dead pixels or ruined spots.

- **Bright sun:** Particularly dangerous when using telephoto lenses (which magnify the sun's intensity)
- **Sunset/sunrise:** Generally safer due to reduced intensity, but still be cautious
- **Lasers:** Even brief exposure can destroy camera sensors—never film lasers pointing at the camera

This is especially relevant when analyzing surveillance or security footage. If footage shows direct sun exposure or laser strikes on the camera, expect potential sensor damage artifacts in that footage.

### Compression and Artifacts

Video compression and image processing can introduce artifacts that affect visual comparison:

- Motion blur in video footage
- Compression artifacts at edges
- Noise in low-light footage
- Rolling shutter effects in fast motion

These don't affect camera parameter matching but should be considered when comparing your reconstruction to evidence.

## Practical Tips for Investigative Work

### Experiment with Focal Lengths

Don't default to 50mm. Actively experiment:
- Render the same scene at 24mm, 35mm, 50mm, 85mm, 135mm
- Observe how perspective changes
- Develop intuition for what different focal lengths look like
- Build a reference library of how focal lengths affect spatial relationships

### Analyze Professional Work

Watch films and documentaries with attention to camera choices:
- What focal lengths are used for different types of shots?
- How does depth of field direct attention?
- What lenses create what emotional effects?
- How do camera movements interact with lens choices?

### Document Everything

For every reconstruction project:
- Record all camera parameters used
- Document your verification process
- Save test renders showing your matching process
- Note any assumptions or estimates
- Explain why you chose specific parameters

### Use Camera Matching Tools

Choose the right tool for your scenario:

**fSpy for single images:**
- Fast setup with architectural photography
- Automatic focal length calculation
- Perfect for static crime scene or accident documentation
- Exports directly to 3D software

**Manual dolly zoom for organic scenes:**
- Works when vanishing points aren't clear
- Builds deep understanding of camera behavior
- Useful for natural landscapes or irregular environments

**Camera tracking software for video:**
- SynthEyes for professional work
- Blender's tracker for accessible solution
- Automatically calculates lens distortion
- Handles moving camera sequences

### Build to Scale Always

Make this a non-negotiable rule:
- All models must be real-world scale
- Verify scale with known reference objects
- Use measurement tools in your 3D software
- Check human figures are 1.7-1.8m tall

### Test with Simple Geometry First

Before building complex scenes:
1. Place simple geometric objects (cubes, spheres) at known positions
2. Match camera to one reference photo
3. Verify the geometry aligns correctly
4. Add complexity only after basic matching works

---

## Summary

Camera knowledge is fundamental to visual investigation on two inseparable levels: understanding the cameras that created your source material, and configuring virtual cameras to match that perspective accurately.

### Key Takeaways

- **Never accept default 50mm focal length** - This is the most common mistake in 3D reconstruction
- All visual evidence is the product of specific camera systems with particular optical characteristics
- Sensor size and focal length together determine field of view—both must be matched correctly
- **Aperture controls depth of field** - Understand f-stops and their inverse relationship to aperture size
- **Four factors control depth of field:** focal length, aperture, subject distance, and sensor size
- EXIF metadata is your primary source for camera parameters when available
- When metadata is unavailable, visual comparison and testing are required
- 35mm full-frame (36×24mm) is a reasonable default when sensor size is unknown
- Different camera types (security, smartphone, professional) have distinct characteristics
- **Scale is critical** - Models must be built to real-world scale for accurate depth of field
- Lens distortion must be accounted for, especially with wide-angle lenses
- Motion blur reveals shutter speed, which indicates lighting conditions and camera type
- Use only realistic f-stop values (f/1.2 to f/22) unless deliberately creating impossible perspectives
- The dolly zoom effect demonstrates how focal length fundamentally changes spatial relationships
- Document your camera matching process and parameters thoroughly

### Essential Workflow Principles

1. **Analyze before building** - Study reference footage carefully before starting 3D work
2. **Work to scale always** - No exceptions; incorrect scale breaks depth of field
3. **Verify, don't assume** - Test your camera match with renders, don't trust it without verification
4. **Handle distortion correctly** - Choose undistort-footage or distort-render workflow and stick to it
5. **Document everything** - Your reconstruction must be defensible; keep detailed records

### Camera Matching Method Decision Tree

**Do you have a single still image?**
- Yes, with clear architecture/vanishing points → **Use fSpy**
- Yes, but organic/irregular scene → **Manual dolly zoom technique**

**Do you have video footage?**
- Static camera → **fSpy on one frame or manual matching**
- Moving camera → **Camera tracking software (SynthEyes/Blender tracker)**

**Do you need to account for lens distortion?**
- Yes, and have video → **Camera tracking software (auto-calculates)**
- Yes, and have still image → **Pre-process with lens correction, then fSpy**

**Is this quick visualization or forensic evidence?**
- Quick visualization → **fSpy or manual matching acceptable**
- Forensic evidence → **Camera tracking software with full documentation**

### Final Thought

Accurate camera parameter matching transforms your 3D reconstruction from an approximate model into a precise analytical tool for spatial investigation. The difference between accepting default settings and carefully matching camera parameters is often the difference between reconstruction that merely illustrates your theory and reconstruction that proves it.

Every camera choice affects how space is perceived. Master these fundamentals, and you'll be able to read photographs like documents—understanding not just what they show, but how they were captured, what was possible to see, and what the camera's perspective reveals about the scene.

**Further Resources:**
- [Camera Matching Technique](/docs/tools-addons-techniques/techniques/camera-matching) - Detailed camera matching workflows
- [fSpy Tool](/docs/tools-addons-techniques/tools/fspy) - Camera matching software for Blender
- [Camera Tracking Technique](/docs/tools-addons-techniques/techniques/camera-tracking) - Video-based camera solving
- [Blender Documentation: Camera Settings](https://docs.blender.org/manual/en/latest/render/cameras.html)
- [fSpy Official Website](https://fspy.io/) - Free, open-source camera matching tool
- [ExifTool](https://exiftool.org/) - Extract metadata from digital images
