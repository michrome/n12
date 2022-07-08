import Head from "next/head";
import { britishDate } from "../lib/helpers";

export default function Home() {
  return (
    <>
      <Head>
        <title>index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>index</h1>
      <p>This page was statically generated (SSG) on {britishDate()}.</p>
      <ul>
        <li>
          <a href="/ssr">Server Side Rendered page</a>
        </li>
        <li>
          <a href="/api/date">API Route</a>
        </li>
        {/* <li>
          <a href="/api/date-edge">Edge API Route</a>
        </li> */}
        <li>
          <a href="/image">next/image</a>
        </li>
      </ul>
    </>
  );
}
