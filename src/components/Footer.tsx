import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-300">
            This is a demo Next.js project using Tailwind CSS. We are learning modern web development step by step.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-white"> Home</Link></li>
            <li><Link href="/about" className="hover:text-white"> About</Link></li>
            <li><Link href="/blog" className="hover:text-white"> Blog</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
      </div>
    </footer>
  );
}
