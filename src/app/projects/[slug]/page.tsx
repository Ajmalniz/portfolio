import { client } from '@/app/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from "next/image"
async function getData(slug: string) {
    const query = `*[_type == "project" && slug.current =="${slug}"][0]{
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
  export default async function ProjectPage({
    params,
  }: {
    params: { slug: string };
  }) {
    const project = await getData(params.slug)
    
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl py-12">
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
          {project.name}
        </h1>
        {project.url && (
          <a 
            href={project.url} 
            title="View Project" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-teal-600 text-white rounded-lg font-semibold py-3 px-6 hover:bg-teal-700 transition-colors"
          >
            View Project
          </a>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <PortableText value={project.content} />
      </div>

      <div className="mt-8 aspect-video relative rounded-xl overflow-hidden border-2 border-gray-200">
        <Image 
          src={project.image} 
          alt={project.name} 
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
} 