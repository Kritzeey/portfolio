interface Props {
  img: string;
  color: string;
}

export default function TechIcon({ img, color }: Props) {
  return (
    <div
      className="col-span-1 border-2 p-2 size-16 rounded-2xl"
      style={{ borderColor: color }}
    >
      <img src={img} />
    </div>
  );
}
