import Head from "next/head";
import AboutSection from "./components/AboutSection";
import Certification from "./components/Certification";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ajmal Khan - AI Engineer & Full Stack Developer</title>
        <meta name="description" content="Portfolio of Ajmal Khan, showcasing AI engineering and full stack development projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Ajmal Khan",
            "jobTitle": "AI Engineer & Full Stack Developer",
            "url": "https://portfolio-git-master-ajmalnizs-projects.vercel.app",
            "sameAs": [
              "https://github.com/Ajmalniz",
              "https://www.linkedin.com/in/front-end-developer-headless-cms-ai-blockchain/"
            ]
          })}
        </script>
      </Head>
      <main className="min-h-screen">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="project" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Project />
        </div>
        <div id="certification" className="py-20">
          <Certification />
        </div>
      </main>
    </>
  );
}