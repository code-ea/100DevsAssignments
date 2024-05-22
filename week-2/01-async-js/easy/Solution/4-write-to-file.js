const fs = require("fs").promises;

const writeFileSyncExample = async (filePath, data) => {
  try {
    fs.writeFile(filePath, data, "utf-8");
    console.log("File written successfully");
  } catch (error) {
    console.error("Error occurred while writing:", error.message);
  }
};

writeFileSyncExample("./file.txt", "This is asynchronous text babyyy.");
