import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <>
      <h1>Blog route!</h1>
      <Link href="/">Home</Link>
    </>
  );
}
