import { useGSAP } from "@gsap/react";
import { projects } from "lib/constants";
import ProjectIcon from "~/components/project-icon";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Projects() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#projects",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section className="bg-gray-900 h-[75vh] w-full flex flex-col items-center justify-center gap-12">
      <span id="projects" className="text-4xl font-bold">
        Projects
      </span>
      <div id="projects" className="grid-cols-2 grid w-full max-w-2xl gap-8">
        {projects.map((project) => (
          <ProjectIcon
            key={project.id}
            description={project.description}
            title={project.title}
            link={project.link}
            image={project.image}
          ></ProjectIcon>
        ))}
      </div>
    </section>
  );
}
