import Description from "./sections/description";
import type { Route } from "./+types/about";
import Techs from "./sections/techs";
import Achievements from "./sections/achievements";
import Projects from "./sections/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Val's Portfolio | About" },
    { name: "description", content: "About page." },
  ];
}

export default function About() {
  return (
    <main>
      <Description />
      <Techs />
      <Achievements />
      <Projects />
    </main>
  );
}
