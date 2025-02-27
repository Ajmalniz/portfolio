"use client";
import React from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/HeadShot.png"
            alt="Ajmal Khan - AI Engineer & Full Stack Developer"
            width={325}
            height={325}
            className="rounded-full shadow-2xl hover:shadow-teal-500/50 transition-shadow duration-300"
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I'm Ajmal!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm an{" "}
            <span className="font-semibold text-teal-600">AI Engineer</span> and{" "}
            <span className="font-semibold text-teal-600">Full Stack Developer</span> passionate about turning complex AI concepts into practical solutions.
          </p>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-8">
            Specializing in <span className="font-semibold text-teal-600">Agentic AI</span>,{" "}
            <span className="font-semibold text-teal-600">LLMs</span>, and modern web development with tools like CrewAI, AutoGen, and LangGraph.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="/project"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="text-teal-600 font-semibold px-6 py-3 border-2 border-teal-600 rounded shadow hover:bg-teal-700 hover:text-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link href="#about" className="cursor-pointer">
          <HiArrowDown size={35} className="animate-bounce text-teal-600" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;