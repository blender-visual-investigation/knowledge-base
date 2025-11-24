---
id: intro-to-blender-doc
title: "Introduction & Setup"
description: "Getting started with the Blender interface and basic navigation. This is the perfect entry point for new users."
sidebar_position: 1
---

# 1.2 : Introduction & Setup

Getting started with the Blender interface and basic navigation for visual investigation workflows.

## Installing Blender

There are two primary methods for installing Blender. For **visual investigation work**, **Method 2** is strongly recommended.

### Method 1: Standard Installation

1. Download the latest stable release from [blender.org](https://www.blender.org/download/)
2. Choose your operating system
3. Install following the standard procedure

### Method 2: Blender Launcher (Recommended)

For **professional workflows**, use **Blender Launcher V2**.

**Download:** [GitHub - Victor-IX/Blender-Launcher-V2](https://github.com/Victor-IX/Blender-Launcher-V2)

**Why use it?** Blender is community-driven and evolves rapidly. Consequently, specific add-ons or forensic tools may only function on older, stable versions (e.g., Blender 3.6 LTS) and break in newer releases (e.g., Blender 4.2).

**Benefit:** Blender Launcher allows you to install, manage, and launch multiple versions of Blender side-by-side without conflict. This ensures you can always match the software version to the specific requirements of your tools or legacy case files.

## System Requirements

Visual investigation often involves handling **large datasets** (point clouds, photogrammetry) and heavy rendering. The following specifications are recommended for a smooth workflow.

### Minimum Requirements

- **OS:** Windows 10/11, macOS 11.0+, or Linux
- **CPU:** 64-bit quad core CPU with SSE2 support
- **RAM:** 8 GB
- **GPU:** Graphics card with 2 GB RAM, OpenGL 4.3
- **Display:** 1920×1080

### Recommended (Forensic/Investigation Work)

- **CPU:** 64-bit 8-core CPU (Intel i7/i9 or AMD Ryzen 7/9)
- **RAM:** 32 GB or higher *(Crucial for photogrammetry and large scenes)*
- **GPU:** 8 GB VRAM or higher *(NVIDIA RTX series recommended for CUDA/OptiX acceleration)*

:::info Performance Notes
For optimal performance with large forensic datasets:
- **RAM** is often the most critical factor for photogrammetry workflows
- **GPU** acceleration significantly speeds up rendering and viewport performance
- Consider workstation-grade hardware for professional visual investigation work
:::

## Peripherals

Blender is designed around a **specific input workflow**. Lacking these peripherals will significantly hinder navigation and efficiency.

### 1. Three-Button Mouse

A mouse with a **clickable scroll wheel** is **mandatory**.

- **Left Click:** Select/Confirm
- **Right Click:** Context Menu/Cancel
- **Middle Click (Scroll Wheel):** Orbit Viewport *(Essential for 3D navigation)*

### 2. Keyboard with Numpad

The **Number Pad** is hard-coded into Blender for precise view switching and camera control.

- **`Numpad 1, 3, 7`:** Front, Right, and Top orthographic views
- **`Numpad 5`:** Toggle Perspective/Orthographic

:::warning Important Recommendation
If using a laptop or Tenkeyless (TKL) keyboard, **purchase a separate USB Numpad**. While "Emulate Numpad" exists in settings, it conflicts with other standard modeling shortcuts and is not recommended for professional work.
:::

:::tip Getting Started Checklist
- ✅ Download and install Blender Launcher
- ✅ Verify system meets recommended requirements
- ✅ Acquire three-button mouse and numpad
- ✅ Launch Blender and explore the interface
- ✅ Complete the first steps tutorial
:::
