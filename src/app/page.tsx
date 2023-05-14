import Image from "next/image";
import logo from '../../public/circle-logo.svg';
import Link from "next/link";

import { MdDownloading } from "react-icons/md";

import Project from "@/app/components/project";
import Socials from "@/app/components/socials";

import projects from "./projects-data";

export default function Home() {
  return (
    <>
      <main className="p-10 text-grayish relative flex flex-col gap-28">
        <nav className="flex justify-between">
          <Image
            className="flex-shrink-0"
            src={logo}
            alt={"Logo icon"}
            width={45}
            height={48}
          />

          <Link href={'./Marijana_Sevo_CV.pdf'} download target={"_blank"} className="cursor-pointer py-2 px-3 rounded flex gap-1 items-center font-bold transition text-grayish font-serif hover:text-pink">
            resume <MdDownloading className="text-2xl" />
          </Link>
        </nav>

        <div className="profile-image self-center"></div>

        <section className="self-center font-normal flex flex-col gap-5 max-w-50ch">
          <h1 className="text-2xl">Hi, I&apos;m Marijana.</h1>

          <h2 className="text-4xl font-bold">I build things for the web.</h2>
          <p className="font-serif">
            As a software engineer, I take pride in building products that solve
            problems and provide immersive digital experiences. By seamlessly
            blending functionality and design while prioritizing simplicity, I
            ensure that my products are{" "}
            <span className="font-bold">closer to people</span>, easy to use,
            and effective.
          </p>
        </section>

        <section className="self-center font-normal flex flex-col gap-10 lg:max-w-4xl max-w-2xl relative md:pl-10 xl:pl-0">
          <h2 className="text-4xl font-bold">Some of my projects</h2>

          {projects.length &&
            projects.map((project, i) => (
              <Project key={i} isEven={i % 2} project={project} />
            ))}
        </section>
      </main>

      <Socials />
    </>
  );
}
