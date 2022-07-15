import Head from "next/head";
import { britishDate } from "../lib/helpers";

export default function SSR({ ssrDate }) {
  return (
    <>
      <Head>
        <title>ssr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ssr</h1>
      <p>This page was server side rendered (SSR) at {ssrDate}.</p>
      <p>There should be a log entry showing SSR ran.</p>
    </>
  );
}

export async function getServerSideProps() {
  const ssrDate = britishDate();
  console.log(
    `This is a console.log from getServerSideProps in ssr.js. British date is ${ssrDate}.`
  );
  return { props: { ssrDate } };
}
