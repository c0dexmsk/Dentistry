const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const buildDir = path.join(__dirname, 'build');
const assetsPath = '/local/templates/react_app/assets';

// 1. Перемещаем все файлы в правильную структуру
const filesToMove = globSync([
  `${buildDir}/static/css/*.*`,
  `${buildDir}/static/js/*.*`,
  `${buildDir}/static/media/*.*`
]);

filesToMove.forEach(file => {
  const newPath = file
    .replace(`${buildDir}/static/css/`, `${buildDir}/css/`)
    .replace(`${buildDir}/static/js/`, `${buildDir}/js/`)
    .replace(`${buildDir}/static/media/`, `${buildDir}/media/`);
  
  fs.mkdirSync(path.dirname(newPath), { recursive: true });
  fs.renameSync(file, newPath);
});

// 2. Обновляем manifest и все HTML/JS файлы
const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\/static\/(css|js|media)\//g, `${assetsPath}/$1/`);
  fs.writeFileSync(filePath, content, 'utf8');
};

// Обрабатываем все файлы
globSync([
  `${buildDir}/**/*.{html,js,css,json}`
]).forEach(processFile);

//console.log('Asset paths fixed successfully!');