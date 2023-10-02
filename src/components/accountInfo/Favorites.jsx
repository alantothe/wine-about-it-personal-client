import { useState, useEffect } from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { getUser } from "../../api/users";
import { getWine } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Favorites({ user }) {
  const navigate = useNavigate();
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
    <div>
      {wines ? (
        <Card className="w-full bg-gray-100" style={{ height: "55vh" }}>
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            My Favorites
          </div>
          <CardBody className="overflow-scroll">
            <div className="text-center py-4 text-gray-600">
              {wines.map((wine, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <img className="h-20 w-20 object-contain" src={wine.img} />
                  <p
                    onClick={() => navigate(`/search/wine-detail/${wine._id}`)}
                    style={{ color: "rgb(159, 0, 63)" }}
                    className="cursor-pointer hover:underline"
                  >
                    {wine.WineName}
                  </p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className="w-full">
          <div className="bg-black text-white text-center py-6 font-bold text-3xl">
            My Favorites
          </div>
          <CardBody className="flex flex-col">No favorites available.</CardBody>
        </Card>
      )}
    </div>
  );
}
