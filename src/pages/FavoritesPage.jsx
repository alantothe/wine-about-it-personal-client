import { Typography } from "@material-tailwind/react";
import WineDetailFavorite from "../components/WineDetailFavorite";
import { getWine } from "../api/api";
import { useEffect, useState } from "react";
import { getUser } from "../api/users";

export default function Favorites({ user }) {
  const [wines, setWines] = useState([]);

  const fetchWines = async () => {
    try {
      const calledUser = await getUser(user.id);

      const { favorites } = calledUser;
      const winePromises = favorites.map(getWine);

      // able to call mulitlple  calls promise.all to wait for all promises to resolve,
      const fetchedWines = await Promise.all(winePromises);

      setWines(fetchedWines);
    } catch (error) {
      console.log("An error occurred while fetching wines:", error);
    }
  };

  useEffect(() => {
    fetchWines();
  }, [user]);

  return (
    <div className="pb-5">
      <div>
        <Typography
          className="flex items-center text-4xl font-black py-5 pl-10"
          style={{
            fontFamily: "'HelpUsGiambattista', sans-serif",
            color: "rgb(159, 0, 63)",
            borderBottom: "1px solid rgb(159, 0, 63)",
          }}
        >
          Favorites ({wines.length})
        </Typography>
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-8">
        {wines.map((wine, index) => (
          <div className="wine-container flex" key={index}>
            <WineDetailFavorite wine={wine} user={user} />
          </div>
        ))}
      </div>
      {wines.length === 0 ? <div style={{ height: "43vh" }}></div> : null}
    </div>
  );
}
