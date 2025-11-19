---
sidebar_position: 0
---

# Template Pages

Browse our collection of ready-to-use page templates for your documentation.

---

## Available Templates

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px', marginBottom: '30px'}}>
  <a href="./page-template" style={{textDecoration: 'none', color: 'inherit'}}>
    <div style={{
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      height: '100%',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }}>
      <div style={{backgroundColor: '#1C75BC', padding: '20px', color: 'white'}}>
        <h3 style={{margin: 0, fontSize: '20px'}}>📄 Standard Template</h3>
      </div>
      <div style={{padding: '20px'}}>
        <p style={{margin: '0 0 15px 0', color: '#666'}}>
          Complete page template with video embed, feature cards, and structured sections.
        </p>
        <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
          <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold'}}>VIDEO</span>
          <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold'}}>FEATURES</span>
          <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold'}}>BADGES</span>
        </div>
      </div>
    </div>
  </a>
  
  {/* Placeholder for future templates */}
  <div style={{
    border: '2px dashed #ccc',
    borderRadius: '12px',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#999'
  }}>
    <div style={{fontSize: '48px', marginBottom: '15px'}}>➕</div>
    <h4 style={{margin: '0 0 10px 0', color: '#666'}}>More Templates Coming Soon</h4>
    <p style={{margin: 0, fontSize: '14px'}}>Additional page templates will be added here</p>
  </div>
</div>

---

## How to Use Templates

1. **Choose a template** from the cards above
2. **Copy the markdown** from the template page
3. **Create a new file** in your docs folder
4. **Customize** the content to fit your needs
5. **Save and preview** your new page

## Template Features

All templates include:
- ✅ Responsive design that works on all devices
- 🎨 Customizable colors and styling
- 📱 Mobile-friendly layouts
- 🚀 Optimized for Docusaurus
- 📝 Easy to edit markdown format
