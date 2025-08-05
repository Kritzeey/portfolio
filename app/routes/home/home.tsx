import type { Route } from "./+types/home";
import Welcome from "./sections/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Val's Portfolio | Home" },
    { name: "description", content: "Home page." },
  ];
}

export default function Home() {
  return (
    <main>
      <Welcome />
    </main>
  );
}
