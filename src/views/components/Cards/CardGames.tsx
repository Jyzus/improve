import { Link } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  link: string;
}

export const CardGames = ({ img, title, link }: Props) => {
  return (
    <Link
      to={"games/" + link}
      className="w-44 h-44 flex flex-col items-center justify-center gap-4"
    >
      <img src={img} alt={title} className="w-36 h-36 rounded-md" />
      <p className="font-semibold text-white">{title}</p>
    </Link>
  );
};
