import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project Alpha',
    description: 'An innovative safety monitoring system.',
    imageUrl: '/images/alpha.jpg',
    link: '#'
  },
  {
    title: 'Project Beta',
    description: 'Next-gen hazard detection app.',
    imageUrl: '/images/beta.jpg',
    link: '#'
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              imageUrl={p.imageUrl}
              link={p.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
