import Navbar from "~/components/ui/navbar";
import type { Route } from "./+types/home";
import Welcome from "~/components/views/welcome";
import About from "~/components/views/about";
import Techs from "~/components/views/techs";
import Achievements from "~/components/views/achievements";
import Footer from "~/components/ui/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <About />
      <Techs />
      <Achievements />
      <Footer />
    </main>
  );
}
