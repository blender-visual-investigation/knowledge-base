const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const addonsDir = path.join(__dirname, '../docs/tools-addons-techniques/addons');
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'addons.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getAddonData() {
  const files = fs.readdirSync(addonsDir);
  const addons = files
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .filter(file => file !== 'index.mdx') // Exclude the index page itself
    .map(file => {
      const filePath = path.join(addonsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      
      // Add the slug/path for linking
      // Assuming default Docusaurus routing: /docs/addons/{id} or filename
      const slug = data.id || file.replace(/\.mdx?$/, '');
      
      return {
        ...data,
        slug: `/knowledge-base/docs/tools-addons-techniques/addons/${slug}`, // Adjust base URL if needed
        fileName: file
      };
    });
  
  return addons;
}

const addons = getAddonData();
fs.writeFileSync(outputFile, JSON.stringify(addons, null, 2));

console.log(`Generated data for ${addons.length} addons at ${outputFile}`);
