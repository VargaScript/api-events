import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center pt-4">
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="flex w-full lg:text-right mt-6 md:mt-0 flex justify-center">
          <div className="px-3 md:px-0">
            <h3 className="text-center font-bold text-gray-900">
              Social Media
            </h3>
            <div className="w-full flex justify-center py-4 mt-0">
              <a
                href="#"
                className="mr-6 hover:text-[var(--navy-pink)] transition-all duration-300"
              >
                <i
                  className="fa-brands fa-facebook fa-2xl
                "
                ></i>
              </a>
              <a
                href="#"
                className="hover:text-[var(--navy-pink)] transition-all duration-300"
              >
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
