import DataUriParser from "datauri/parser.js";
import path from "path";

// Function to convert a file buffer to a Data URI
const getDataUri = (file) => {
  if (!file || !file.originalname || !file.buffer) {
    throw new Error(
      "Invalid file input: file, originalname, and buffer are required."
    );
  }

  const parser = new DataUriParser();
  const extName = path.extname(file.originalname); // Get file extension (e.g., .png, .jpg)
  const dataUri = parser.format(extName, file.buffer); // Format buffer to Data URI
  return dataUri; // Return the full Data URI
};

export default getDataUri;
