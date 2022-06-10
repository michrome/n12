import Head from "next/head";
import Image from "next/image";
import logo from "../public/aws-amplify-logo.jpeg";

export default function AVIF() {
  return (
    <>
      <Head>
        <title>AVIF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>AVIF</h1>
      <p>An image rendered using the img tag. It should be JPEG:</p>
      <p>
        <img src="/aws-amplify-logo.jpeg" alt="" />
      </p>
      <p>
        An image rendered using the Image tag (local source). It should be AVIF:
      </p>
      <p>
        <Image alt="" src={logo} />
      </p>
      <ul>
        <li>
          <a href="/ssr">Server Side Rendered page</a>
        </li>
      </ul>
    </>
  );
}
