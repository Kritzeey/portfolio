import { projects } from "lib/constants";
import ProjectIcon from "~/components/project-icon";

export default function Projects() {
  return (
    <section
      id="achievements"
      className="bg-gray-900 h-[75vh] w-full flex flex-col items-center justify-center gap-12"
    >
      <span className="text-4xl font-bold">Projects</span>
      <div className="grid-cols-2 grid w-full max-w-2xl gap-8">
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
