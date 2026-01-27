import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = __dirname;
const publicDir = path.join(projectRoot, 'public');
const assetsDir = path.join(projectRoot, 'src', 'assets');

console.log('Public Dir:', publicDir);

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    console.log('Files in public:', files);

    files.forEach(file => {
        if (file.startsWith('img-carrusel')) {
            const src = path.join(publicDir, file);
            const dest = path.join(assetsDir, file);
            console.log(`Copying ${file} to assets...`);
            fs.copyFileSync(src, dest);
        }
    });
} else {
    console.error('Public directory not found!');
}
