import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>index</h1>
      <p>This page should be statically generated (SSG).</p>
      <ul>
        <li>
          <a href="/ssr">Server Side Rendered page</a>
        </li>
        <li>
          <a href="/api/date">API Route</a>
        </li>
        <li>
          <a href="/api/date-edge">Edge API Route</a>
        </li>
      </ul>
    </>
  );
}
