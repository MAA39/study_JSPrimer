// yourFile.ts
const DEFAULT_FILE_TYPE_TS = "image/jpeg";

const CONTENT_FILE_TYPE_MAP_TS: { [key: string]: any } = {
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

const Name = {
  type: "image",
};

const {
  TS_directory = "images",
  TS_extension = ".webp",
  TS_contentType = DEFAULT_FILE_TYPE_TS,
} = CONTENT_FILE_TYPE_MAP[file.type] ?? {};

console.log(TS_directory); // 出力: "images"
console.log(TS_extension); // 出力: ".jpg"
console.log(TS_contentType); // 出力: "image/jpeg"
