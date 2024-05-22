const fs = require("fs").promises;

const fileReader = async (filePath) => {
  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    console.log(fileData);
  } catch (error) {
    console.error("Error occurred while reading:", error.message);
  }
};

fileReader("./week-2/01-async-js/easy/Solution/file.txt");