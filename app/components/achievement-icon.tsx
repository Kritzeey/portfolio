import { Link } from "react-router";

interface Props {
  title: string;
  link: string;
  img: string;
}

export default function AchievementIcon({ img, title, link }: Props) {
  return (
    <div className="items-center gap-4 justify-between mx-auto w-full max-w-4xl flex py-6 px-6 rounded-2xl bg-white/5 border-2 border-purple-400">
      <div className="size-16 flex items-center justify-center border rounded-full shrink-0">
        <img src={img} className="scale-30" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="text-xl font-bold">{title}</span>
        <Link className="underline" to={link}>
          Devpost Link
        </Link>
      </div>
    </div>
  );
}
