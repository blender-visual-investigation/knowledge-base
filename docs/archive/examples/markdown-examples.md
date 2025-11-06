---
sidebar_position: 1
---

# Markdown Feature Examples

This page demonstrates all the markdown features available in Docusaurus.

## Headers

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

## Text Formatting

**Bold text** or __bold text__

*Italic text* or _italic text_

~~Strikethrough text~~

**_Bold and italic_**

`Inline code`

<u>Underlined text</u>

<mark>Highlighted text</mark>

## Links

[External link](https://docusaurus.io)

[Internal link](./intro.md)

[Link with title](https://docusaurus.io "Docusaurus Homepage")

## Lists

### Unordered List

- First item
- Second item
  - Nested item 1
  - Nested item 2
    - Deeply nested item
- Third item

### Ordered List

1. First item
2. Second item
   1. Nested item 1
   2. Nested item 2
3. Third item

### Task List

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Blockquotes

> This is a blockquote.
> 
> It can span multiple lines.

> Nested blockquotes:
> 
> > This is nested
> > 
> > > And this is even more nested

## Code Blocks

### Basic Code Block

```javascript
function hello() {
  console.log('Hello, world!');
}
```

### With Title

```python title="example.py"
def greet(name):
    print(f"Hello, {name}!")

greet("Docusaurus")
```

### With Line Numbers

```jsx {1,4-6} showLineNumbers
import React from 'react';

function MyComponent() {
  return (
    <div>Hello, World!</div>
  );
}
```

### With Highlighting

```js
function highlightExample() {
  // highlight-next-line
  const important = "This line is highlighted";
  
  // highlight-start
  const block1 = "These lines";
  const block2 = "are highlighted together";
  // highlight-end
  
  return important;
}
```

## Tables

### Basic Table

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Data     | More data |
| Row 2    | Data     | More data |
| Row 3    | Data     | More data |

### Aligned Table

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left         | Center         | Right         |
| Text         | Text           | Text          |
| More         | More           | More          |

### Complex Table

| Feature | Description | Status |
| ------- | ----------- | ------ |
| Tables | Support for tables | ✅ Done |
| Tabs | Support for tabs | ✅ Done |
| Admonitions | Callout boxes | ✅ Done |
| Code blocks | Syntax highlighting | ✅ Done |

## All Admonitions

### Note

:::note
This is a **note** admonition. Use it for general information.
:::

:::note Custom Note Title
You can add a custom title to notes!
:::

### Tip

:::tip
This is a **tip** admonition. Use it for helpful suggestions.
:::

:::tip Pro Tip
Use admonitions to make important information stand out!
:::

### Info

:::info
This is an **info** admonition. Use it for informational content.
:::

:::info Did you know?
Docusaurus supports many different types of admonitions!
:::

### Caution

:::caution
This is a **caution** admonition. Use it for warnings about potential issues.
:::

:::caution Watch out!
Make sure to backup your data before proceeding.
:::

### Danger

:::danger
This is a **danger** admonition. Use it for critical warnings.
:::

:::danger ⚠️ Critical Warning
This action cannot be undone!
:::

### Warning (Same as Caution)

:::warning
This is a **warning** admonition. It's an alias for caution.
:::

### Success (Custom)

:::tip Success
This can be used as a success message! ✅
:::

### Admonitions with Rich Content

:::info Complete Example
Admonitions can contain:

- **Lists** (ordered and unordered)
- `Inline code` and code blocks
- **Bold**, *italic*, and ~~strikethrough~~ text
- [Links](https://docusaurus.io)
- Images and more!

```javascript
const example = "Code blocks work too!";
console.log(example);
```

Even tables:

| Column 1 | Column 2 |
| -------- | -------- |
| Data     | Data     |
:::

### Nested Admonitions

:::note Parent Note
This is the outer admonition.

:::tip Nested Tip
You can nest admonitions inside each other!
:::

Back to the parent note content.
:::

## Tabs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Code Examples in Different Languages

<Tabs>
  <TabItem value="js" label="JavaScript" default>

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

  </TabItem>
  <TabItem value="py" label="Python">

```python
def greet(name):
    print(f"Hello, {name}!")

greet('World')
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
public class Greeting {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static void main(String[] args) {
        greet("World");
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
#include <iostream>
#include <string>

void greet(const std::string& name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    greet("World");
    return 0;
}
```

  </TabItem>
</Tabs>

### Installation Instructions

<Tabs>
  <TabItem value="npm" label="npm">

```bash
npm install docusaurus
```

  </TabItem>
  <TabItem value="yarn" label="Yarn">

```bash
yarn add docusaurus
```

  </TabItem>
  <TabItem value="pnpm" label="pnpm">

```bash
pnpm add docusaurus
```

  </TabItem>
</Tabs>

### Configuration Examples

<Tabs>
  <TabItem value="config" label="Configuration">

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "docusaurus": "^3.0.0"
  }
}
```

  </TabItem>
  <TabItem value="env" label="Environment">

```bash
NODE_ENV=production
PORT=3000
API_URL=https://api.example.com
```

  </TabItem>
  <TabItem value="docker" label="Docker">

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

  </TabItem>
</Tabs>

### Tabs with Mixed Content

<Tabs>
  <TabItem value="preview" label="Preview">

This is a **preview** tab with markdown content.

- Item 1
- Item 2
- Item 3

You can include any markdown here!

  </TabItem>
  <TabItem value="code" label="Code">

```jsx
import React from 'react';

export default function MyComponent() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a React component</p>
    </div>
  );
}
```

  </TabItem>
  <TabItem value="demo" label="Live Demo">

<div style={{
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  border: '2px solid #1976d2'
}}>
  <h3 style={{marginTop: 0}}>Interactive Demo</h3>
  <p>This could be a live demo or interactive example.</p>
  <button style={{
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}>
    Click Me
  </button>
</div>

  </TabItem>
</Tabs>

## Images

### From Static Folder

![Docusaurus Logo](/img/docusaurus.png)

### With Alt Text and Title

![Docusaurus mascot](/img/docusaurus.png "The Docusaurus mascot")

## Horizontal Rule

---

## Details/Summary (Collapsible Sections)

<details>
  <summary>Click to expand - Simple example</summary>
  
  This content is hidden by default and can be expanded by clicking the summary.
  
</details>

<details>
  <summary>Click to expand - Rich content example</summary>
  
  You can include **any markdown** here:
  
  - Lists
  - **Formatted text**
  - `Code`
  
  ```javascript
  const example = "Even code blocks!";
  ```
  
  :::tip
  And even admonitions!
  :::
  
</details>

<details>
  <summary>📋 Nested collapsible sections</summary>
  
  This is the outer collapsible section.
  
  <details>
    <summary>🔍 Inner section 1</summary>
    
    This is nested inside the outer section.
    
  </details>
  
  <details>
    <summary>🔍 Inner section 2</summary>
    
    Another nested section!
    
  </details>
  
</details>

## MDX Components

### Custom Highlight Component

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '5px 10px',
      fontWeight: 'bold',
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> and this is <Highlight color="#1877F2">Facebook blue</Highlight>!

You can also use <Highlight color="#e91e63">pink</Highlight>, <Highlight color="#ff9800">orange</Highlight>, or <Highlight color="#9c27b0">purple</Highlight>!

### Custom Button Component

export const Button = ({children, link, color}) => (
  <a
    href={link}
    style={{
      backgroundColor: color || '#1976d2',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      display: 'inline-block',
      fontWeight: 'bold',
      marginTop: '10px',
      marginRight: '10px',
    }}>
    {children}
  </a>
);

<Button link="https://docusaurus.io">Visit Docusaurus</Button>
<Button link="https://docusaurus.io" color="#25c2a0">Green Button</Button>
<Button link="https://docusaurus.io" color="#e91e63">Pink Button</Button>

### Custom Alert Box

export const AlertBox = ({children, type}) => {
  const colors = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3'
  };
  return (
    <div style={{
      backgroundColor: colors[type] || colors.info,
      color: 'white',
      padding: '15px',
      borderRadius: '5px',
      marginTop: '15px',
      marginBottom: '15px',
    }}>
      {children}
    </div>
  );
};

<AlertBox type="success">✅ This is a success message!</AlertBox>
<AlertBox type="error">❌ This is an error message!</AlertBox>
<AlertBox type="warning">⚠️ This is a warning message!</AlertBox>
<AlertBox type="info">ℹ️ This is an info message!</AlertBox>

## Footnotes

Here's a sentence with a footnote.[^1]

Here's another one with a different footnote.[^2]

You can reference the same footnote multiple times.[^1]

[^1]: This is the first footnote with some explanation.
[^2]: This is the second footnote with more details.

## Emojis

### Common Emojis

:tada: :rocket: :fire: :star: :heart: :+1: :-1: :clap: :eyes: :100:

### Status Emojis

✅ ❌ ⚠️ ℹ️ 🔴 🟢 🟡 🔵

### More Emojis

😀 😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 😉 😊 😇 🥰 😍 🤩 😘 😗 😚 😙

## Keyboard Keys

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Press <kbd>Cmd</kbd> + <kbd>V</kbd> to paste.

Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Delete</kbd> to restart.

Use <kbd>Tab</kbd> for indentation and <kbd>Shift</kbd> + <kbd>Tab</kbd> to unindent.

## Cards and Boxes

### Simple Card

<div style={{
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}}>
  <h3 style={{marginTop: 0}}>Card Title</h3>
  <p>This is a simple card with a title and some content. Cards are great for organizing information.</p>
</div>

### Card with Image

<div style={{
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
}}>
  <img src="/img/docusaurus.png" alt="Docusaurus" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
  <div style={{padding: '20px'}}>
    <h3 style={{marginTop: 0}}>Card with Image</h3>
    <p>This card includes an image at the top with content below. Perfect for feature showcases.</p>
    <a href="https://docusaurus.io" style={{
      color: '#1976d2',
      textDecoration: 'none',
      fontWeight: 'bold'
    }}>Learn More →</a>
  </div>
</div>

### Card with Icon/Image and Text (Horizontal)

<div style={{
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}}>
  <img src="/img/docusaurus.png" alt="Icon" style={{
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    flexShrink: 0
  }} />
  <div>
    <h4 style={{margin: '0 0 8px 0'}}>Horizontal Card Layout</h4>
    <p style={{margin: 0}}>This card has an image on the left and text on the right. Great for listings and summaries.</p>
  </div>
</div>

### Icon Cards Grid

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px'}}>
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s'
  }}>
    <div style={{fontSize: '48px', marginBottom: '10px'}}>🚀</div>
    <h4 style={{margin: '10px 0'}}>Fast Performance</h4>
    <p style={{margin: 0, color: '#666'}}>Lightning-fast page loads and optimized builds.</p>
  </div>
  
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s'
  }}>
    <div style={{fontSize: '48px', marginBottom: '10px'}}>📱</div>
    <h4 style={{margin: '10px 0'}}>Mobile Ready</h4>
    <p style={{margin: 0, color: '#666'}}>Fully responsive on all devices and screen sizes.</p>
  </div>
  
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s'
  }}>
    <div style={{fontSize: '48px', marginBottom: '10px'}}>🎨</div>
    <h4 style={{margin: '10px 0'}}>Customizable</h4>
    <p style={{margin: 0, color: '#666'}}>Easy to customize with themes and plugins.</p>
  </div>
</div>

### Feature Cards with Colored Headers

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px'}}>
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#4caf50', padding: '15px', color: 'white'}}>
      <h4 style={{margin: 0}}>✅ Getting Started</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Quick start guide to get your project up and running in minutes.</p>
    </div>
  </div>
  
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#2196f3', padding: '15px', color: 'white'}}>
      <h4 style={{margin: 0}}>📚 Documentation</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Comprehensive guides and API references for all features.</p>
    </div>
  </div>
  
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#9c27b0', padding: '15px', color: 'white'}}>
      <h4 style={{margin: 0}}>🔌 Plugins</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Extend functionality with our rich ecosystem of plugins.</p>
    </div>
  </div>
</div>

### Callout Box with Image and Text

<div style={{
  display: 'flex',
  gap: '20px',
  backgroundColor: '#f5f5f5',
  padding: '25px',
  borderRadius: '8px',
  borderLeft: '4px solid #1976d2',
  marginBottom: '20px',
  alignItems: 'flex-start'
}}>
  <img src="/img/docusaurus.png" alt="Callout" style={{
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    flexShrink: 0
  }} />
  <div>
    <h3 style={{marginTop: 0, color: '#1976d2'}}>Important Callout</h3>
    <p style={{margin: 0}}>This is a callout box with an image on the left. Use it to highlight important information or features with visual elements.</p>
  </div>
</div>

### Product/Service Cards

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '20px'}}>
  <div style={{
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }}>
    <img src="/img/docusaurus.png" alt="Product" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
    <div style={{padding: '20px'}}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '10px'
      }}>
        NEW
      </div>
      <h3 style={{margin: '10px 0'}}>Product Name</h3>
      <p style={{color: '#666', marginBottom: '15px'}}>Brief description of the product or service being offered.</p>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1976d2'}}>$99</span>
        <button style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Buy Now
        </button>
      </div>
    </div>
  </div>
  
  <div style={{
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }}>
    <img src="/img/docusaurus.png" alt="Product" style={{width: '100%', height: '180px', objectFit: 'cover'}} />
    <div style={{padding: '20px'}}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#ff9800',
        color: 'white',
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '10px'
      }}>
        POPULAR
      </div>
      <h3 style={{margin: '10px 0'}}>Another Product</h3>
      <p style={{color: '#666', marginBottom: '15px'}}>Another great product with amazing features and benefits.</p>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1976d2'}}>$149</span>
        <button style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Buy Now
        </button>
      </div>
    </div>
  </div>
</div>

### Timeline Cards

<div style={{position: 'relative', paddingLeft: '30px', marginBottom: '20px'}}>
  <div style={{
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: '#1976d2'
  }}></div>
  
  <div style={{marginBottom: '30px', position: 'relative'}}>
    <div style={{
      position: 'absolute',
      left: '-34px',
      top: '0',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#1976d2'
    }}></div>
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{margin: '0 0 5px 0', color: '#1976d2'}}>Step 1: Installation</h4>
      <p style={{margin: 0, color: '#666'}}>Install the required packages and dependencies.</p>
    </div>
  </div>
  
  <div style={{marginBottom: '30px', position: 'relative'}}>
    <div style={{
      position: 'absolute',
      left: '-34px',
      top: '0',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#1976d2'
    }}></div>
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{margin: '0 0 5px 0', color: '#1976d2'}}>Step 2: Configuration</h4>
      <p style={{margin: 0, color: '#666'}}>Configure your settings and preferences.</p>
    </div>
  </div>
  
  <div style={{position: 'relative'}}>
    <div style={{
      position: 'absolute',
      left: '-34px',
      top: '0',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#4caf50'
    }}></div>
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{margin: '0 0 5px 0', color: '#4caf50'}}>Step 3: Launch</h4>
      <p style={{margin: 0, color: '#666'}}>Start using your newly configured setup!</p>
    </div>
  </div>
</div>

### Comparison Cards

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px'}}>
  <div style={{
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    padding: '25px',
    textAlign: 'center',
    backgroundColor: 'white'
  }}>
    <h3 style={{margin: '0 0 10px 0'}}>Free</h3>
    <div style={{fontSize: '36px', fontWeight: 'bold', margin: '15px 0'}}>$0</div>
    <p style={{color: '#666', marginBottom: '20px'}}>per month</p>
    <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
      <li style={{padding: '8px 0'}}>✅ Basic features</li>
      <li style={{padding: '8px 0'}}>✅ Community support</li>
      <li style={{padding: '8px 0'}}>❌ Advanced tools</li>
      <li style={{padding: '8px 0'}}>❌ Priority support</li>
    </ul>
  </div>
  
  <div style={{
    border: '3px solid #1976d2',
    borderRadius: '12px',
    padding: '25px',
    textAlign: 'center',
    backgroundColor: '#f0f7ff',
    position: 'relative'
  }}>
    <div style={{
      position: 'absolute',
      top: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#1976d2',
      color: 'white',
      padding: '5px 15px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold'
    }}>
      POPULAR
    </div>
    <h3 style={{margin: '10px 0 10px 0'}}>Pro</h3>
    <div style={{fontSize: '36px', fontWeight: 'bold', margin: '15px 0', color: '#1976d2'}}>$29</div>
    <p style={{color: '#666', marginBottom: '20px'}}>per month</p>
    <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
      <li style={{padding: '8px 0'}}>✅ All basic features</li>
      <li style={{padding: '8px 0'}}>✅ Advanced tools</li>
      <li style={{padding: '8px 0'}}>✅ Priority support</li>
      <li style={{padding: '8px 0'}}>✅ Analytics</li>
    </ul>
  </div>
  
  <div style={{
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    padding: '25px',
    textAlign: 'center',
    backgroundColor: 'white'
  }}>
    <h3 style={{margin: '0 0 10px 0'}}>Enterprise</h3>
    <div style={{fontSize: '36px', fontWeight: 'bold', margin: '15px 0'}}>$99</div>
    <p style={{color: '#666', marginBottom: '20px'}}>per month</p>
    <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
      <li style={{padding: '8px 0'}}>✅ All Pro features</li>
      <li style={{padding: '8px 0'}}>✅ Custom integrations</li>
      <li style={{padding: '8px 0'}}>✅ Dedicated support</li>
      <li style={{padding: '8px 0'}}>✅ SLA guarantee</li>
    </ul>
  </div>
</div>

## Keyboard Keys

Press <kbd>Cmd</kbd> + <kbd>V</kbd> to paste.

Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Delete</kbd> to restart.

Use <kbd>Tab</kbd> for indentation and <kbd>Shift</kbd> + <kbd>Tab</kbd> to unindent.

## HTML Elements

### Custom Styled Boxes

<div style={{backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '10px', marginTop: '20px', marginBottom: '20px'}}>
  <h3 style={{color: '#1976d2', marginTop: 0}}>💡 Custom Info Box</h3>
  <p>This is a custom HTML box with inline styles.</p>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
  </ul>
</div>

<div style={{backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '10px', marginBottom: '20px'}}>
  <h3 style={{color: '#9c27b0', marginTop: 0}}>🎨 Purple Box</h3>
  <p>You can create boxes in any color scheme!</p>
</div>

<div style={{backgroundColor: '#fff3e0', padding: '20px', borderRadius: '10px', marginBottom: '20px'}}>
  <h3 style={{color: '#f57c00', marginTop: 0}}>⚡ Orange Box</h3>
  <p>Perfect for highlighting important information.</p>
</div>

### Grid Layout

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px'}}>
  <div style={{backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
    <h4 style={{color: '#2e7d32', marginTop: 0}}>✅ Feature 1</h4>
    <p>Description of feature 1</p>
  </div>
  <div style={{backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
    <h4 style={{color: '#1565c0', marginTop: 0}}>🚀 Feature 2</h4>
    <p>Description of feature 2</p>
  </div>
  <div style={{backgroundColor: '#fce4ec', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
    <h4 style={{color: '#c2185b', marginTop: 0}}>💖 Feature 3</h4>
    <p>Description of feature 3</p>
  </div>
</div>

## Definition Lists

<dl>
  <dt><strong>Docusaurus</strong></dt>
  <dd>A modern static website generator for building documentation sites.</dd>
  
  <dt><strong>MDX</strong></dt>
  <dd>Markdown with JSX - allows you to use React components in your markdown.</dd>
  
  <dt><strong>React</strong></dt>
  <dd>A JavaScript library for building user interfaces.</dd>
</dl>

## Progress Bars

<div style={{marginTop: '20px', marginBottom: '20px'}}>
  <div style={{marginBottom: '15px'}}>
    <span style={{fontWeight: 'bold'}}>Progress: 75%</span>
    <div style={{width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '10px', marginTop: '5px'}}>
      <div style={{width: '75%', height: '100%', backgroundColor: '#4caf50', borderRadius: '10px'}}></div>
    </div>
  </div>
  
  <div style={{marginBottom: '15px'}}>
    <span style={{fontWeight: 'bold'}}>Loading: 50%</span>
    <div style={{width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '10px', marginTop: '5px'}}>
      <div style={{width: '50%', height: '100%', backgroundColor: '#2196f3', borderRadius: '10px'}}></div>
    </div>
  </div>
  
  <div>
    <span style={{fontWeight: 'bold'}}>Completion: 90%</span>
    <div style={{width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '10px', marginTop: '5px'}}>
      <div style={{width: '90%', height: '100%', backgroundColor: '#9c27b0', borderRadius: '10px'}}></div>
    </div>
  </div>
</div>

## Badges

<div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px', marginBottom: '20px'}}>
  <span style={{backgroundColor: '#4caf50', color: 'white', padding: '5px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>NEW</span>
  <span style={{backgroundColor: '#2196f3', color: 'white', padding: '5px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>UPDATED</span>
  <span style={{backgroundColor: '#ff9800', color: 'white', padding: '5px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BETA</span>
  <span style={{backgroundColor: '#f44336', color: 'white', padding: '5px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>DEPRECATED</span>
  <span style={{backgroundColor: '#9c27b0', color: 'white', padding: '5px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>PREMIUM</span>
</div>

---

**That's all the features!** Feel free to copy and modify any of these examples for your documentation.
