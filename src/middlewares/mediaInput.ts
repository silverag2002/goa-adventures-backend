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
async function uploadMedia(file: any) {
  console.log("req.license", file);
  const banner = randomImageName();
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: banner,
    Body: file.buffer,
    ContentType: file.mimetype,
  };
  console.log("PArams", params);
  const command = new PutObjectCommand(params);
  const response = await s3.send(command);
  console.log("URl for banner response", response);
  let resp = {
    url: `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${banner}`,
    uploaded: false,
  };
  if (response.$metadata.httpStatusCode == 200) {
    resp.uploaded = true;
    return resp;
  }
  return resp;
}
module.exports = { s3, randomImageName, uploadMedia };
