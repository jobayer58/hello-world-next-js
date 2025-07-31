import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md flex gap-4 justify-center">
      <Link href="/" className="text-white hover:underline">Home</Link>
      <Link href="/about" className="text-white hover:underline">About</Link>
      <Link href="/blog" className="text-white hover:underline">Blog</Link>
      <Link href="/products" className="text-white hover:underline">products</Link>
    </nav>
  );
}
