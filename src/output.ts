import fs from "fs";

class OutputNewFolder {
  constructor(private readonly Path: string) {}

  fileReaded(): string[] {
    const filesReaded = fs.readdirSync(this.Path, "utf-8");
    return filesReaded.filter((files) => files.endsWith(".bin"));
  }
}

export { OutputNewFolder };
