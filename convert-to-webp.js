import { promises as fs } from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const convertToWebp = async (inputDir) => {
  // Получаем все файлы в директории
  const files = await fs.readdir(inputDir);

  // Фильтруем только изображения (например, png и jpg)
  const imageFiles = files.filter((file) => /\.(png|jpg|jpeg)$/i.test(file));

  // Преобразуем каждое изображение в WebP
  await Promise.all(
    imageFiles.map(async (file) => {
      const filePath = path.join(inputDir, file);
      const webpBuffer = await imagemin([filePath], {
        destination: inputDir,
        plugins: [imageminWebp({ quality: 75 })],
      });

      // Переименовываем файл WebP
      const webpPath = path.join(inputDir, `${path.parse(file).name}.webp`);
      await fs.writeFile(webpPath, webpBuffer[0].data);
      console.log(`Converted ${file} to ${webpPath}`);
    }),
  );
};

// Получаем путь к директории из аргументов командной строки
// eslint-disable-next-line no-undef
const inputDir = process.argv[2];
if (!inputDir) {
  console.error('Please provide a directory path');
  // eslint-disable-next-line no-undef
  process.exit(1);
}

convertToWebp(inputDir)
  .then(() => console.log('Conversion complete'))
  .catch((error) => console.error('Error during conversion:', error));

// usage
// node convert-to-webp.js src/assets/img
