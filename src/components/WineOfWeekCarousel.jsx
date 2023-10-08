import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiConfig";

export default function RandomWinesCarousel() {
  const [randomWines, setRandomWines] = useState([]);
  const winesPerSlide = 4;
  const totalWinesToFetch = 40;

  useEffect(() => {
    const fetchRandomWines = async () => {
      try {
        const response = await api.get("/wines");
        const allWines = response.data;
        const shuffledWines = allWines.sort(() => Math.random() - 0.5);
        setRandomWines(shuffledWines.slice(0, totalWinesToFetch));
      } catch (error) {
        console.error("Error fetching random wines:", error);
      }
    };

    fetchRandomWines();
  }, []);

  const chunkedWines = [];
  for (let i = 0; i < randomWines.length; i += winesPerSlide) {
    chunkedWines.push(randomWines.slice(i, i + winesPerSlide));
  }

  return (
    <div className="h-full overflow-hidden mt-6 bg-gray-100">
      <Carousel
        transition={{ duration: 3 }}
        className="rounded-xl"
        loop={true}
        autoplay={true}
        autoplayDelay={6000}
      >
        {chunkedWines.map((slideWines, slideIndex) => (
          <div className="flex justify-between " key={slideIndex}>
            {slideWines.map((wine, wineIndex) => (
              <div
                className="w-1/4 px-4 py-4 text-center h-1/2"
                key={wineIndex}
              >
                <Link
                  to={`/search/wine-detail/${wine._id}`}
                  className="overflow-hidden"
                >
                  <div className=" items-center h-60 cursor-pointer mt-4 mb-2 pb-2 pt-2 px-4 bg-white overflow-scroll">
                    <img
                      src={wine.img}
                      alt={`Random Wine ${wineIndex + 1}`}
                      className="items-center object-contain h-40 w-40"
                    />
                    <div className="flex justify-center">
                      <h1 className="text-sm sm:text-sm md:text-md lg:text-lg font-bold">
                        {wine.WineName}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
