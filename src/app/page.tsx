import Image from "next/image";
import GithubIcon from "../../public/github-142-svgrepo-com.svg";
import LinkedInIcon from "../../public/linkedin-svgrepo-com.svg";
import Arrow from "../../public/arrow-up-right-svgrepo-com.svg";
import BillEaseInvoices from "../../public/BillEase-Invoices.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start bg-slate-900 text-slate-400 px-6 md:px-12">
      <header className="my-12 md:my-20">
        <div>
          <h1 className="text-4xl sm:text-5xl text-slate-200 font-bold tracking-tight">Dustin Kurtz</h1>
          <h3 className="text-slate-200 text-lg sm:text-xl font-medium tracking-tight my-3.5">Software Engineer</h3>
          <p>I build engaging, innovative software solutions</p>
          <nav className="hidden lg:block my-20">
            <ul className="w-max">
              <li className="mt-5 hover:cursor-pointer">
                <a className="group flex gap-4 items-center motion-reduce:transition-none" href="#about">
                  <span className="border-b-2 border-slate-700 w-8 h-[1px] inline group-hover:w-16 group-hover:border-slate-200 transition-all duration-300 ease-in-out"></span>
                  <span className="text-xs group-hover:text-slate-200 transition-all duration-300 ease-in-out">ABOUT</span>
                </a>
              </li>
              <li className="mt-5 hover:cursor-pointer">
                <a className="group flex gap-4 items-center motion-reduce:transition-none" href="#experience">
                  <span className="border-b-2 border-slate-700 w-8 h-[1px] inline group-hover:w-16 group-hover:border-slate-200 transition-all duration-150 ease-in-out"></span>
                  <span className="text-xs group-hover:text-slate-200 transition-all duration-150 ease-in-out">EXPERIENCE</span>
                </a>
              </li>
              <li className="mt-5 hover:cursor-pointer">
                <a className="group flex gap-4 items-center motion-reduce:transition-none" href="#projects">
                  <span className="border-b-2 border-slate-700 w-8 h-[1px] inline group-hover:w-16 group-hover:border-slate-200 transition-all duration-150 ease-in-out"></span>
                  <span className="text-xs group-hover:text-slate-200 transition-all duration-150 ease-in-out">PROJECTS</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex gap-4 items-center mt-7 px-1">
          <li className="w-6 h-6">
            <Image src={GithubIcon} alt="Github logo" />
          </li>
          <li className="w-8 h-8">
            <Image src={LinkedInIcon} alt="LinkedIn logo" />
          </li>
        </ul>
      </header>
      <main className="pb-10">
        <section id="about" className="mt-7 leading-customHeight">
          <h3 className="text-slate-200 font-extrabold text-sm my-9 tracking-widest">ABOUT</h3>
          <p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the 
            rabbit hole of coding and web development. Fast-forward to today, and I&rsquo;ve had the privilege of building
             software for an advertising agency, a start-up, a huge corporation, and a digital product studio.</p>
           <p className="mt-4">My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy
             building software in the sweet spot where design and engineering meet — things that look good but are also
              built well under the hood. In my free time, I&rsquo;ve also released an online video course that covers everything
               you need to know to build a web app with the Spotify API.</p>
           <p className="mt-4">When I&rsquo;m not at the computer, I&rsquo;m usually rock climbing, reading, hanging out with my wife and two cats, 
            or running around Hyrule searching for Korok Seeds.</p>
        </section>
        <section id="experience" className="mt-20">
          <h3 className="text-slate-200 font-extrabold text-sm my-11 tracking-widest">EXPERIENCE</h3>
          <ul>
            <li className="sm:flex">
              <h5 className="text-xs sm:w-1/4">Oct 2023 - PRESENT</h5>
              <div className="sm:w-3/4">
                <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">Software Engineer - <a>Mavin</a></h3>
                <p className="text-sm">Build and maintain critical components used to construct Klaviyo&rsquo;s frontend, across the whole product. 
                  Work closely with cross-functional teams, including developers, designers, and product managers, to 
                  implement and advocate for best practices in web accessibility.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">C#</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">SQL</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">.NET</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">XAML</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Legacy ERP</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Microsoft SQL</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10 mr-2">MySQL</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10 mr-2">Dapper</span>
                </div>
              </div>
            </li>
            <li className="mt-11 sm:flex">
              <h5 className="text-xs sm:w-1/4">Aug 2022 - Present</h5>
              <div className="sm:w-3/4">
                <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">Software Developer - <a>Self-Taught</a></h3>
                <p className="text-sm">Build and maintain critical components used to construct Klaviyo&rsquo;s frontend, across the whole product. 
                  Work closely with cross-functional teams, including developers, designers, and product managers, to 
                  implement and advocate for best practices in web accessibility.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Typescript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Javascript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Next</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">React</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Firebase</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10 mr-2">HTML</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10 mr-2">CSS</span>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <span className="text-slate-200 font-extrabold text-md my-11 tracking-widest">View Full Resume</span>
            <Image src={Arrow} alt="ArrowIcon" width={20} height={20}/>
          </div>
        </section>
        <section id="projects" className="mt-10">
          <h3 className="text-slate-200 font-extrabold text-sm my-11 tracking-widest">PROJECTS</h3>
          <ul>
            <li className="sm:flex flex-row-reverse">
              <div className="sm:w-3/4">
                <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">BillEase</h3>
                <p className="text-sm">Build and maintain critical components used to construct Klaviyo&rsquo;s frontend, across the whole product. 
                  Work closely with cross-functional teams, including developers, designers, and product managers, to 
                  implement and advocate for best practices in web accessibility.</p>
                <div className="my-6 flex flex-wrap gap-2">
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Next</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Firebase</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Typescript</span>
                  <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind</span>
                </div>
              </div>
              <div className="w-40 sm:w-1/4 sm:pr-10 sm:mt-3">
                <Image src={BillEaseInvoices} alt="Screenshot of BillEase App"/>
              </div>
            </li>
            <li className="mt-11">
              <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">DevLinks</h3>
              <p className="text-sm">Build and maintain critical components used to construct Klaviyo&rsquo;s frontend, across the whole product. 
                Work closely with cross-functional teams, including developers, designers, and product managers, to 
                implement and advocate for best practices in web accessibility.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Next</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Firebase</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Typescript</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind</span>
              </div>
            </li>
            <li className="mt-11">
              <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">WorldExploreX</h3>
              <p className="text-sm">Build and maintain critical components used to construct Klaviyo&rsquo;s frontend, across the whole product. 
                Work closely with cross-functional teams, including developers, designers, and product managers, to 
                implement and advocate for best practices in web accessibility.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">React</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Javascript</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">API</span>
              </div>
            </li>
            <li className="mt-11">
              <h3 className="text-slate-200 font-semibold text-md my-2 tracking-widest">NewsHomePage</h3>
              <p className="text-sm">Build and maintain critical components used to construct Klaviyo&rsquo;s frontend, across the whole product. 
                Work closely with cross-functional teams, including developers, designers, and product managers, to 
                implement and advocate for best practices in web accessibility.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Javascript</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Tailwind</span>
                <span className="rounded-full p-2 text-xs text-teal-300 bg-teal-400/10">Semantic HTML</span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
