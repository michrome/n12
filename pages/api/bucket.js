const AWS = require("aws-sdk");
export default async function handler(req, res) {
  console.log("1");
  // const s3 = new AWS.S3({
  //   accessKeyId: process.env.ACCESS_KEY_ID,
  //   secretAccessKey: process.env.SECRET_ACCESS_KEY,
  // });
  const s3 = new AWS.S3({ region: "us-west-2" });
  console.log("2");
  const params = {
    Bucket: "let-me-see-if-i-can-upload",
    Key: "i-am-bucket",
  };
  console.log("3");
  let url = await s3.getSignedUrlPromise("putObject", params);
  console.log("4");
  return res.status(200).json({ url: url });
}
