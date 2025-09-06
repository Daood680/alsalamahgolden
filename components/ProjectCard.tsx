interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && <a href={link} className="text-blue-500 hover:underline">View Project</a>}
      </div>
    </div>
  );
}
