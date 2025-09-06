export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} Golden Safety. All rights reserved.
      </div>
    </footer>
  );
}
