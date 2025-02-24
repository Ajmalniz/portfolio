import React from "react"
import Image from "next/image"
import Link from "next/link"

const skills = [
  // Frontend
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Tailwind CSS" },
  { skill: "Shadcn UI" },
  // AI & Data
  { skill: "Generative AI" },
  { skill: "Agentic AI" },
  { skill: "CrewAI" },
  { skill: "AutoGen" },
  { skill: "LangGraph" },
  { skill: "Data Analytics" },
  // Databases
  { skill: "Graph Databases" },
  { skill: "Vector Databases" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  // Other
  { skill: "Python" },
  { skill: "C++" },
  { skill: "Git" },
  { skill: "API Development" },
  { skill: "Blockchain" },
  { skill: "Sanity.io" },
]

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Ajmal Khan and I am an{" "}
              <span className="font-bold">AI Engineer</span> and{" "}
              <span className="font-bold">Full Stack Developer</span> specializing in{" "}
              <span className="font-bold">Agentic AI</span> development.
            </p>
            <br />
            <p>
              I graduated with honors on a full scholarship from COMSATS, Abbottabad in 2012
              with a BS in Computer Engineering. I&apos;m currently focused on building intelligent
              systems using advanced AI frameworks and modern web technologies.
            </p>
            <br />
            <p>
              My expertise lies in developing autonomous AI agents using frameworks like
              CrewAI, AutoGen, and LangGraph. I combine these with Vector Databases and
              Graph Databases to create intelligent, scalable solutions that push the
              boundaries of what&apos;s possible with AI.
            </p>
            <br />
            <p>
              I hold Google Data Analytics & Advanced Analytics certifications and am
              actively exploring the intersection of AI and web development. My goal is
              to create innovative applications that leverage the power of AI to solve
              complex problems.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-6">Key Achievements</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-teal-600">Agentic AI Development</h3>
              <p className="text-sm mt-2">Building advanced AI systems using CrewAI, AutoGen, and LangGraph frameworks for autonomous agent development</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-teal-600">AI Integration</h3>
              <p className="text-sm mt-2">Implementing LLMs, Vector Databases, and Graph Databases for intelligent applications</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-teal-600">Full Stack AI Solutions</h3>
              <p className="text-sm mt-2">Developing end-to-end applications combining AI capabilities with modern web technologies</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-teal-600">Data Analytics</h3>
              <p className="text-sm mt-2">Advanced analytics and visualization using Google Analytics and business intelligence tools</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-6">Certifications</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="font-semibold text-teal-600">Google Data Analytics</span>
              <span className="text-sm text-gray-500">Advanced Analytics Certification</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-teal-600">Meta Front-End Development</span>
              <span className="text-sm text-gray-500">Professional Certification</span>
            </div>
          </div>
        </div>
       <div className=" mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl py-6 flex justify-center"> 
        <Link href="/contact"  
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
             >
            Let's Connect
            </Link>
      </div>
      </div>
    </section>
  )
}

export default AboutSection
