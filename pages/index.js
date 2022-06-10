import Head from "next/head";

export default function Home() {
  return (
    <>
      <h1>index</h1>
      <p>This page should be statically generated (SSG).</p>
      <ul>
        <li>
          <a href="/ssr">Server Side Rendered page</a>
        </li>
      </ul>
    </>
  );
}
