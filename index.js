const path = require("path");
const fs = require("fs");
console.log(__dirname);
const dirPath = path.join(__dirname, "files");

for (i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/hello${i}.txt`, "Hello world!!");
}

fs.readdir(dirPath, (err, files) => {
  files.forEach((file) => {
    console.log(`file name is ${file}`);
  });
});
