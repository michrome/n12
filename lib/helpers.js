export function britishDate() {
  const date = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  return formattedDate;
}
