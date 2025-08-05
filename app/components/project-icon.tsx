import { Link } from "react-router";

interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectIcon({
  description,
  title,
  link,
  image,
}: Props) {
  return (
    <div className="col-span-1 flex-col items-center gap-4 justify-between mx-auto w-full max-w-4xl flex py-6 px-6 rounded-2xl bg-white/5 border-2 border-purple-400">
      <div className="border-2 overflow-hidden flex items-center justify-center w-full h-48 rounded-2xl border-purple-400">
        <img src={image} className="object-fill" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="text-2xl font-bold">{title}</span>

        <span className="text-md">{description}</span>

        <Link className="underline" to={link}>
          GitHub Link
        </Link>
      </div>
    </div>
  );
}
