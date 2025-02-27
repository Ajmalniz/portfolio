import Image from "next/image";
import { client } from "../lib/sanity";
import Link from "next/link";

// Define the shape of a Project object from Sanity
interface Project {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content?: { children?: { text: string }[] }[]; // Optional content field
}

async function getData(): Promise<Project[]> {
  const query = `*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function Project() {
  const projects: Project[] = await getData();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h2 className="mt-24 font-bold text-center text-4xl">
        My Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="group relative border-2 border-gray-500 rounded-lg p-2 hover:border-teal-500 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {project.image && (
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <div className="mt-4 font-bold text-lg bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
              {project.name}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {project.content?.[0]?.children?.[0]?.text || "A project showcasing my skills in AI and web development."}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}