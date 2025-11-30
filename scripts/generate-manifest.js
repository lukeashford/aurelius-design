const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_FILE = path.join(ROOT_DIR, 'dist/llms.md');
const PHILOSOPHY_FILE = path.join(ROOT_DIR, 'PHILOSOPHY.md');

// Helper to read file content
const readFile = (relativePath) => fs.readFileSync(path.join(ROOT_DIR, relativePath), 'utf8');

function generateManifest() {
  let output = '';

  // 1. Add Philosophy
  if (fs.existsSync(PHILOSOPHY_FILE)) {
    output += fs.readFileSync(PHILOSOPHY_FILE, 'utf8') + '\n\n';
  } else {
    console.warn('⚠️ PHILOSOPHY.md not found!');
    output += '# Aurelius Design System\n\n';
  }

  // 2. Add Colors
  output += '## Design Tokens: Colors\n\n';
  try {
    const colorsContent = readFile('src/tokens/colors.ts');
    const colorMatches = colorsContent.matchAll(/(\w+):\s*'([^']+)'/g);

    output += '| Token | Hex | Description |\n|---|---|---|\n';
    for (const match of colorMatches) {
      output += `| \`colors.${match[1]}\` | ${match[2]} | |\n`;
    }
    output += '\n';
  } catch (e) {
    console.warn('Could not parse colors', e);
    output += '> Error parsing colors\n\n';
  }

  // 3. Add Components
  output += '## React Components API\n\n';
  try {
    const componentsDir = path.join(ROOT_DIR, 'src/components');
    if (fs.existsSync(componentsDir)) {
      const componentFiles = fs.readdirSync(componentsDir)
      .filter(f => f.endsWith('.tsx') && !f.includes('index'));

      componentFiles.forEach(file => {
        const content = readFile(`src/components/${file}`);
        const name = file.replace('.tsx', '');

        // Extract Props interface
        const propsMatch = content.match(
            /interface\s+(\w+Props)(?:\s+extends[^{]*)?\s*{([^}]+)}/s);

        output += `### <${name} />\n`;
        if (propsMatch) {
          const props = propsMatch[2].split('\n')
          .map(line => line.trim())
          .filter(line => line && !line.startsWith('//') && !line.startsWith('/*'))
          .map(line => `- \`${line}\``)
          .join('\n');
          output += `**Props:**\n${props}\n`;
        }
        output += '\n';
      });
    }
  } catch (e) {
    console.warn('Could not parse components', e);
  }

  // Ensure dist exists
  if (!fs.existsSync(path.join(ROOT_DIR, 'dist'))) {
    fs.mkdirSync(path.join(ROOT_DIR, 'dist'), {recursive: true});
  }

  fs.writeFileSync(OUT_FILE, output);
  console.log(`✅ AI Manifest generated at ${OUT_FILE}`);
}

generateManifest();
