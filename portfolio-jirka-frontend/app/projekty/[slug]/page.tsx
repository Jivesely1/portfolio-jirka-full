import { client } from "../../../lib/sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getProject(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      description,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={700}
            className="w-full h-auto object-cover rounded-2xl mb-8"
          />
        )}

        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">{project.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">{project.description}</p>

        <a
          href="/#portfolio"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
        >
          ← Zpět na projekty
        </a>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(`
    *[_type == "project" && defined(slug.current)]{
      slug
    }
  `);

  return slugs.map((p) => ({ slug: p.slug.current }));
}
