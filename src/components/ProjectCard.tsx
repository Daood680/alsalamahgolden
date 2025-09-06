import Image from 'next/image'

interface ProjectCardProps {
  title: string
  location: string
  image: string
  description?: string
}

export default function ProjectCard({ title, location, image, description }: ProjectCardProps) {
  return (
    <div className="github-card overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-golden-secondary">{title}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-golden-primary bg-opacity-10 text-golden-primary">
            {location}
          </span>
        </div>
        {description && (
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        )}
        <div className="mt-4">
          <button className="github-button text-sm px-3 py-1.5">
            عرض التفاصيل
          </button>
        </div>
      </div>
    </div>
  )
}