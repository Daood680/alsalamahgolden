import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold">Golden Safety</div>
        <div className="space-x-4">
          <Link href="/"><a className="hover:text-gray-300">Home</a></Link>
          <Link href="/projects"><a className="hover:text-gray-300">Projects</a></Link>
          <Link href="/about"><a className="hover:text-gray-300">About</a></Link>
          <Link href="/contact"><a className="hover:text-gray-300">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
