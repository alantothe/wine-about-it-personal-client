import { Link } from "react-router-dom";

export default function AllWines() {
  return (
    <div className="w-30 h-[450px] mt-3">
      <Link to="/filter/all">
        <img
          src="https://i.imgur.com/RgmX0Q3.jpg"
          alt="All Wines"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className=" mb-6 pb-6 text-center">
        <Link to="/filter/all" className="text-black-500 hover:none">
          All Wines
        </Link>
      </div>
    </div>
  );
}
