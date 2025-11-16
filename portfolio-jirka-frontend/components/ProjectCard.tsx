interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg mb-3 h-40 w-full object-cover"
        />
      )}
      <h3 className="text-xl font-bold mb-2 text-indigo-700">{title}</h3>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
    </div>
  );
}
