---
sidebar_position: 3
---

import React from 'react';

# MDX Examples

MDX lets you use JSX in your markdown content. You can import components, such as interactive charts or alerts, and embed them within your content.

---

## Importing Components

You can import React components and use them directly in your markdown:

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
</Tabs>
```

**Result:**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
</Tabs>

---

## Inline JSX

You can use JSX directly in your content:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '0.2rem 0.5rem',
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1976d2">custom blue</Highlight> !
```

**Result:**

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '0.2rem 0.5rem',
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1976d2">custom blue</Highlight> !

---

## Interactive Buttons

Create interactive elements with onClick handlers:

```jsx
export const ButtonExample = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{padding: '20px', border: '2px solid #1976d2', borderRadius: '8px', textAlign: 'center'}}>
      <p>You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
        Click me
      </button>
    </div>
  );
};

<ButtonExample />
```

**Result:**

export const ButtonExample = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{padding: '20px', border: '2px solid #1976d2', borderRadius: '8px', textAlign: 'center'}}>
      <p>You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
        Click me
      </button>
    </div>
  );
};

<ButtonExample />

---

## Custom Card Component

Build reusable components:

```jsx
export const Card = ({title, children, color = '#f0f0f0'}) => (
  <div style={{
    backgroundColor: color,
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }}>
    <h3 style={{marginTop: 0, color: '#333'}}>{title}</h3>
    <div>{children}</div>
  </div>
);

<Card title="Information" color="#e3f2fd">
  This is a custom card component with a light blue background.
</Card>

<Card title="Warning" color="#fff3e0">
  This card has an orange tint for warnings.
</Card>
```

**Result:**

export const Card = ({title, children, color = '#f0f0f0'}) => (
  <div style={{
    backgroundColor: color,
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }}>
    <h3 style={{marginTop: 0, color: '#333'}}>{title}</h3>
    <div>{children}</div>
  </div>
);

<Card title="Information" color="#e3f2fd">
  This is a custom card component with a light blue background.
</Card>

<Card title="Warning" color="#fff3e0">
  This card has an orange tint for warnings.
</Card>

---

## Progress Bar

Create visual indicators:

```jsx
export const ProgressBar = ({progress, label}) => (
  <div style={{marginBottom: '20px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
      <span style={{fontWeight: 'bold'}}>{label}</span>
      <span>{progress}%</span>
    </div>
    <div style={{
      backgroundColor: '#e0e0e0',
      borderRadius: '10px',
      height: '20px',
      overflow: 'hidden'
    }}>
      <div style={{
        backgroundColor: '#4caf50',
        width: `${progress}%`,
        height: '100%',
        transition: 'width 0.3s ease'
      }}></div>
    </div>
  </div>
);

<ProgressBar progress={75} label="Modeling" />
<ProgressBar progress={50} label="Texturing" />
<ProgressBar progress={90} label="Lighting" />
```

**Result:**

export const ProgressBar = ({progress, label}) => (
  <div style={{marginBottom: '20px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
      <span style={{fontWeight: 'bold'}}>{label}</span>
      <span>{progress}%</span>
    </div>
    <div style={{
      backgroundColor: '#e0e0e0',
      borderRadius: '10px',
      height: '20px',
      overflow: 'hidden'
    }}>
      <div style={{
        backgroundColor: '#4caf50',
        width: `${progress}%`,
        height: '100%',
        transition: 'width 0.3s ease'
      }}></div>
    </div>
  </div>
);

<ProgressBar progress={75} label="Modeling" />
<ProgressBar progress={50} label="Texturing" />
<ProgressBar progress={90} label="Lighting" />

---

## Toggle Component

Show/hide content interactively:

```jsx
export const Toggle = ({children, defaultShow = false}) => {
  const [show, setShow] = React.useState(defaultShow);
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '20px'
    }}>
      <button 
        onClick={() => setShow(!show)}
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: show ? '15px' : '0'
        }}>
        {show ? '▼ Hide' : '► Show'} Details
      </button>
      {show && <div>{children}</div>}
    </div>
  );
};

<Toggle>
  <h4>Hidden Content</h4>
  <p>This content is only visible when you click the button!</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</Toggle>
```

**Result:**

export const Toggle = ({children, defaultShow = false}) => {
  const [show, setShow] = React.useState(defaultShow);
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '20px'
    }}>
      <button 
        onClick={() => setShow(!show)}
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: show ? '15px' : '0'
        }}>
        {show ? '▼ Hide' : '► Show'} Details
      </button>
      {show && <div>{children}</div>}
    </div>
  );
};

<Toggle>
  <h4>Hidden Content</h4>
  <p>This content is only visible when you click the button!</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</Toggle>

---

## Comparison Slider

Create before/after comparisons:

```jsx
export const ComparisonSlider = () => {
  const [position, setPosition] = React.useState(50);
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto',
      border: '2px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: '10px'
      }}>
        <span style={{fontWeight: 'bold', color: '#e53935'}}>Before</span>
        <span style={{fontWeight: 'bold', color: '#43a047'}}>After</span>
      </div>
      <div style={{height: '200px', position: 'relative', backgroundColor: '#ffebee'}}>
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: `${100 - position}%`,
          height: '100%',
          backgroundColor: '#e8f5e9'
        }}></div>
        <div style={{
          position: 'absolute',
          left: `${position}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '4px',
          height: '100%',
          backgroundColor: '#333',
          cursor: 'ew-resize'
        }}></div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={{width: '100%', margin: '10px 0'}}
      />
    </div>
  );
};

<ComparisonSlider />
```

**Result:**

export const ComparisonSlider = () => {
  const [position, setPosition] = React.useState(50);
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto',
      border: '2px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: '10px'
      }}>
        <span style={{fontWeight: 'bold', color: '#e53935'}}>Before</span>
        <span style={{fontWeight: 'bold', color: '#43a047'}}>After</span>
      </div>
      <div style={{height: '200px', position: 'relative', backgroundColor: '#ffebee'}}>
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: `${100 - position}%`,
          height: '100%',
          backgroundColor: '#e8f5e9'
        }}></div>
        <div style={{
          position: 'absolute',
          left: `${position}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '4px',
          height: '100%',
          backgroundColor: '#333',
          cursor: 'ew-resize'
        }}></div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={{width: '100%', margin: '10px 0'}}
      />
    </div>
  );
};

<ComparisonSlider />

---

## Mixing Markdown and JSX

You can freely mix markdown syntax with JSX:

```jsx
export const FeatureList = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    margin: '20px 0'
  }}>
    {['🎨 Modeling', '💡 Lighting', '🎬 Animation', '📸 Rendering'].map((feature, i) => (
      <div key={i} style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        {feature}
      </div>
    ))}
  </div>
);

## Blender Features

<FeatureList />

These are the core features you'll learn in this knowledge base!
```

**Result:**

export const FeatureList = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    margin: '20px 0'
  }}>
    {['🎨 Modeling', '💡 Lighting', '🎬 Animation', '📸 Rendering'].map((feature, i) => (
      <div key={i} style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        {feature}
      </div>
    ))}
  </div>
);

## Blender Features

<FeatureList />

These are the core features you'll learn in this knowledge base!

---

## Variables and Expressions

Use JavaScript variables and expressions:

```jsx
export const projectName = 'Blender for Visual Investigation';
export const currentYear = new Date().getFullYear();

Welcome to **{projectName}**!

Copyright © {currentYear} - All rights reserved.

Math works too: 2 + 2 = {2 + 2}
```

**Result:**

export const projectName = 'Blender for Visual Investigation';
export const currentYear = new Date().getFullYear();

Welcome to **{projectName}**!

Copyright © {currentYear} - All rights reserved.

Math works too: 2 + 2 = {2 + 2}

---

## Tips for Using MDX

:::tip Best Practices
- Keep components simple and reusable
- Export components at the top of the file for clarity
- Use inline styles or CSS modules for styling
- Test interactive components thoroughly
- Consider mobile responsiveness
:::

:::warning Important
- MDX components must use valid JSX syntax
- Remember to close all tags
- Use `className` instead of `class`
- Use camelCase for CSS properties (backgroundColor, not background-color)
:::

---

## Learn More

- [MDX Documentation](https://mdxjs.com/)
- [Docusaurus MDX Guide](https://docusaurus.io/docs/markdown-features/react)
- [React Documentation](https://react.dev/)
