import Image from 'next/image'
import { client } from '../lib/sanity';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';
async function getData() {
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
  const projects= await getData()
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
    
    <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Certifications</h2>

    <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project: { slug: any; _id: Key | null | undefined; image: string | StaticImport; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined;issue:any; }) => (
      <Link href={`/certifications/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
        {project.image && (
          <Image
            src={project.image}
            alt='project'
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500"
          />
        )}
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.title}
        </div>
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Issued by: 
            {project.issue}    
            
        </div>
      </Link>
    ))}
    </div>




  </div>
)}