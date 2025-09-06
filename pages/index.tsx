import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Golden Safety</h1>
        <p className="text-lg text-gray-600">Protecting what matters most.</p>
      </main>
      <Footer />
    </>
  );
}
