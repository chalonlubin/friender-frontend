const fs = require('fs');
const path = require('path');

/* Script to rename all .js files to .jsx to assist in transfer to Vite from CRA */
function renameFilesWithExtension(directory, currentExt, newExt) {
  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    if (isDirectory) {
      renameFilesWithExtension(filePath, currentExt, newExt);
    } else if (file.endsWith(currentExt)) {
      const newFilePath = path.join(directory, file.replace(currentExt, newExt));
      fs.renameSync(filePath, newFilePath);
    }
  });
}

const currentExt = '.js';
const newExt = '.jsx';
const directory = './src'; // Change this to the root directory of your JavaScript files

renameFilesWithExtension(directory, currentExt, newExt);
