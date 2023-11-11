import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <div className="flex items-center">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <i className="fa-solid fa-bars fa-xl hover:text-[var(--navy-pink)]"></i>
          </label>
          <input
            className="hidden"
            type="checkbox"
            id="menu-toggle"
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div
          className={`md:flex md:items-center md:w-auto w-full md:block order-3 md:order-1 transition-transform duration-300 transform ${
            menuOpen
              ? "scale-y-100 h-auto opacity-100"
              : "scale-y-0 h-0 opacity-0"
          } origin-top-right md:origin-top md:absolute right-0 top-16 md:top-0 md:right-0 bg-white md:bg-transparent overflow-hidden opacity-100`}
          id="menu"
        >
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <a
                className="block md:inline-block no-underline hover:text-[var(--navy-pink)] hover:underline py-2 px-4"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block md:inline-block no-underline hover:text-[var(--navy-pink)] hover:underline py-2 px-4"
                href="#"
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="block md:inline-block no-underline hover:text-[var(--navy-pink)] hover:underline py-2 px-4"
                href="#"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <a
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            href="#"
          >
            <a
              href="/"
              className=" hover:text-[var(--pink)] transition-all duration-200"
            >
              <i className="fa-regular fa-calendar-days mr-3 xl:-ml-16"></i>
              EVENTUALL.IO
            </a>
          </a>
        </div>
        <div
          className="md:flex items-center order-2 md:order-3"
          id="nav-content"
        >
          <a className="inline-block no-underline hover:text-black" href="#">
            <i className="fa-solid fa-user fa-xl hover:text-[var(--pink)] transition-all duration-200"></i>
          </a>
          <a
            className="pl-3 inline-block no-underline hover:text-black"
            href="#"
          ></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
