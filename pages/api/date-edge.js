import { britishDate } from "../../lib/helpers";

export default () => {
  console.log(
    `This is a console.log from the default export in api/date-edge.js. British date is ${britishDate()}.`
  );
  return new Response(JSON.stringify({ apiDateEdge: britishDate() }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  runtime: "experimental-edge",
};
