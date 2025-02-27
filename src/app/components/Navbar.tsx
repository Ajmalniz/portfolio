import { ModeToggle } from "@/components/ui/toggel-mode";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="mb-8 border-b mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl text-neutral-500 dark:text-neutral-100">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <nav className="gap-6 flex 2xl:ml-16">
          <div className="hover:-translate-y-1 transition-transform hover:text-teal-600">
            <Link href="/">Home</Link>
          </div>
          <div className="hover:-translate-y-1 transition-transform hover:text-teal-600">
            <Link href="/project">Projects</Link>
          </div>
          <div className="hover:-translate-y-1 transition-transform hover:text-teal-600">
            <Link href="/certification">Certifications</Link>
          </div>
          <div className="hover:-translate-y-1 transition-transform hover:text-teal-600">
            <Link href="/about">About</Link>
          </div>
          <div className="hover:-translate-y-1 transition-transform hover:text-teal-600">
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <div className="hidden lg:flex justify-end items-center gap-6">
          <Link href="https://github.com/Ajmalniz" target="_blank">
            <AiOutlineGithub className="hover:-translate-y-1 transition-transform" size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/front-end-developer-headless-cms-ai-blockchain/" target="_blank">
            <AiOutlineLinkedin className="hover:-translate-y-1 transition-transform" size={30} />
          </Link>
          <div className="hover:-translate-y-1 transition-transform">
            <ModeToggle aria-label="Toggle between dark and light theme" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden justify-end">
        <Sheet>
          <SheetTrigger aria-label="Open navigation menu">
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-teal-600 transition-colors">Home</Link>
                <Link href="/project" className="text-lg font-medium hover:text-teal-600 transition-colors">Projects</Link>
                <Link href="/certification" className="text-lg font-medium hover:text-teal-600 transition-colors">Certifications</Link>
                <Link href="/about" className="text-lg font-medium hover:text-teal-600 transition-colors">About</Link>
                <Link href="/contact" className="text-lg font-medium hover:text-teal-600 transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center gap-6 mt-8 justify-center">
                <ModeToggle aria-label="Toggle between dark and light theme" />
                <div className="flex gap-4">
                  <a href="https://github.com/Ajmalniz" target="_blank">
                    <AiOutlineGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/ajmal-ai-engineer/" target="_blank">
                    <AiOutlineLinkedin size={24} />
                  </a>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}