import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-gray-600 body-font">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="text-center text-2xl gradient-logo">
            XEST
            <br />
            FOLIO
          </span>
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="navbar-svg">
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 14"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="1%"
                    style={{ stopColor: "#4b34e4", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ee346b", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                stroke="url(#gradient)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
        </button>

        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="/first-link"
                className="block md:inline-block text-black hover:text-gray-900 mr-5 mt-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/first-link"
                className="block md:inline-block text-black hover:text-gray-900 mr-5 mt-2"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="/first-link"
                className="block md:inline-block text-black hover:text-gray-900 mr-5 mt-2"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/first-link"
                className="block md:inline-block text-black hover:text-gray-900 mt-2 md:mr-4"
              >
                FAQ
              </a>
            </li>
            <li>
              <div className="button-container mt-2">
                <button className=" inline-flex items-center navbar-contact-me bg-black text-white border-0 py-3 px-4 focus:outline-none hover:bg-gray-800 text-base mt-4 md:mt-0 relative overflow-hidden">
                  Contact Me
                </button>
                <div className="box-shadow-container"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
