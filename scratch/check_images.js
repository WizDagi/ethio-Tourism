const fs = require('fs');
const path = require('path');

// Basic parser for JPEG/PNG dimensions
function getImageDimensions(filePath) {
    const buffer = fs.readFileSync(filePath);
    const extension = path.extname(filePath).toLowerCase();

    if (extension === '.jpg' || extension === '.jpeg') {
        let i = 0;
        if (buffer[i] !== 0xFF || buffer[i + 1] !== 0xD8) return null;
        i += 2;
        while (i < buffer.length) {
            if (buffer[i] !== 0xFF) return null;
            if (buffer[i + 1] === 0xC0 || buffer[i + 1] === 0xC2) {
                const height = buffer.readUInt16BE(i + 5);
                const width = buffer.readUInt16BE(i + 7);
                return { width, height };
            }
            i += 2 + buffer.readUInt16BE(i);
        }
    }
    return null;
}

const imagesDir = 'c:/Users/brukd/Desktop/tour pro/frontend/public/images/destinations';
const files = fs.readdirSync(imagesDir);

files.forEach(file => {
    const dimensions = getImageDimensions(path.join(imagesDir, file));
    if (dimensions) {
        console.log(`${file}: ${dimensions.width}x${dimensions.height}`);
    } else {
        console.log(`${file}: Unknown dimensions`);
    }
});
