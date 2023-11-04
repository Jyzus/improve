import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/auth";

interface Props {
  img: string;
  title: string;
  link: string;
}

export const CardGames = ({ img, title, link }: Props) => {
  const { status } = useAuthStore((state) => state);
  return (
    <Link
      to={status == "logged" || status == "anonymous" ? `games/${link}` : "/"}
      className={`w-44 h-44 flex flex-col items-center justify-center gap-4 ${
        status == "not logged" && "opacity-70 cursor-default"
      }`}
    >
      <img
        src={img}
        alt={title}
        className={`w-36 h-36 rounded-md ${
          status == "not logged" && "grayscale"
        }`}
      />
      <p className="font-semibold text-white">{title}</p>
    </Link>
  );
};
