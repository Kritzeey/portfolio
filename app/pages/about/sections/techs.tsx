import { useGSAP } from "@gsap/react";
import TechIcon from "~/components/tech-icon";
import gsap from "gsap";
import { techs } from "lib/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Techs() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#fade-in",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#fade-in",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section
      id="techs"
      className="bg-gray-900 h-[50dvh] w-full flex flex-col items-center justify-center gap-12"
    >
      <span id="fade-in" className="text-4xl font-bold">
        Techs and skills I've used before
      </span>
      <div id="fade-in" className="grid grid-cols-14 gap-4">
        {techs.map((tech) => (
          <TechIcon
            key={tech.id}
            color={tech.color}
            img={tech.img}
            link={tech.link}
          />
        ))}
      </div>
    </section>
  );
}
