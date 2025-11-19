# Camera Tracking

Tracking camera movement in footage to integrate 3D elements.

## Key Concepts

- Feature tracking
- Solve camera motion
- Ground plane definition
- Tracking markers


Stable Footage
No or little motion blur
trackable points

Photogrammetry PRinciples

## Workflow

(Content to be added)

## Best Practices

(Content to be added)

## Common Pitfalls

(Content to be added)


## Concepts
### Native Blender Trackers
Made by Keir Mierle: https://utoronto.scholaris.ca/server/api/core/bitstreams/56da50f4-4c06-4d3b-af83-d57cc5fb9256/content

Blender motion tracking library is called "libmv" ,
originally written by Keir Mierle.
It uses:

1. Harris detector for feature detection.
2. A variant of Kanade—Lucas—Tomasi for tracking 
3. Subset reconstruction and bundle adjustment 



## Perspective-n-Point (PnP)
The problem of estimating the pose of a camera given
a set of known 3D points and their corresponding 2D
proj ections in an image .
Polychase is essentially PnP on steroids .

PnP mainly deals with three quantities :
1. 3D points.
2. The corresponding 2D points .
3. Camera pose (location & orientation) .
The obj ective is to find the pose that minimizes the
reproj ection error between the ground truth 2D
points, and the proj ected 2D points .

We want to minimize the error:
E = 0
foreach (P, p):
E += || project, P,TkL -P || ^2

Where P, p are the 3D point, and the corresponding 2D point

And T, K are the extrinsics (pose) and
intrinsics of the frame .

### Polychase
https://github.com/theartful/polychase
https://www.youtube.com/watch?v=W4HNmcjFuLw

### Geotracker
What if we have a mesh for the tracked object?
We would have to only solve for the camera/geomtery trajectory, without solving for 3d points. We can focus solely on the object we want to track


## SFM
Colmap Glowmap (SFM)
https://github.com/theartful/polychase
https://www.youtube.com/watch?v=QIxXuilEEVw&t=292s