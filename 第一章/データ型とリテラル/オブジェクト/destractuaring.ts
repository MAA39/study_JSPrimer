// yourFile.ts
const DEFAULT_FILE_TYPE = "image/jpeg";

const CONTENT_FILE_TYPE_MAP: { [key: string]: any } = {
  "image": {
    directory: "images",
    extension: ".jpg",
    contentType: "image/jpeg",
  },
  "video": {
    directory: "videos",
    extension: ".mp4",
    contentType: "video/mp4",
  },
};

const file = {
  type: "image",
};

const {
  directory = "images",
  extension = ".webp",
  contentType = DEFAULT_FILE_TYPE,
} = CONTENT_FILE_TYPE_MAP[file.type] ?? {};

console.log(directory); // 出力: "images"
console.log(extension); // 出力: ".jpg"
console.log(contentType); // 出力: "image/jpeg"
