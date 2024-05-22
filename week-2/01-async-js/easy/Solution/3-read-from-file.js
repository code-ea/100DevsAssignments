// const fs = require("fs");

// const fileReader = async (filePath) => {
//   try {
//     const fileData = fs.readFileSync(filePath, "utf-8");

//     //expensive operation after file reading
//     let a = 1;
//     for (let index = 0; index < 10000000000000; index++) {
//       a += index;
//     }
//     console.log(fileData);
//   } catch (error) {
//     console.log("Error occurred while reading");
//   }
// };

// fileReader("./file.txt");

const fs = require("fs").promises;

const fileReader = async (filePath) => {
  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    let a = 1;
    for (let index = 0; index < 1000000000; index++) {
      a += index;
    }
    console.log(a);
    console.log(fileData);
  } catch (error) {
    console.error("Error occurred while reading:", error.message);
  }
};

fileReader("./week-2/01-async-js/easy/Solution/file.txt");
