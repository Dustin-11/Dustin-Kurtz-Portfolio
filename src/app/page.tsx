'use client';

import Image from "next/image";
import GithubIcon from "../../public/github-142-svgrepo-com.svg";
import LinkedInIcon from "../../public/linkedin-svgrepo-com.svg";
import Arrow from "../../public/arrow-up-right-svgrepo-com.svg";
import BillEaseInvoices from "../../public/BillEase-Invoices.png";
import DevlinksLinks from "../../public/Devlinks-Links.png";
import { useRef, useState } from "react";

export default function Home() {
  const scrollControlRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const mavinProjects = [
  {
    title: "Budget Automation Suite",
    context: "Accounting relied on manual entry to maintain budget records across three sub-companies.",
    contribution: [
      "Independently designed and deployed a monitoring service + API suite.",
      "Implemented a monitoring service to poll DBs across all three companies and detect payments and POs.",
      "Automated reconciliation into a unified Budget Master table.",
      "Built a separate WPF maintenance application that consumed API endpoints for data upkeep.",
      "Automated templated email notifications with user-managed distribution lists."
    ],
    impact: "Automated roughly 44% of manual accounting entries, reducing dependency on dev team, and gave accounting/procurement a self-service suite for maintaining budget records.",
    tech: "ASP.NET, Dapper, SQL Server, WPF."
  },
  {
    title: "ERP Migration Data Pipeline",
    context: "Migrated from legacy ERP to Acumatica, extracting and transforming data across all divisions and manufacturing operations.",
    contribution: [
      "Designed reusable SQL queries for extracting and transforming tables across sub-companies.",
      "Handled multi-step BOM translation via extraction and SQL Server staging.",
      "Ensured repeatable processes for multiple tenants."
    ],
    impact: "Enabled consistent, repeatable migrations of ERP data for multiple tenants, saving significant time for the data upload team.",
    tech: "SQL, Actian Zen, SQL Server."
  },
  {
    title: "AR Aging Report Scraper",
    context: "Migration from legacy ERP to Acumatica required extracting complex AR data. Legacy system had scattered, undocumented AR entries across many tables.",
    contribution: [
      "Designed and implemented a Python CLI to automate AR Aging workflows.",
      "Enabled parsing of reports from ERP AR Aging report.",
      "Built logic to extract invoice numbers via Unicode string matching.",
      "Integrated pyodbc to re-query a 32-bit database for supporting data.",
      "Transformed results into the upload template required by the upload team.",
      "Automated export of formatted data into Excel using openpyxl."
    ],
    impact: "Delivered a solution in just 4 days, unlocking migration of roughly 2,500 AR records and accomplishing a critical milestone.",
    tech: "Python, pyodbc, openpyxl, Typer."
  },
  {
    title: "Smart Packaging Engine",
    context: "Company began boxing products for shipment, but table leaf boxes were not included in the ERP BOM. Packaging rules were complex and undocumented.",
    contribution: [
      "Designed and implemented a WPF desktop app to handle packaging workflows.",
      "Built logic to parse table leaf inventory IDs using ID structure rules to determine dimensions.",
      "Developed a maintainable rules engine to encode complex packaging rules.",
      "Implemented shipment queries to identify tables requiring leaves.",
      "Automated label printing.",
      "Added error logging for user visibility and developer observability.",
      "Authored documentation of packaging rules, later adopted on the production floor."
    ],
    impact: "Eliminated manual calculation and labeling, reduced shipping prep errors, and standardized workflow.",
    tech: "WPF, .NET, Dapper, SQL Server."
  }
];

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
          <p>From invoices to SMS rideshares, I make software that works</p>
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
          <p>Back in 2022, I dove headfirst into software development, quickly evolving from building applications and websites to delivering production-ready 
            solutions for a manufacturing company and other real-world clients.</p>
          <p className="mt-4">
            Today, I design, develop, and maintain complex systems, from multi-tenant 
            full-stack applications to scalable backend platforms like Golle, an SMS-first rideshare service for Amish communities.
            I&rsquo;m passionate about solving challenging problems, writing maintainable code, and building software that makes a real impact. 
          </p>
          <p className="mt-4">When I&rsquo;m not coding, you&rsquo;ll probably find me hiking, mountain biking, or spending time with my wife.
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
                  Developed ERP and internal applications that solved complex business problems, automated manual processes, and delivered reliable solutions in collaboration with cross-functional teams.
                </p>
                <h5 className="text-slate-200 font-semibold text-md my-2 pt-4 tracking-widest">Key Projects</h5>
                <ul>
                  {mavinProjects.map((project, idx) => {
                    const isOpen = openIndex === idx;
                  
                    return (
                      <li key={idx} className="mb-4">
                        <h6
                          className="text-slate-200 font-semibold text-sm my-2 tracking-widest cursor-pointer"
                          onClick={() => setOpenIndex(isOpen ? null : idx)}
                        >
                          {project.title}
                          <span className="text-xs ml-2">{isOpen ? "▲" : "▼"}</span>
                        </h6>
                    
                        {isOpen && (
                          <div className="text-sm space-y-2 ml-2">
                            <div><strong>Context:</strong> {project.context}</div>
                            <div>
                              <strong>Contribution:</strong>
                              <ul className="list-disc list-inside ml-4">
                                {project.contribution.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                            </div>
                            <div><strong>Impact:</strong> {project.impact}</div>
                            <div><strong>Tech:</strong> {project.tech}</div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">C#</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Python</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">SQL</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">.NET</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Microsoft SQL Server</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">MySQL</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Dapper</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">XAML</span>
                </div>
              </div>
            </li>
            <li className="mt-11 sm:flex sm:gap-4">
              <h5 className="text-xs sm:w-1/4 sm:mt-3">Aug 2022 - PRESENT</h5>
              <div className="sm:w-3/4">
                <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">Software Developer - Independent Projects</h3>
                <p className="text-sm">
                  Built apps that solve real problems like managing invoices, sharing links, and more. 
                  Currently developing a rural rideshare platform (Golle) to serve the Amish community. 
                  Learned multiple languages, frameworks, and software best practices while tackling complex problems from 
                  start to finish. Check out the Projects section for the full lineup.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">TypeScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">JavaScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">NestJS</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Express.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Next.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">React.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">AWS</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Firebase</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Docker</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Git</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind CSS</span>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <a className="text-slate-200 font-extrabold text-md my-11 tracking-widest" href="/DustinKurtz_Resume_current.pdf" target="_blank" rel="noopener noreferrer">View Full Resume</a>
            <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
          </div>
        </section>
        <section id="projects" className="mt-10">
          <h3 className="text-slate-200 font-extrabold text-sm my-11 tracking-widest lg:hidden">PROJECTS</h3>
          <ul>
            <li className="sm:flex flex-row-reverse">
              <div className="sm:w-3/4">
                <a className="flex items-center gap-2 h-10" href="https://github.com/Dustin-11/golle-docs" target="_blank" rel="noopener noreferrer">
                  <span className="text-slate-200 font-extrabold text-md my-11 tracking-widest">Golle</span>
                  <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
                </a>
                <p className="text-sm">
                  • SMS-first rideshare backend for riders and drivers without smartphones, designed for rural and Amish communities.<br/>
                  • <strong>Live:</strong> Ride Request Service (CRUD, action-key workflows, Node.js/TypeScript, Supabase) and Security Service (OTP authentication, stateless sessions).<br/>
                  • <strong>In Progress/Designed:</strong> Orchestration, Dispatch, Payment, and SMS Gateway services for workflow coordination, real-time matching, payments, and messaging.<br/>
                  • Implements a <strong>microservices architecture</strong> with stateless, horizontally scalable services, database-backed state, Prisma optimizations, and robust error handling.<br/>
                  • Designed to handle complex multi-step workflows while keeping future web/mobile integration in mind.
                </p>
                <div className="my-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Express.js</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">NestJS</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">TypeScript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Supabase</span>
                </div>
              </div>
            </li>
            <li className="sm:flex flex-row-reverse">
              <div className="sm:w-3/4">
                <a className="flex items-center gap-2 h-10" href="https://bill-ease-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span className="text-slate-200 font-extrabold text-md my-11 tracking-widest">BillEase</span>
                  <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
                </a>
                <p className="text-sm">
                  • A full-stack application for managing invoices, customers, and user profiles.<br/>
                  • Streamlines invoice and contact management for a small local business.<br/>
                  • Multi-tenant architecture ensures secure, isolated data for multiple users.<br/>
                  • Implements CRUD operations for invoices and customer records.<br/>
                  • Provids comprehensive profile management, including photos, contact info, and password updates.
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
                  • A full-stack application to share multiple social media URLs through a single link.<br/>
                  • CRUD functionality allows full control over user links and customization.<br/>
                  • Leveraged dynamic SVG customizations for a responsive, visually-rich interface optimized for large screens.<br/>
                  • Engineered custom drag-and-drop functionality for seamless link reordering.<br/>
                  • Designed multi-tenant architecture for secure, isolated user data.<br/>
                  • Shared links are mobile-compatible; app interface tailored for desktop.
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
          </ul>
        </section>
      </main>
    </div>
  );
}
