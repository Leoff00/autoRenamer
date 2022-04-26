import fs from "fs";

class OutputNewFolder {
  constructor(private readonly Path: string) {}

  fileReaded(): string[] {
    const filesReaded = fs.readdirSync(this.Path, "utf-8");
    const mapping = filesReaded.map((files) => files);
    return mapping;
  }
}

export { OutputNewFolder };
