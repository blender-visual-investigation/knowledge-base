# GitHub Pages Deployment Guide

## Setup Steps

### 1. Update docusaurus.config.js

Before deploying, update these values in `docusaurus.config.js`:

```javascript
url: 'https://YOUR-USERNAME.github.io',
baseUrl: '/YOUR-REPO-NAME/',
organizationName: 'YOUR-USERNAME', // Your GitHub username
projectName: 'YOUR-REPO-NAME', // Your repository name
```

**Example:**
- If your GitHub username is `johndoe`
- And your repo is named `bvi-docs`
- Then:
  - `url: 'https://johndoe.github.io'`
  - `baseUrl: '/bvi-docs/'`
  - `organizationName: 'johndoe'`
  - `projectName: 'bvi-docs'`

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "bvi-docs")
3. Don't initialize with README (you already have files)

### 3. Initialize Git and Push

Open terminal in the `edudoc-site` folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow will automatically run on every push to `main`

### 5. Wait for Deployment

- Go to the **Actions** tab in your repo
- Watch the deployment workflow run
- Once completed, your site will be live at:
  `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Making Updates

After initial setup, to update your site:

```bash
# Make your changes to docs/files
git add .
git commit -m "Update documentation"
git push
```

The site will automatically rebuild and deploy!

## Alternative: Manual Deployment

If you prefer manual deployment instead of GitHub Actions:

```bash
npm run deploy
```

This requires:
- Setting `GIT_USER` environment variable
- Or use: `GIT_USER=YOUR-USERNAME npm run deploy`

## Troubleshooting

**Build fails?**
- Check the Actions tab for error details
- Make sure all dependencies are in package.json
- Test locally with `npm run build`

**Site shows 404?**
- Check baseUrl matches your repo name
- Make sure GitHub Pages is enabled
- Wait a few minutes for propagation

**Images/assets missing?**
- Verify they're in the `static` folder
- Check paths use `/img/` not `./img/`
- Rebuild with `npm run build`
