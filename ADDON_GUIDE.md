# How to Add a New Addon

This guide explains how to add a new addon to the Addon Database.

## 1. Create a New MDX File

Create a new `.mdx` file in the `docs/addons/` directory. The filename should be descriptive (e.g., `my-new-addon.mdx`).

## 2. Add Frontmatter

At the top of your new file, add the following frontmatter. This data is used to populate the Addon Table.

```mdx
---
title: My New Addon
description: A short description of what this addon does.
sidebar_label: My New Addon
slug: /addons/my-new-addon
addon_url: https://example.com/download
price: Free
category: Modeling
tags: [modeling, hard-surface, utility]
---

# My New Addon

Write the detailed documentation for the addon here. You can use standard Markdown and MDX features.

## Features
- Feature 1
- Feature 2

## Installation
1. Download the zip file.
2. Go to Edit > Preferences > Add-ons > Install.
3. Select the zip file.
```

### Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | The name of the addon. |
| `description` | string | A brief summary shown in the table. |
| `sidebar_label` | string | The label used in the sidebar navigation. |
| `slug` | string | The URL path for the addon page. |
| `addon_url` | string | The link to download or view the addon. |
| `price` | string | "Free", "Paid", or specific price (e.g., "$10"). |
| `category` | string | The primary category (e.g., Modeling, UV, Materials). |
| `tags` | array | A list of tags for filtering. |

## 3. Update the Data

The Addon Table is powered by a JSON file generated from the frontmatter. You must regenerate this data for your new addon to appear in the table.

Run the following command in your terminal:

```bash
npm run prebuild
```

Or, if you are starting the development server, it will run automatically:

```bash
npm start
```

## 4. Verify

1. Go to the Addons page (e.g., `http://localhost:3000/addons`).
2. Check if your new addon appears in the table.
3. Click the name to ensure it links to your documentation page.
