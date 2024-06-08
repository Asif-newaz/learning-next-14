import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-3xl">Welcome home!</div>
      <Link href="/products">Products</Link>
      <Link href="/blog">Blog</Link>
    </>
  );
}
