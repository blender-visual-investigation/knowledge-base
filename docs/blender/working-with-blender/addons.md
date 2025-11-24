---
title: "Installing Essential Add-ons"
description: "Learn how to install and manage Blender add-ons and extensions for visual investigation workflows."
sidebar_position: 3
---

# 1.3 : Installing Add-ons & Extensions

Blender 5.0 utilizes a **hybrid system** for extending functionality. Users can install tools from the integrated online **Extensions Platform** or manually install legacy **Add-ons** from local files.

## Method 1: The Extensions Platform (Online)

This is the **modern standard** for installing community and official tools. It functions similarly to an app store directly within Blender.

**Steps:**
1. Navigate to **Edit > Preferences**
2. Select the **Extensions** tab (formerly "Add-ons")
3. Ensure **Allow Online Access** is enabled
4. Use the search bar to find the desired tool (e.g., "Loop Tools")
5. Click **Install** - the tool is automatically downloaded, installed, and enabled

:::info Note
You can also drag and drop an "Install" button from the [extensions.blender.org](https://extensions.blender.org/) website directly into the Blender viewport to trigger installation.
:::

## Method 2: Install from Disk (Legacy/Private)

Visual investigation often requires **specialized tools** (like fSpy importers or proprietary forensic scripts) that are not hosted on the public Extensions platform. These are typically distributed as `.zip` or `.py` files.

**Steps:**
1. Download the add-on `.zip` file (**Do not unzip it**)
2. Navigate to **Edit > Preferences > Extensions**
3. Click the drop-down arrow in the top-right corner
4. Select **Install from Disk...**
5. Locate your `.zip` file and click **Install from Disk**
6. Search for the newly installed add-on in the list and ensure the checkbox is **checked** to enable it

## Method 3: Bundled Core Add-ons

Blender ships with several **powerful utilities** pre-installed but disabled by default (e.g., Node Wrangler, Import-Export formats).

**Steps:**
1. Go to **Edit > Preferences > Extensions**
2. Click the **filter icon** and select **System** or **Bundled**
3. Check the box next to the tool you wish to activate

:::tip Essential Add-ons for Visual Investigation
- **Node Wrangler**: Advanced node-based material creation
- **Import-Export**: Support for additional file formats
- **fSpy Importer**: Camera matching from still images
- **MeasureIt**: Precise measurement tools for forensic analysis
:::






