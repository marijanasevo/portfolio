import {SiGithub} from "react-icons/si";
import {RxOpenInNewWindow} from "react-icons/rx";
import Image from "next/image";
import {ProjectsData} from "@/app/projects-data";

type ProjectProps = {
  project: ProjectsData;
  isEven: number
}

const Project = ({ project, isEven }: ProjectProps) => {

  return (
    <div className="project md:grid grid-cols-12 items-center">
      <div
        className={`${isEven ? "col-start-6" +
          " col-end-13 justify-items-end text-right" : "col-start-1 col-end-8 "} row-span-full grid gap-2.5 relative`}>
        <div>
          <span className="text-xs">Project Name</span>
          <h3 className="font-serif text-2xl">{project.title}</h3>
        </div>
        <p className="bg-light-warm p-4 relative z-20 text-15">
          {project.description}
        </p>

        <ul
          className="flex gap-2 flex-wrap text-xs text-pink relative z-20 tracking-wider">
          {project.techList.map((tech, i) => (
            <li className="pl-1" key={i}>{tech}</li>
          ))}
        </ul>

        <ul className="flex relative -left-2.5">
          {project.githubURL && (
            <li>
              <a className="block p-2.5 hover:text-pink" target="_blank"
                 href={project.githubURL}>
                <SiGithub className="w-5 h-5"/>
              </a>
            </li>
          )}
          <li>
            <a className="block p-2.5 hover:text-pink" target="_blank"
               href={project.liveURL}>
              <RxOpenInNewWindow className="w-5 h-5"/>
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`project-img-container ${isEven ? "col-start-1 col-end-7" : "col-start-7 col-end-13"} row-span-full relative h-64 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:block before:z-10 /*before:bg-dim-purple*/ before:opacity-40 before:hover:opacity-0 before:transition hidden md:block`}>
        <Image className={`${isEven ? "object-right" : "object-left"} object-contain`} src={project.thumbnail}
               alt={project.title + ` project thumbnail`} fill={true}/>
      </div>
    </div>
  );
}

export default Project;