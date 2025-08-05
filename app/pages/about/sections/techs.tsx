import TechIcon from "~/components/tech-icon";

const techs = [
  {
    id: 1,
    img: "/python.svg",
    color: "#5A9FD4",
    link: "https://www.python.org/",
  },
  {
    id: 2,
    img: "/java.svg",
    color: "#0074BD",
    link: "https://www.java.com/",
  },
  {
    id: 3,
    img: "/javascript.svg",
    color: "#F0DB4F",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 4,
    img: "/typescript.svg",
    color: "#007acc",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    img: "/react.svg",
    color: "#61DAFB",
    link: "https://react.dev/",
  },
  {
    id: 6,
    img: "/nextjs.svg",
    color: "#ffffff",
    link: "https://nextjs.org/",
  },
  {
    id: 7,
    img: "/nodejs.svg",
    color: "#5fa04e",
    link: "https://nodejs.org/",
  },
  {
    id: 8,
    img: "/nestjs.svg",
    color: "#df234f",
    link: "https://nestjs.com/",
  },
  {
    id: 9,
    img: "/svelte.svg",
    color: "#ff3e00",
    link: "https://svelte.dev/",
  },
  {
    id: 10,
    img: "/express.svg",
    color: "#ffffff",
    link: "https://expressjs.com/",
  },
  {
    id: 11,
    img: "/postgresql.svg",
    color: "#336791",
    link: "https://www.postgresql.org/",
  },
  {
    id: 12,
    img: "/mongodb.svg",
    color: "#439934",
    link: "https://www.mongodb.com/",
  },
];

export default function Techs() {
  return (
    <section
      id="techs"
      className="h-dvh w-full flex flex-col items-center justify-center gap-12"
    >
      <span className="text-4xl font-bold">
        Techs and skills I've used before
      </span>
      <div className="grid grid-cols-6 gap-4">
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
