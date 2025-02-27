import Image from "next/image";
import { client } from "../lib/sanity";
import Link from "next/link";

// Define the shape of a Certificate object from Sanity
interface Certificate {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  image: string;
  issue: string;
  content?: any; // Optional, adjust based on your Sanity schema
}

async function getData(): Promise<Certificate[]> {
  const query = `*[_type == "certificate"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    issue,
    content
  }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function Certification() {
  const certificates: Certificate[] = await getData();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h2 className="mt-24 font-bold text-gray-700 text-3xl text-center">My Certifications</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((project: Certificate) => (
          <Link
            href={`/certifications/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-4 hover:scale-105 hover:border-blue-500 transition-all duration-300"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Issued by: {project.issue}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}