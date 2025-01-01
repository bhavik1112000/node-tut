// const fs = require("fs");
const fsPromise = require("fs").promises;

// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) throw new Error("Something went wrong");
//   console.log(data);
// });

// const data = fs.readFileSync("./sample.txt", "utf-8");
// console.log(data);

// const readFile = async () => {
//   try {
//     const data = await fsPromise.readFile("./sample.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// readFile();

// fs.writeFile("./sample.txt", "How are you?", (err) => {
//   if (err) throw new Error("Something went wrong");
//   console.log("File written successfully");
// });

const writingInFile = async () => {
  try {
    await fsPromise.appendFile("./sample.txt", "\n Something appended1");
    const data = await fsPromise.readFile("./sample.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

writingInFile();

//utf-8 or data.toString()
