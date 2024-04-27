import Image from "next/image";
import GithubIcon from "../../public/github-142-svgrepo-com.svg";
import LinkedInIcon from "../../public/linkedin-svgrepo-com.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start bg-slate-900 text-slate-400 px-6">
      <header className="my-12">
        <div>
          <h1 className="text-4xl text-slate-200 font-bold tracking-tight">Dustin Kurtz</h1>
          <h3 className="text-slate-200 text-lg font-medium tracking-tight my-3.5">Software Engineer</h3>
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
      <main>
        <section id="about" className="mt-7 leading-customHeight">
          <h3 className="text-slate-200 font-extrabold text-sm my-9 tracking-widest">ABOUT</h3>
          <p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the 
            rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building
             software for an advertising agency, a start-up, a huge corporation, and a digital product studio.</p>
           <p className="mt-4">My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy
             building software in the sweet spot where design and engineering meet — things that look good but are also
              built well under the hood. In my free time, I've also released an online video course that covers everything
               you need to know to build a web app with the Spotify API.</p>
           <p className="mt-4">When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, 
            or running around Hyrule searching for Korok Seeds.</p>
        </section>
        <section id="experience" className="mt-20">
          <h3 className="text-slate-200 font-extrabold text-sm my-11 tracking-widest">EXPERIENCE</h3>
          <ul>
            <li>
              <h5 className="text-xs">Oct 2023 - PRESENT</h5>
              <div>
                <h3 className="text-slate-200 font-extrabold text-sm my-2 tracking-widest">Software Engineer - <a>Mavin</a></h3>
                <p className="text-xs">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. 
                  Work closely with cross-functional teams, including developers, designers, and product managers, to 
                  implement and advocate for best practices in web accessibility.</p>
              </div>
            </li>
            <li>
              <h5 className="text-xs">Aug 2022 - Present</h5>
              <div>
                <h3 className="text-slate-200 font-medium text-md my-2 tracking-widest">Software Developer - <a>Self-Taught</a></h3>
                <p className="text-xs">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. 
                  Work closely with cross-functional teams, including developers, designers, and product managers, to 
                  implement and advocate for best practices in web accessibility.</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
