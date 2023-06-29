const multer = require("multer");
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
const crypto = require("crypto");

const { ACCESS_KEY, SECRET_ACCESS_KEY, BUCKET_REGION }: any = process.env;

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  region: BUCKET_REGION,
});
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __dirname + '../../images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({ storage: fileStorageEngine });
const upload = multer();
module.exports = { upload, s3, randomImageName };
