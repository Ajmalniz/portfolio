import AboutSection from './components/AboutSection';
import Certification from './components/Certification';
import HeroSection from './components/HeroSection';
import Project from './components/Project';

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <Project />
      </div>
      <div className="py-20">
        <Certification />
      </div>
    </main>
  )
}
