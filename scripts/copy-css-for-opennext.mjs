// Post-build script to copy CSS files for OpenNext Cloudflare compatibility
// Next.js 16 with Turbopack puts CSS in .next/static/chunks/ instead of .next/static/css/
import fs from 'fs';
import path from 'path';

const standaloneStaticDir = path.join(process.cwd(), '.next', 'standalone', '.next', 'static');
const sourceStaticDir = path.join(process.cwd(), '.next', 'static');

// Create css directory in standalone
const cssDir = path.join(standaloneStaticDir, 'css');
if (!fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

// Copy CSS files from chunks to css directory
const chunksDir = path.join(sourceStaticDir, 'chunks');
if (fs.existsSync(chunksDir)) {
  const files = fs.readdirSync(chunksDir);
  for (const file of files) {
    if (file.endsWith('.css')) {
      fs.copyFileSync(
        path.join(chunksDir, file),
        path.join(cssDir, file)
      );
      console.log(`Copied ${file} to .next/standalone/.next/static/css/`);
    }
  }
}

// Copy media directory
const mediaDir = path.join(sourceStaticDir, 'media');
const standaloneMediaDir = path.join(standaloneStaticDir, 'media');
if (fs.existsSync(mediaDir) && !fs.existsSync(standaloneMediaDir)) {
  fs.cpSync(mediaDir, standaloneMediaDir, { recursive: true });
  console.log('Copied media directory');
}

// Copy the hash directory (contains _buildManifest.js, etc.)
const entries = fs.readdirSync(sourceStaticDir);
for (const entry of entries) {
  if (entry !== 'chunks' && entry !== 'media') {
    const srcPath = path.join(sourceStaticDir, entry);
    const destPath = path.join(standaloneStaticDir, entry);
    if (fs.statSync(srcPath).isDirectory() && !fs.existsSync(destPath)) {
      fs.cpSync(srcPath, destPath, { recursive: true });
      console.log(`Copied ${entry} directory`);
    }
  }
}

console.log('CSS fix completed!');