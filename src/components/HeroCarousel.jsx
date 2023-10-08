import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function HeroCarousel() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Carousel
      style={{ height: "70vh" }}
      loop={true}
      autoplay={false}
      autoplayDelay={4000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <figure className="relative w-full">
        <img
          src="https://i.imgur.com/KfnKjz8.jpg"
          alt="Wine glasses"
          className="relative w-screen object-cover object-bottom"
          style={{
            height: "70vh",
            fontFamily: "'HelpUsGiambattista', sans-serif",
          }}
        />
        <figcaption
          className={`flex-col mr-16 mb-40 absolute bottom-0 right-0 w-1/2 h-80 border border-white bg-white py-2 px-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm transition-opacity duration-500 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {" "}
          <div className="ml-5">
            <Typography
              style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
              className="mb-2 mt-2 text-4xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl "
            >
              We Have Over
            </Typography>
            <Typography
              style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
              className="mt-1 py-4 mb-1 text-7xl xs:text-sm sm:text-sm md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl"
            >
              200 Selections
            </Typography>
          </div>
          <button
            type="button"
            class="ml-5 mt-6 w-1/3 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            View Products
          </button>
        </figcaption>
      </figure>

      <img
        src="https://i.imgur.com/vKJ5d5K.jpg"
        alt="Wine glasses"
        className="w-screen object-cover"
        style={{
          height: "70vh",
          fontFamily: "'HelpUsGiambattista', sans-serif",
        }}
      />

      <figure className="relative w-full flex items-center justify-center">
        <img
          src="https://i.imgur.com/R7Bvovn.jpg"
          alt="Wine barrels"
          className="w-screen object-cover"
          style={{
            height: "70vh",
            fontFamily: "'HelpUsGiambattista', sans-serif",
          }}
        />
        <figcaption
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-28 border border-white bg-white py-2 px-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Typography
            style={{ fontFamily: "'HelpUsGiambattista', sans-serif" }}
            className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl mb-2 mt-2"
          >
            Free Shipping on Orders Over $100
          </Typography>
        </figcaption>
      </figure>

      <img
        src="https://i.imgur.com/y06fvEP.jpg"
        alt="Vineyard"
        className="w-screen object-cover"
        style={{ height: "70vh" }}
      />
    </Carousel>
  );
}
