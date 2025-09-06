import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Golden Safety</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Golden Safety is dedicated to providing top-tier safety solutions for industrial and
          commercial environments. With years of expertise and a focus on innovation, we ensure
          that your operations remain secure and efficient.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To empower organizations with cutting-edge safety technology and unparalleled support.
        </p>
      </main>
      <Footer />
    </>
  );
}
