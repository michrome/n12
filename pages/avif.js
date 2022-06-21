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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        neque ut turpis fermentum lobortis eu a lectus. Nulla volutpat ornare
        velit, eu porttitor diam congue at. Sed quis ipsum id massa posuere
        ultrices non id lacus. Nunc interdum eu velit eget ultricies. Duis
        cursus dolor in metus placerat dignissim. Etiam sed ipsum consequat,
        feugiat felis sed, aliquam enim. Morbi ac sem rhoncus, sollicitudin
        velit ut, ultrices augue. Nam tempor, magna maximus sollicitudin
        vestibulum, purus nisi efficitur urna, nec rutrum diam nibh eget sapien.
        Proin nec dui ut elit porta vestibulum id id nibh. Aliquam dictum
        rhoncus erat, id viverra turpis semper mattis. Proin vitae lobortis
        enim. Maecenas vulputate elit in risus tempor finibus. Sed posuere quam
        sollicitudin leo eleifend, eget aliquam magna pharetra. In hac habitasse
        platea dictumst. Duis consequat mauris eget velit euismod viverra. Donec
        pellentesque, mi ut volutpat hendrerit, mi enim faucibus mauris,
        tristique elementum dolor ipsum a sem. Donec sagittis dolor quis justo
        venenatis placerat. Ut sapien nunc, fringilla at felis quis,
        sollicitudin semper massa. Integer vitae neque volutpat, aliquam nibh
        tincidunt, viverra velit. Praesent maximus nulla ac sodales congue.
        Quisque varius, ligula in aliquet laoreet, augue nisi posuere mauris, eu
        bibendum augue sem ut magna. Sed nec consectetur dolor. Vivamus at
        feugiat eros, eu semper tellus. Pellentesque orci purus, faucibus non
        erat sed, venenatis ultrices velit. Nullam nec sem augue. Vestibulum
        consectetur congue odio, eu tempor elit blandit sed. Suspendisse
        ullamcorper efficitur tellus eget vestibulum. Ut volutpat, purus non
        molestie molestie, nulla lacus rhoncus eros, eu venenatis sapien justo
        eu mauris. Sed et libero elit. Nulla semper sit amet augue at faucibus.
        In bibendum eu libero non sagittis. In at iaculis dolor, at consectetur
        libero. Quisque sollicitudin finibus urna, non sollicitudin nisl viverra
        nec. Curabitur id felis a arcu egestas pharetra. Maecenas semper enim
        nibh, auctor consectetur quam laoreet ac. Aliquam erat volutpat.
        Vestibulum in imperdiet nisi. Nunc ac ultrices odio, convallis sodales
        augue. Cras sed tristique nulla, at sagittis erat. Praesent mollis leo
        vel sapien efficitur tincidunt. Donec rutrum orci at lacus imperdiet, at
        facilisis felis rhoncus. Sed ipsum quam, imperdiet ut leo a, feugiat
        viverra magna. Cras convallis tellus non posuere dignissim. Ut sit amet
        massa massa. Praesent eu mauris vehicula lectus iaculis dapibus.
        Praesent sed mi sed ligula egestas eleifend. Aliquam dignissim massa sit
        amet gravida lacinia. Aenean aliquet rhoncus iaculis. Fusce quis
        volutpat nisl. Suspendisse potenti. Sed fermentum arcu quis odio
        egestas, id congue risus consectetur. Pellentesque sodales maximus
        ultrices. Nunc vitae velit dolor. Etiam fermentum felis et tortor
        dignissim, quis aliquam risus fringilla. Quisque ultrices cursus
        facilisis. Nunc ac pellentesque sem. Duis tristique vitae elit id
        pretium. Curabitur ut orci vel libero semper posuere. Integer convallis
        egestas pulvinar. Proin maximus vitae massa vitae laoreet. Suspendisse
        potenti. Duis viverra, mauris non sollicitudin interdum, elit lectus
        convallis orci, consectetur porttitor libero nisl id sem. Nulla et
        pharetra tellus, convallis pretium lorem. Vivamus finibus ultrices
        sapien, vel posuere nibh consequat et. Cras pretium elit tincidunt
        tincidunt aliquet. Sed et dictum neque.
      </p>
      <p>
        <p>
            This image should only load when it enters the viewport and it should
            have been resized to half of its original dimensions. 
        </p>
        <Image alt="" src={logo} height={55} width={400} />
      </p>
    </>
  );
}
