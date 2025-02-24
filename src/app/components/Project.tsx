import Image from 'next/image'
import { client } from '../lib/sanity';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';
async function getData() {
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
  const projects = await getData()
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <h2 className="mt-24 font-bold text-center text-4xl">
        My Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: { 
          slug: any; 
          _id: Key; 
          image: string; 
          name: string;
          url: string;
        }) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project._id} 
            className="group relative border-2 border-gray-500 rounded-lg p-2 hover:border-teal-500 transition-all duration-300"
          >
            {project.image && (
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="mt-4 font-bold text-lg bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}