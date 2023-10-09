import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export default function WineDetail({ wine, handleClose }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search/wine-detail/${wine._id}`);
    if (typeof handleClose === "function") {
      handleClose();
    }
  };
  const truncate = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <div
      className="flex flex-col text-center gap-y-2.5 mt-5 bg-white w-100"
      onClick={() => handleClick()}
    >
      <img
        className="object-contain mt-5"
        src={wine.img}
        alt={wine.WineName}
        style={{ height: "50vh" }}
      />
      <Typography
        className="font-black"
        style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
      >
        {truncate(wine.WineName, 27)}
      </Typography>
      <Typography
        className="font-black text-green-500"
        style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
      >
        ${wine.Price}
      </Typography>
    </div>
  );
}
