import Link from "next/link";
import RootLayout from "./layout";
RootLayout

export default function Home() {
  return (
    <>
      <h1>Testing </h1>
      <br />
      <br />
      <Link href="/posts">Posting Page</Link>
      <br />
      <Link href="/albums">Album Page</Link>
    </>
  );
}
