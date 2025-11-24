---
title: "Shortcuts"
description: Master Blender's keyboard shortcuts for efficient workflow.
sidebar_position: 5
---

# Shortcuts

## Before we begin
- **Learn incrementally**: Don't try to memorize everything at once. Focus on navigation first, then selection, then editing.
- **Use search**: Press F3 to search for any command if you forget the shortcut.
- **Practice regularly**: Muscle memory develops with consistent use.
- **Customize when needed**: If a shortcut conflicts with your workflow, change it in preferences.
- **Do not be discouraged** Embrace the frustration of the first few days. The time invested in building muscle memory pays off in a workflow that is significantly faster, more fluid, and more precise than any click-based interface.

## The "Piano Player" Interface

Blender is unique among 3D software in that it is designed primarily for speed and muscle memory. While most applications rely on clicking icons and navigating nested menus, Blender relies heavily on keyboard shortcuts. For new users, this approach can be maddening. It often feels less like learning software and more like learning to play an instrument. You keep one hand on the mouse and the other permanently hovering over the keyboard. This "hidden" interface is the primary reason for Blender's reputation as having a steep learning curve. You may find yourself staring at the screen, knowing exactly what you want to do, but not knowing the specific keystroke required to make it happen. However, once you overcome the initial hurdle, the logic becomes clear: shortcuts remove the friction between thought and action. It is important to realize that this depth is vast. Even after a decade of using Blender, I still discover new shortcuts. This seems to be a widely shared sentiment across the community. Hopefuly that will sooth your frustration a bit. You are not expected to know everything immediately; the learning process is continuous.

### How It Helps
- Efficiency: In a standard interface, to move an object, you might move your mouse to a toolbar, click the "Move" icon, move your mouse back to the object, and then drag. In Blender, you simply hover over the object, tap G, and move it. Over thousands of operations, this saves hours of work.

- Flow State: By separating tool selection (Left Hand/Keyboard) from spatial manipulation (Right Hand/Mouse), you rarely have to look away from your model to find a button. This allows you to stay in a "flow state," modeling as fast as you can think.

## Shortcuts Basics

### Essential "Survival" Shortcuts

Blender's shortcuts are often mnemonic, meaning they correspond to the first letter of the action name. To survive your first hour, you only need these core keys:

#### **Transformation**
- **`G`** = Grab (Move)
- **`R`** = Rotate
- **`S`** = Scale

#### **Constraint**
- **`X`**, **`Y`**, **`Z`** = Pressing these after a transformation locks the movement to that specific axis (e.g., pressing `G` then `Z` moves the object only up and down).

#### **Interface**
- **`Tab`** = Toggle between Object Mode and Edit Mode
- **`Shift + A`** = Add new object
- **`Z`** = Open the Shading Pie Menu (Wireframe, Solid, Rendered)

#### **The "Panic Button" (F3)**
If you cannot find a tool or forget a shortcut, you do not need to dig through menus.

Press **`F3`**: This opens the universal Search bar. Type what you want to do (e.g., "Bridge Edge Loops" or "Smart UV Project"). Blender will execute the command and often display the shortcut next to the name so you can learn it for next time.

### Your Personal Shortcut: The "Q" Menu

If you find yourself constantly using a specific tool that doesn't have an easy shortcut, you can add it to your Quick Favorites.

How to Add: Right-click on any button or menu item in the interface and select Add to Quick Favorites.

How to Use: Press Q. A small menu will appear at your cursor containing only the tools you have added.

Context Sensitivity: This menu is context-aware. If you add a tool while in Object Mode, it will only appear in the Q menu when you are in Object Mode. You can build a completely different Q menu for Edit Mode, Sculpt Mode, etc.


### Customizing Shortcuts

To modify or add shortcuts:

1. Navigate to **Edit > Preferences**
2. Select the **Keymap** tab
3. Search for the command you want to modify
4. Click on the shortcut field and press your desired key combination
5. Click **Save Preferences**



## The Extensive List

<details>
<summary>Navigation Shortcuts</summary>

### Viewport Navigation
- **Middle Mouse Button**: Orbit view
- **Shift + Middle Mouse**: Pan view
- **Ctrl + Middle Mouse**: Zoom view
- **Numpad 1, 3, 7**: Front, Right, Top orthographic views
- **Numpad 5**: Toggle Perspective/Orthographic
- **Numpad 0**: Camera view
- **Home**: Frame all objects in view
- **Numpad .**: Frame selected objects

</details>

<details>
<summary>Object Mode Shortcuts</summary>

- **Tab**: Toggle Edit/Object mode
- **A**: Select/Deselect all
- **Shift + A**: Add new object
- **G**: Grab/Move
- **R**: Rotate
- **S**: Scale
- **X/Y/Z**: Constrain to axis
- **Shift + D**: Duplicate
- **Delete**: Delete selected

</details>

<details>
<summary>Edit Mode Shortcuts</summary>

### Selection
- **A**: Select/Deselect all
- **B**: Box select
- **C**: Circle select
- **L**: Select linked
- **Ctrl + L**: Select linked (all mesh elements)

### Mesh Editing
- **Tab**: Toggle Edit/Object mode
- **E**: Extrude
- **F**: Fill/Create face
- **I**: Inset
- **K**: Knife tool
- **Alt + M**: Merge vertices
- **Ctrl + R**: Loop cut
- **Shift + Alt + S**: Shrink/Fatten

</details>

<details>
<summary>General Shortcuts</summary>

### File Operations
- **Ctrl + N**: New file
- **Ctrl + O**: Open file
- **Ctrl + S**: Save file
- **Ctrl + Shift + S**: Save as

### Interface
- **T**: Toggle Toolbar
- **N**: Toggle Sidebar
- **F3**: Search menu
- **F2**: Rename active item
- **Ctrl + Space**: Maximize area
- **Ctrl + Alt + Space**: Toggle fullscreen

### Transform
- **G**: Grab/Move
- **R**: Rotate
- **S**: Scale
- **Shift + X/Y/Z**: Exclude axis from transform
- **Ctrl**: Snap during transform
- **Shift**: Precise transform (slow)

</details>

<details>
<summary>Investigation-Specific Shortcuts</summary>

### Measurement & Analysis
- **Shift + S**: Snap cursor menu
- **Shift + C**: Center cursor and view all
- **Alt + Z**: Toggle wireframe/textured view
- **Z**: Toggle viewport shading modes

### Camera Matching
- **Numpad 0**: Camera view
- **Ctrl + Alt + Numpad 0**: Set active camera
- **Ctrl + Shift + Numpad 0**: Add camera from view

</details>

