'use client';

import Image from "next/image";
import GithubIcon from "../../public/github-142-svgrepo-com.svg";
import LinkedInIcon from "../../public/linkedin-svgrepo-com.svg";
import Arrow from "../../public/arrow-up-right-svgrepo-com.svg";
import BillEaseInvoices from "../../public/BillEase-Invoices.png";
import DevlinksLinks from "../../public/Devlinks-Links.png";
import WorldExploreX from "../../public/WorldExploreX.png";
import NewsHomePage from "../../public/NewsHomePage.png";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollControlRef = useRef<HTMLDivElement>(null);
  // const videoRef = useRef<HTMLVideoElement>(null);

  // const toggleFullScreen = () => {
  //   if (videoRef.current) {
  //     if (videoRef.current.requestFullscreen) {
  //       videoRef.current.requestFullscreen();
  //     } 
  //     // else if (videoRef.current.mozRequestFullScreen) { // Firefox
  //     //   videoRef.current.mozRequestFullScreen();
  //     // } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
  //     //   videoRef.current.webkitRequestFullscreen();
  //     // } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
  //     //   videoRef.current.msRequestFullscreen();
  //     // }
  //   }
  // };

  const scrollToAbout = () => {
    if(scrollControlRef.current) {
      const childDiv = scrollControlRef.current.querySelector('#about');
      if(childDiv) {
        childDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  const scrollToExperience = () => {
    if(scrollControlRef.current) {
      const childDiv = scrollControlRef.current.querySelector('#experience');
      if(childDiv) {
        childDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  const scrollToProjects = () => {
    if(scrollControlRef.current) {
      const childDiv = scrollControlRef.current.querySelector('#projects');
      if(childDiv) {
        childDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  return (
    <div ref={scrollControlRef} className="flex min-h-screen max-h-screen flex-col items-start bg-slate-900 text-slate-400 px-6 md:px-12 lg:px-24 lg:flex-row lg:gap-4 lg:pt-0 overflow-y-scroll">
      <header className="my-12 md:my-20 lg:max-h-screen lg:sticky lg:top-[104px] lg:w-1/2">
        <div>
          <h1 className="text-4xl sm:text-5xl text-slate-200 font-bold tracking-tight">Dustin Kurtz</h1>
          <h3 className="text-slate-200 text-lg sm:text-xl font-medium tracking-tight my-3.5">Software Engineer</h3>
          <p>I build engaging, innovative software solutions</p>
          <nav className="hidden lg:block my-20">
            <ul className="w-max">
              <li className="mt-5 hover:cursor-pointer" onClick={scrollToAbout}>
                <a className="group flex gap-4 items-center motion-reduce:transition-none">
                  <span id="about-Accent" className="border-b-2 border-slate-700 w-8 h-[1px] inline group-hover:w-16 group-hover:border-slate-200 transition-all duration-300 ease-in-out"></span>
                  <span id="about-Word" className="text-xs group-hover:text-slate-200 transition-all duration-300 ease-in-out">ABOUT</span>
                </a>
              </li>
              <li className="mt-5 hover:cursor-pointer" onClick={scrollToExperience}>
                <a className="group flex gap-4 items-center motion-reduce:transition-none">
                  <span id="experience-Accent" className="border-b-2 border-slate-700 w-8 h-[1px] inline group-hover:w-16 group-hover:border-slate-200 transition-all duration-300 ease-in-out"></span>
                  <span id="experience-Word" className="text-xs group-hover:text-slate-200 transition-all duration-150 ease-in-out">EXPERIENCE</span>
                </a>
              </li>
              <li className="mt-5 hover:cursor-pointer" onClick={scrollToProjects}>
                <a className="group flex gap-4 items-center motion-reduce:transition-none">
                  <span id="projects-Accent" className="border-b-2 border-slate-700 w-8 h-[1px] inline group-hover:w-16 group-hover:border-slate-200 transition-all duration-300 ease-in-out"></span>
                  <span id="projects-Word" className="text-xs group-hover:text-slate-200 transition-all duration-150 ease-in-out">PROJECTS</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex gap-4 items-center mt-7 px-1 lg:fixed lg:bottom-24">
          <li className="w-6 h-6">
            <a href="https://github.com/dustin-11" target="_blank" rel="noopener noreferrer">
              <Image src={GithubIcon} alt="Github logo" />
            </a>
          </li>
          <li className="w-8 h-8">
            <a href="https://www.linkedin.com/in/dustin-kurtz11/" target="_blank" rel="noopener noreferrer">
              <Image src={LinkedInIcon} alt="LinkedIn logo" />
            </a>
          </li>
        </ul>
      </header>
      <main className="pb-16 lg:max-h-full lg:w-1/2 lg:pt-0 lg:mb-12">
        <section id="about" className="mt-7 leading-customHeight lg:pt-24 lg:mt-0">
          <h3 className="text-slate-200 font-extrabold text-sm my-9 tracking-widest lg:hidden">ABOUT</h3>
          <p>Back in 2022, I decided to dive headfirst into the vast world of software development! Fast-forward to today, 
             and I&rsquo;ve had the privilege of building software for a large manufacturing company, a small local business, 
             and myself.</p>
          <p className="mt-4">My journey started as a self-taught software developer where I honed my skills primarily through
             building applications and websites. Then I transitioned this experience into a full-time profession in 2023.
          </p>
          <p className="mt-4">When I&rsquo;m not at the computer, I&rsquo;m usually hiking, mountain biking, or hanging out with my wife.
          </p>
        </section>
        <section id="experience" className="mt-20">
          <h3 className="text-slate-200 font-extrabold text-sm my-11 tracking-widest lg:hidden">EXPERIENCE</h3>
          <ul>
            <li className="sm:flex sm:gap-4">
              <h5 className="text-xs sm:w-1/4 sm:mt-3">Oct 2023 - PRESENT</h5>
              <div className="sm:w-3/4">
                <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">Software Engineer - <a>Mavin</a></h3>
                <p className="text-sm">
                  • Enhanced functionality of legacy ERP system.<br/>
                  • Implemented improvements to core manufacturing and budgeting applications, enhancing user-experience, accuracy, and capacity.<br/>
                  • Managed the full life-cycle of in-house applications.<br/>
                  • Implemented version control and systemization of locally hosted programs.<br/>
                  • Collaborated with non-technical personnel to develop solutions meeting business objectives.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">C#</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">SQL</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">.NET</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">XAML</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Legacy ERP</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Microsoft SQL Server</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">MySQL</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Dapper</span>
                </div>
              </div>
            </li>
            <li className="mt-11 sm:flex sm:gap-4">
              <h5 className="text-xs sm:w-1/4 sm:mt-3">Aug 2022 - PRESENT</h5>
              <div className="sm:w-3/4">
                <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">Software Developer - Self-Taught</h3>
                <p className="text-sm">
                  • Developed foundational software development skills, including object-oriented programming (OOP), 
                    proficiency in multiple programming languages, and experience with frontend frameworks.<br/>
                  • Built diverse projects, including full-stack web applications, API projects, and static websites, to apply and reinforce new skills.<br/>
                  • Enhanced critical thinking and problem-solving abilities through real-world challenges in project development, 
                    such as API integration, scalability, cross-platform compatability, data flow and persistence, etc.<br/>
                  • Cultivated a deep passion for software development, driving continuous learning and growth.<br/>
                  • Transitioned from novice programmer to proficient full-stack developer, creating scalable and reliable applications.<br/>
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">TypeScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">JavaScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Next.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">React.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Firebase</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind CSS</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">HTML</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">CSS</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Git</span>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <a className="text-slate-200 font-extrabold text-md my-11 tracking-widest" href="/SkyCatchFireResume.pdf" target="_blank" rel="noopener noreferrer">View Full Resume</a>
            <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
          </div>
        </section>
        <section id="projects" className="mt-10">
          <h3 className="text-slate-200 font-extrabold text-sm my-11 tracking-widest lg:hidden">PROJECTS</h3>
          <ul>
            <li className="sm:flex flex-row-reverse">
              <div className="sm:w-3/4">
                <a className="flex items-center gap-2 h-10" href="https://bill-ease-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span className="text-slate-200 font-extrabold text-md my-11 tracking-widest">BillEase</span>
                  <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
                </a>
                <p className="text-sm">
                  • A full-stack application for managing invoices, customers, and profile settings.<br/>
                  • Actively used by a local manufacturing company, this application streamlines invoice management and customer contact records.<br/>
                  • Adheres to a multi-tenant architecture, allowing it to serve multiple users each with their own user-specific data.<br/>
                  • Implemented CRUD operations for invoices to maintain up-to-date records.<br/>
                  • Provided functionality to manage customer records efficiently.<br/>
                  • Enabled users to manage profile settings, including profile photo, saved contact info, and password updates.<br/>
                </p>
                <div className="my-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Next.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Firebase</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">TypeScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind CSS</span>
                </div>
              </div>
              <div className="w-40 sm:w-1/4 sm:pr-10 sm:mt-3">
                <Image src={BillEaseInvoices} alt="Screenshot of BillEase App"/>
              </div>
            </li>
            <li className="mt-11 sm:flex flex-row-reverse">
              <div className="sm:w-3/4">
                <a className="flex items-center gap-2 h-10" href="https://devlinks-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span className="text-slate-200 font-extrabold text-md my-11 tracking-widest">devlinks</span>
                  <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
                </a>
                <p className="text-sm">
                  • A full-stack application that facilitates easy sharing of multiple social media links using a single link.<br/>
                  • Enables users to create, read, update, and delete links, tailoring the sharable content to their needs.<br/>
                  • Utilizes dynamic SVG customizations to create a dynamic user interface based on the links added by the user, optimized for large screens.<br/>
                  • Implements custom drag-and-drop logic, allowing users to effortlessly reorder the links they share.<br/>
                  • Follows a multi-tenant architecture, for data isolation and customized user experiences.<br/>
                  • The shared link is compatible with mobile devices, but the application interface is optimized for desktop use.<br/>
                </p>
                <div className="my-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Next.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Firebase</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">JavaScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind CSS</span>
                </div>
              </div>
              <div className="w-40 sm:w-1/4 sm:pr-10 sm:mt-3">
                <Image src={DevlinksLinks} alt="Screenshot of Devlinks App"/>
              </div>
              
            </li>
            <li className="mt-11 sm:flex flex-row-reverse">
              <div className="sm:w-3/4">
                <a className="flex items-center gap-2 h-10" href="https://dustin-11.github.io/Country_Api_App/" target="_blank" rel="noopener noreferrer">
                  <span className="text-slate-200 font-extrabold text-md my-11 tracking-widest">WorldExploreX</span>
                  <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
                </a>
                <p className="text-sm">
                  • A frontend application for exploring countries around the world.<br/>
                  • Consumes an API to provide users with information about countries all over the world.<br/>
                  • Enables users to search for countries by name, with results dynamically filtered as they type.<br/>
                  • Provides predefined filters for users to explore countries by region.<br/>
                  • Provides detailed information about selected countries when clicked by the user.<br/>
                </p>
                <div className="my-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">React.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">JavaScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind CSS</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">API</span>
                </div>
              </div>
              <div className="w-40 sm:w-1/4 sm:pr-10 sm:mt-3">
                <Image src={WorldExploreX} alt="Screenshot of BillEase App"/>
              </div>
            </li>
            <li className="mt-11 sm:flex flex-row-reverse">
              <div className="sm:w-3/4">
                <a className="flex items-center gap-2 h-10" href="https://dustin-11.github.io/NewsHomePage/" target="_blank" rel="noopener noreferrer">
                  <span className="text-slate-200 font-extrabold text-md my-11 tracking-widest">NewsHomePage</span>
                  <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
                </a>
                <p className="text-sm">
                  • A static landing page for a news organization.<br/>
                  • Represents a simple, yet engaging, landing page for a news organization.<br/>
                  • Utilizes a responsive design to ensure optimal viewing experience across devices.<br/>
                  • Incorporates interactive effects that respond to user events, enhancing user engagement.<br/>
                </p>
                <div className="my-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">React.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">JavaScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">CSS</span>
                </div>
              </div>
              <div className="w-40 sm:w-1/4 sm:pr-10 sm:mt-3">
                <Image src={NewsHomePage} alt="Screenshot of BillEase App"/>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
