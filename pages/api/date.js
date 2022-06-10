export default function handler(req, res) {
  const date = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  console.log(
    `This is a console.log from handler in api/date.js. Formatted date is ${formattedDate}.`
  );
  res.status(200).json({ apiFormattedDate: formattedDate });
}
