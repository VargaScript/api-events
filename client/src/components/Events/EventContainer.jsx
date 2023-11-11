import React, { useState, useEffect } from "react";
import axios from "axios";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isExtendedVisible, setIsExtendedVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const getEvents = () => {
    axios.get("http://localhost:3000/events").then((response) => {
      setEvents(response.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setIsSearchVisible(false);
    } else {
      setIsSearchVisible(true);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setIsSearchVisible(false);
  };

  const handleSearchIconClick = (e) => {
    e.preventDefault();
    setIsSearchVisible(!isSearchVisible);
  };

  const closeDetailedView = () => {
    setSelectedEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsAnimating(true);

    setTimeout(() => {
      setIsExtendedVisible(true);
      setIsAnimating(false);
    }, 300);
  };

  const filteredEvents = events.filter((event) =>
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <section className="bg-[var(--sky-blue)] py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <p className="uppercase tracking-wide no-underline font-bold text-gray-800 text-xl">
                Events coming soon
              </p>
              <div className="flex items-center" id="store-nav-content">
                {!isSearchVisible && (
                  <a
                    className="pl-3 inline-block no-underline hover:text-black"
                    href="javascript:void(0)"
                    onClick={handleSearchIconClick}
                  >
                    <i className="fa-solid fa-magnifying-glass fa-xl cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-[var(--navy-pink)]"></i>
                  </a>
                )}
                {isSearchVisible && (
                  <div className="pl-3 relative inline-block no-underline hover:text-black">
                    <input
                      type="text"
                      placeholder="Search by location"
                      className={`absolute w-80 -top-8 right-0 mt-2 p-2 border rounded-md transition-all duration-300 ${
                        isSearchVisible
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                      onChange={handleSearch}
                      value={searchTerm}
                    />
                    {searchTerm !== "" && (
                      <span
                        className="absolute top-0 right-0 mt-2 mr-2 p-2 cursor-pointer"
                        onClick={clearSearch}
                      >
                        <i class="fa-solid fa-circle-xmark"></i>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="container hover:cursor-pointer mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredEvents.map((val, key) => (
              <div
                key={key}
                className="p-6 bg-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                onClick={() => handleEventClick(val)}
              >
                <a
                  href={"#"}
                  className="hover:text-[var(--navy-pink)] transition-all duration-300 rounded-md overflow-hidden block"
                >
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <p className="font-bold text-xl uppercase text-black">
                        {val.title}
                      </p>
                      <p className="mt-2 text-black">
                        <span className="font-bold">Autor:</span> {val.author}
                      </p>
                      <p className="mt-2 text-black">
                        <span className="font-bold">Locación: </span>{" "}
                        {val.location}
                      </p>
                    </div>
                    <p className="mt-4">{val.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {selectedEvent && (
            <div
              className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
                isExtendedVisible ? "opacity-100" : "opacity-0"
              } ${isAnimating ? "transition-opacity duration-300" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                closeDetailedView();
                return false;
              }}
            >
              <div
                className="bg-white p-8 rounded-md relative w-5/12"
                onClick={(e) => {
                  e.stopPropagation();
                  return false;
                }}
              >
                <button
                  className="absolute top-2 right-2 p-2 cursor-pointer text-gray-600 hover:text-[var(--navy-pink)] transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    closeDetailedView();
                    return false;
                  }}
                >
                  <i className="fas fa-times fa-2x"></i>
                </button>
                <div>
                  <img
                    className="mt-5 w-full h-48 object-cover rounded-md"
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                  />
                  <p className="font-bold text-2xl uppercase text-[var(--navy-pink)] mt-4">
                    {selectedEvent.title}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <span className="font-bold">Autor:</span>{" "}
                    {selectedEvent.author}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <span className="font-bold">Locación:</span>{" "}
                    {selectedEvent.location}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <span className="font-bold">Fecha:</span>{" "}
                    {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "2-digit",
                    })}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <span className="font-bold">Descripción:</span>{" "}
                    {selectedEvent.description}
                  </p>
                  <div className="mt-2 text-gray-700">
                    <span className="font-bold text-justify">Detalles:</span>{" "}
                    {selectedEvent.text}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventContainer;
