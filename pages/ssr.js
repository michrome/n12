import Head from "next/head";

export default function SSR({ formattedDate, env }) {
  return (
    <>
      <Head>
        <title>ssr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ssr</h1>
      <p>This page should be server side rendered (SSR).</p>
      <p>Formatted date: {formattedDate}.</p>
      <p>There should be an in CloudWatch logs for this date.</p>
      <ul>
        <li>
          <a href="/">Statically Generated page</a>
        </li>
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const date = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  console.log(
    `This is a console.log from getServerSideProps in ssr.js. Formatted date is ${formattedDate}.`
  );
  return { props: { formattedDate } };
}
