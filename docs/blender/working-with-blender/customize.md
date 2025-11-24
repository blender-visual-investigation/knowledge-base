---
title: "Customizing Workspaces"
description: "Learn how to customize Blender's interface and create specialized workspaces for visual investigation workflows."
sidebar_position: 2
---

# 1.4 : Workspaces & Interface Customization

Setting up Blender to suit our needs for efficient visual investigation workflows.

## Workspaces & Interface Customization

Blender uses a **non-overlapping, tiling window management system**. The interface is divided into rectangular areas called **Editors**. A specific configuration of these Editors is called a **Workspace**.

### Understanding Workspaces

Workspaces are displayed as **tabs** at the top of the window (e.g., Layout, Modeling, Sculpting, UV Editing). Each tab represents a layout preset optimized for a specific task. Switching tabs instantly reconfigures the visible Editors.

#### Core Concepts

- **Non-Overlapping**: Windows do not sit on top of each other. Expanding one area requires shrinking a neighbor
- **Editors**: Any area can be any tool. A 3D Viewport can be changed into a Text Editor or Properties panel instantly
- **Global Data**: Workspaces are interface layouts only. Changing the layout in one workspace does not delete data (objects, meshes) from the scene

### Customizing the Layout

To build a custom environment for visual investigation (e.g., side-by-side video analysis), you must master manipulating these areas.

#### 1. Resizing Areas

Hover the mouse cursor over the border between two areas until it changes to a **double-headed arrow**. Click and drag to resize.

#### 2. Splitting Areas (Creating new windows)

There are two methods to split an area into two:

**Corner Drag Method:**
- Hover the cursor over the very corner of an area
- The cursor will turn into a **crosshair (+)**. Click and drag inward
- Dragging horizontally splits the area vertically
- Dragging vertically splits the area horizontally

**Context Menu Method:**
- Right-click on the border between two areas
- Select **Vertical Split** or **Horizontal Split**
- A line will appear; click to confirm the split location

#### 3. Joining Areas (Removing windows)

**Corner Drag Method:**
- Hover over the corner
- Click and drag outward (into the neighboring area)
- A large semi-transparent arrow will appear pointing to the area that will be closed
- Release to join

**Context Menu Method:**
- Right-click the border, select **Join Areas**
- Click the area you wish to collapse

#### 4. Changing Editor Types

To change an area's function (e.g., changing a 3D Viewport to an Image Editor):

1. Locate the **Editor Type icon** in the top-left corner of the specific area's header
2. Click the icon to open the menu
3. Select the desired Editor from the list

### Building a Custom Workspace for Investigation

For forensic work, the default "Layout" is often insufficient. You may need a dedicated workspace for matching camera angles or viewing reference documents.

#### Step-by-Step: Creating a "Reference Analysis" Workspace

1. **Duplicate a Base**: Right-click the **Layout** tab at the top. Select **Duplicate**
2. **Rename**: Double-click the new tab (e.g., "Layout.001") and rename it to **Reference Analysis**
3. **Split the View**: Split the main 3D Viewport vertically into two equal halves
4. **Assign Editors**:
   - **Left Window**: Change Editor Type to **Image Editor** (for loading police reports, blueprints, or reference photos)
   - **Right Window**: Keep as **3D Viewport** (for reconstruction)
5. **Refine**: Press **`T`** in the Image Editor to hide the Toolbar if more space is needed

### Saving the Workspace

Custom workspaces are saved within the specific `.blend` file. To make a custom workspace available every time you open Blender:

1. Set up your desired workspaces
2. Navigate to **File > Defaults > Save Startup File**
3. Confirm the save

:::warning Important
This overwrites the default startup state. Any geometry or data present in the scene when you save will load every time Blender launches. **Ensure the scene is empty** before saving the startup file.
:::

:::tip Workspace Tips for Visual Investigation
- **Reference Analysis**: Side-by-side Image Editor and 3D Viewport for comparing evidence photos with reconstructions
- **Measurement Station**: Properties panel with measurement tools alongside 3D Viewport
- **Documentation Workspace**: Text Editor for notes alongside rendered output
:::


