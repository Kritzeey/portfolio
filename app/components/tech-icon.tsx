import { Link } from "react-router";

interface Props {
  img: string;
  color: string;
  link: string;
}

export default function TechIcon({ img, color, link }: Props) {
  return (
    <Link to={link}>
      <div
        className="hover:scale-110 transform col-span-1 border-2 p-2 size-16 rounded-2xl duration-200 cursor-pointer"
        style={{ borderColor: color }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            `0 0 16px 4px ${color}`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        <img src={img} />
      </div>
    </Link>
  );
}
