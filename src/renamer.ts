import { OutputNewFolder } from "./output";
import fs from "fs";

const PATH = "./roms";

const outputNewFolder = new OutputNewFolder(PATH);

function renamer(files: string[]) {
  const rename = files.map((file) => {
    const lowercase = file.toLowerCase();
    const includeDash = lowercase.replace(/\s+/gm, "-");
    return includeDash;
  });
  return rename;
}

export function generateNewFolder() {
  const filesToBeRenamed = renamer(outputNewFolder.fileReaded());
  
  //TODO -> Create the file writer stream implementation 
  //TODO -> and generate a new directory to renamed files.
  
}
