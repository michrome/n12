const AWS = require("aws-sdk");
export default function handler(req, res) {
  const s3 = new AWS.S3();
  const params = {
    Bucket: "let-me-see-if-i-can-upload",
    Key: "i-am-bucket",
  };
  s3.getSignedUrl("putObject", params, function (err, url) {
    res.status(200).json({ url: url });
  });
}
