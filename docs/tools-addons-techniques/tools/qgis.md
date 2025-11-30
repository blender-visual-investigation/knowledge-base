---
sidebar_position: 2
---

# QGIS
---
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
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
    src="https://www.youtube.com/embed/SovdBaus7pM"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

## Introduction

QGIS is an open-source Geographic Information System (GIS) toolkit, meaning it's free to download, use, and modify. It provides a full spectrum of tools for spatial analysis, map production, and data management, accommodating both introductory users and advanced use cases, including scripting with Python and integration with databases like PostGIS. For visual investigation, QGIS is essential because it allows you to overlay and analyze diverse geographic data (points, lines, polygons, and raster data like elevation models) to uncover spatial relationships, calculate metrics (like squirrel counts near playgrounds), and visualize complex topology.

Furthermore, the BlenderGIS import add-on (found in Blender's add-ons folder, though the transcript references a similar tool in a different context) facilitates easy data transfer, allowing you to move finalized 2D/3D spatial data processed in QGIS directly into Blender for high-fidelity 3D visualization and rendering.

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

## Key Features

<FeatureCardGrid>
  <FeatureCard 
    title="Resources" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-book"
  >
    <p style={{margin: 0}}>Access a wide range of map data sources including OSM and DEMs.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Links" 
    headerColor="#1C75BC"
    icon="fa-solid fa-link"
  >
    <p style={{margin: 0}}>Download QGIS and find plugins for data extraction.</p>
  </FeatureCard>

  <FeatureCard 
    title="Videos" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-play"
  >
    <p style={{margin: 0}}>Introductory tutorials and quick walkthroughs for common tasks in QGIS.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## QGIS Basics: Detailed Overview

### 1. The QGIS Interface 🧭

Upon opening a new project, the interface is divided into key components:

- **Map Canvas**: The main white area where the map and data layers are displayed.

- **Layers List**: Located in the lower-left corner, it lists all active data layers. You can control visibility, ordering (drag-and-drop), and access layer-specific properties.

- **Browser Panel (File Browser)**: Typically upper-left, this provides access to all available data sources, including local files, favorites folders, GeoPackages, PostGIS databases, and various web mapping services (WMS/XYZ tiles).

- **Toolbar**: Located at the top, it holds preset file options (New, Open, Save), navigation (Zoom, Pan), feature identification, and geometry creation tools. This toolbar is customizable.

- **Processing Toolbox**: Located on the right, this is the core of spatial analysis. It contains hundreds of processing algorithms for vector, raster, and database operations.

### 2. Working with Data Layers

#### Adding Vector Layers (Points, Lines, Polygons)

- **Source Data**: Obtain geospatial data in formats like GeoJSON (recommended for simplicity, as it's a single file) or Shapefile. Data is often found in open data portals (e.g., NYC Open Data).

- **Import**: Drag the data file from the Browser Panel directly into the Layers List to add it to the map.

- **Identify Features**: Click the Identify Features tool (the "eye" icon) to click on any geometry and view its associated tabular data (attributes).

#### Adding a Basemap

- **Install Plugin**: Go to Plugins > Manage and Install Plugins.

- Search for and install the **Quick Map Services** plugin (one of the most popular).

- **Add Basemap**: Use the plugin to add a contextual background map, such as OpenStreetMap Standard, to the map canvas.

#### Handling Projections (CRS)

- **Issue**: Web maps often use Web Mercator (EPSG: 3857), but imported data might default to a different system (like EPSG: 4326), causing funkiness and inaccurate calculations.

- **Change Project CRS**: Click the projection status bar at the bottom-right, or go to Project > Properties > CRS.

- Select the desired projection (e.g., EPSG: 3857 for web accuracy) and apply it to the entire project.

#### Styling and Symbology

Style is controlled by double-clicking the layer in the Layers List and selecting the Symbology tab.

- **Categorical Styling**: Styles layers based on a text or categorical field (e.g., using squirrel fur color to determine point color). Use the Categorized renderer and click Classify to generate a legend.

- **Graduated Styling**: Styles layers based on a numeric field (e.g., tree diameter). Use the Graduated renderer and choose a Color Ramp and a Mode (like Natural Breaks) to classify the data.

  - **Styling by Size**: Instead of color, you can change the styling to size, where the size of the symbol is proportional to the numeric value (e.g., larger tree diameter results in a larger point).

- **Labeling**: In the Labels tab, choose Single Labels, select the field to display (e.g., status), and customize the font and appearance.

#### Geometry Editing and Creation

- **Toggle Editing**: Select the layer and click the Toggle Editing button (pencil icon) in the toolbar.

- **Adjusting Geometry**: Right-click on an editable feature to view its vertices (corner points). You can drag vertices to adjust boundaries or right-click to add new vertices.

- **Adding New Features**: Click the Add Polygon/Point Feature button, draw the geometry on the map, and then right-click to finish. A dialog box will prompt you to enter the attribute data (like name or ID) for the new feature.

### 3. Spatial Analysis and Processing 

The Processing Toolbox contains the analysis tools.

- **Buffering**: Creating a buffer (area around a feature) is often the first step in proximity analysis. Select a vector layer (e.g., Play Areas) and specify a distance (e.g., 200 meters).

- **Vector Analysis (Count Points in Polygon)**: To answer questions like "How many squirrels are near a play area?", you run the Count Points in Polygon tool, using the Buffer layer as the polygon input and the Squirrels layer as the point input.

- **Raster Analysis (DEM)**: Using Digital Elevation Models (DEMs) allows for terrain analysis.

  - **Clip Raster**: Use Clip Raster by Mask Layer to extract only the area of interest (e.g., Central Park) from a larger DEM file.

  - **Hillshade**: Use the Hillshade tool (under Raster Terrain Analysis) on the clipped DEM to visualize the terrain's shaded relief, enhancing visual understanding of elevation changes and topology.

  - **Contour Lines**: Use the Contour tool to generate vector contour lines from the DEM, representing lines of equal elevation.

- **Network Analysis (Shortest Path)**: Allows calculation of routes (shortest or fastest) across a network layer (e.g., streets or bike paths).

  - Create a network layer (e.g., Bike Routes).

  - Use the Shortest Path (Point to Layer) tool.

  - Define the Network Layer (Bike Routes) and the Ending Points (Bike Points layer).

  - Click the map to define the single Starting Point.

  - The tool calculates and displays the optimal path for each destination.

- **Model Builder**: A visual environment that allows you to chain multiple analysis steps (e.g., Buffer, then Count Points, then Style) into a repeatable workflow model that can be saved and reused.

### 4. Plugins and Output

- **Plugins**: Are extensions that significantly increase QGIS functionality (e.g., Quick Map Services). They are managed under Plugins > Manage and Install Plugins.

- **Print Layout**: The Print Layout feature (accessible via a dedicated button or Project > New Print Layout) is used to prepare maps for print or digital export. You can add the map, a legend, a scale bar, and a north arrow, and export the result as an image or PDF.

- **Web Map Export**: Plugins like QGIS2Web can export your map project as a fully functioning, interactive web map (using Leaflet or OpenLayers) ready for online sharing, including clusters and pop-up data.

---

## Main Content Section

### Why QGIS?

QGIS allows you to aggregate map data from various sources, going beyond the limitations of single-platform viewers like Google Maps. While it is currently unclear how to determine exactly when satellite data was taken within QGIS itself, the variety of available data layers makes it indispensable.

### Useful Data Types

#### OSM Road & Building Maps
OpenStreetMap (OSM) data provides vector layers for roads and buildings. Although sometimes lacking in fine detail, these maps offer a solid foundation when recreating a map or location in 3D.

#### Digital Elevation Models (DEM)
DEMs provide elevation data, allowing you to visualize terrain topography accurately. This is crucial for understanding the landscape of an investigation site.

#### Open Street Maps Features
Beyond roads and buildings, OSM data can also include information on trees, waterways, and other land use features, helping to populate your scene with relevant details.

---

## Summary

The combination of Google Earth Pro and QGIS is powerful. By leveraging QGIS to gather diverse datasets—from roads and buildings to terrain elevation—you can build a comprehensive base for your visual investigations.
