import { britishDate } from "../../lib/helpers";

export default function handler(req, res) {
  console.log(
    `This is a console.log from handler in api/date.js. British date is ${britishDate()}.`
  );
  res.status(200).json({ apiDate: britishDate() });
}
