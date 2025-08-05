import TechIcon from "~/components/tech-icon";

const techs = [
  {
    img: "/typescript.svg",
    color: "#007acc",
  },
  {
    img: "/react.svg",
    color: "#61DAFB",
  },
  {
    img: "/nextjs.svg",
    color: "#ffffff",
  },
  {
    img: "/nodejs.svg",
    color: "#5fa04e",
  },
  {
    img: "/nestjs.svg",
    color: "#df234f",
  },
  {
    img: "/svelte.svg",
    color: "#ff3e00",
  },
];

export default function Techs() {
  return (
    <section
      id="techs"
      className="h-dvh w-full flex flex-col items-center justify-center gap-8"
    >
      <span className="text-4xl font-bold">Techs I've Used</span>
      <div className="grid grid-cols-6 gap-4">
        {techs.map((tech) => (
          <TechIcon color={tech.color} img={tech.img} />
        ))}
      </div>
    </section>
  );
}
