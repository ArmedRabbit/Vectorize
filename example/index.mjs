import { vectorize, ColorMode, Hierarchical, PathSimplifyMode } from '../index.js';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function vectorizeImage(imagePath) {
    try {
        const src = await readFile(imagePath);
        imagePath = imagePath.replace('photo\\', '')

        const config = {
            colorMode: ColorMode.Color,
            colorPrecision: 8,
            filterSpeckle: 4,
            spliceThreshold: 45,
            cornerThreshold: 60,
            hierarchical: Hierarchical.Stacked,
            mode: PathSimplifyMode.Spline,
            layerDifference: 6,
            lengthThreshold: 10000,
            maxIterations: 2,
        };

        const begin = performance.now();
        const result = await vectorize(src, config);
        const end = performance.now();

        console.log(`${imagePath} Vectorization Time: ${(end - begin).toFixed(2)}ms`);

        await writeFile(`./result/${imagePath}.svg`, result);
        console.log(`SVG file saved: ${imagePath}.svg`);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function main() {
    const photoFolder = './photo'; // Replace with your actual photo folder path

    try {
        const files = await readdir(photoFolder);
        files.forEach(async (file) => {
            if(!(file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.bmp'))) {
                console.error(file + 'is not image file.');
            }

            const imagePath = join(photoFolder, file);
            await vectorizeImage(imagePath);
        })
    } catch (error) {
        console.error('Error reading photo folder:', error);
    }
}

main();
