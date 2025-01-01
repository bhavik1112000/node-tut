const fsPromise = require("fs").promises;

// const writingInFile = async () => {
//   try {
//     await fsPromise.writeFile("./data.txt", "Hello, World!", { flag: "a+" });

//     // await fsPromise.appendFile(
//     //   "./data.txt",
//     //   "\n Something appended for one more time"
//     // );
//     const data = await fsPromise.readFile("./data.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// writingInFile();

const renameFile = async () => {
  try {
    await fsPromise.rename("./data.txt", "./data2.txt");
  } catch (err) {
    console.log(err.message);
  }
};

renameFile();

// await fsPromise.writeFile("./data.txt", "Hello, Worlddddd!", {
//     flag: "a+",
//   });
