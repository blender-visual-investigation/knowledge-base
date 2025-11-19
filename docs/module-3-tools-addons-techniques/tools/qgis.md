---
sidebar_position: 2
---

# QGIS

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
    src="https://www.youtube.com/embed/CKRIjej1nMI"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

## Introduction

This page focuses on how to use QGIS to extract useful maps for our research. Unlike using just Google Earth or Google Maps, QGIS offers access to various kinds of maps from many different sources, making it a versatile tool for geospatial analysis.

This section will cover:
- The advantages of QGIS over standard map viewers.
- Types of data useful for visual investigation.
- How to combine QGIS with other tools like Google Earth Pro.

---

## Key Features

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px'}}>
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#8DF917', padding: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '20px', color: '#333'}}></i>
      <h4 style={{margin: 0, color: '#333'}}>Resources</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Access a wide range of map data sources including OSM and DEMs.</p>
    </div>
  </div>
  
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#1C75BC', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Links</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Download QGIS and find plugins for data extraction.</p>
    </div>
  </div>
</div>

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
