import React, { useState, useEffect } from "react";
import axios from "axios";

const Carrousel = () => {
  const [eventsList, setEventsList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events");
        setEventsList(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    getEvents();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === eventsList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [eventsList]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === eventsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventsList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out transform"
        style={{
          width: `${eventsList.length * 100}%`,
          transform: `translateX(-${
            (currentIndex / eventsList.length) * 100
          }%)`,
        }}
      >
        {eventsList.length > 0 &&
          eventsList.map((val, index) => (
            <div
              key={index}
              className={`w-full h-96 flex-shrink-0 bg-cover bg-right`}
              style={{
                backgroundImage: `url(${val.image})`,
                backgroundSize: "cover",
                width: `${100 / eventsList.length}%`,
              }}
            >
              <div className="container mx-auto flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black mt-2"
                    href="#"
                  >
                    <p className="text-2xl font-bold uppercase hover:text-[var(--navy-pink)] hover:transition-all hover:duration-300">
                      {val.title}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-white cursor-pointer"
      >
        <i className="fa-solid fa-chevron-left fa-lg hover:text-[var(--navy-pink)]"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-white cursor-pointer"
      >
        <i className="fa-solid fa-chevron-right fa-lg hover:text-[var(--navy-pink)]"></i>
      </button>
    </div>
  );
};

export default Carrousel;
