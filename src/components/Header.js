import React from "react";
import Headerimg from "../assets/images/Home/Headerimg.png";

function Header() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Right Section - Image (for small and mobile viewports) */}
        <div className="md:hidden w-full mb-4">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Headerimg}
          />
          {/* Mobil görünümde gösterilecek metin */}
          <div className="text-center text-white mt-[-10vh] font-plus-jakarta font-bold ">
            <span
              style={{ color: "white", fontSize: "8vh" }}
              className="md:hidden"
            >
              MIAMI
            </span>
            <br className="sm:inline-block " />
            <span
              className="md:hidden"
              style={{
                background: "black",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: "8vh",
                marginBottom: "-10px",
              }}
            >
              WALKER
            </span>
          </div>
        </div>

        {/* Left Section - Text */}
        <section className="text-gray-600  body-font md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
          {/* Gradient Text */}
          <h1 className="sm:text-9xl md:mb-20 font-medium text-gray-900 ">
            <span
              style={{
                background: "linear-gradient(45deg, #4b34e4, #ee346b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="hidden sm:block"
            >
              MIAMI
            </span>
            {/* Black Text */}
          </h1>
          <p className="mb-8 leading-relaxed md:mt-20">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot.
          </p>
          {/* Button Section */}
          <div className="flex justify-center">
            <div className="button-container">
              <button className="inline-flex items-center navbar-contact-me bg-black text-white border-0 py-3 px-4 focus:outline-none hover:bg-gray-800 text-base mt-4 md:mt-0 relative overflow-hidden">
                Book A Call
              </button>
              <div className="box-shadow-container"></div>
            </div>
          </div>
        </section>

        {/* Right Section - Image (for larger viewports) */}
        <div className="md:w-1/2 w-5/6 relative hidden md:block">
          {/* Overlay "R" on the image */}
          <div className="absolute top-1/2 left-4/4 transform -translate-x-3/4 -translate-y-2/3 text-center hidden sm:block">
            <h1 className="text-5xl md:text-9xl font-medium text-gray-900">
              {/* Black Text */}
              <span style={{ color: "#000", fontSize: "16vh" }}>WALK </span>
              <span style={{ color: "white", fontSize: "16vh" }}>ER</span>
            </h1>
          </div>
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Headerimg}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
