export function middleware() {
  const date = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  console.log(
    `This is a console.log from middleware in middleware/_middleware.js. Formatted date is ${formattedDate}.`
  );
  return new Response(
    JSON.stringify({ middlewareFormattedDate: formattedDate })
  );
}
