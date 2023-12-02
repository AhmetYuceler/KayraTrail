import React from "react";
import Featuresimg1 from "../assets/images/Features/1.png";
import Featuresimg2 from "../assets/images/Features/2.png";

const Features = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row">
        {/* Sol taraf - col md-4 */}
        <div className="w-full sm:w-2/4">
          <div className="p-4">
            <p
              className="navbar-contact-me mb-2"
              style={{
                background: "linear-gradient(0.5deg, #4b34e4, #ee346b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              FEATURES
            </p>
            <h3 className="text-4xl font-plus-jakarta font-bold">
              Giving Your Business <br /> Some Great Ideas
            </h3>
            <p className="text-gray-400 mt-5">
              Every designer needs the right tools to do the perfect job. Every
              designer needs the right tools to do the perfect job. Every
              designer needs the right tools to do the perfect job.
            </p>
            <div className="flex">
              <div className="button-container">
                <button className="features-contact-us mt-10 bg-black text-white border-0 py-3 px-4 hover:bg-gray-800">
                  Contact US
                </button>
                <div className="box-shadow-container mt-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ taraf - col md-8 */}
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* İlk içerik - Üstte */}
            <div className="w-full sm:w-1/2">
              <div className="p-4 mt-16">
                <img src={Featuresimg1} alt="Resim 1" className="w-full mb-4" />
                <p className="text-2xl font-bold mb-3">UX Experience</p>
                <p className="text-gray-400">
                  I design products that are more <br /> than pretty. I make
                  them usable.
                </p>
              </div>
            </div>

            {/* İkinci içerik - Üstte */}
            <div className="w-full sm:w-1/2">
              <div className="p-4">
                <img src={Featuresimg2} alt="Resim 1" className="w-full mb-4" />
                <p className="text-2xl font-bold mb-3">UX Experience</p>
                <p className="text-gray-400">
                  I design products that are more <br /> than pretty. I make
                  them usable.
                </p>
              </div>
            </div>

            {/* Üçüncü içerik - Altta */}
            <div className="w-full sm:w-1/2">
              <div className="p-4 mt-3">
                <img src={Featuresimg2} alt="Resim 1" className="w-full mb-4" />
                <p className="text-2xl font-bold mb-3">UX Experience</p>
                <p className="text-gray-400">
                  I design products that are more <br /> than pretty. I make
                  them usable.
                </p>
              </div>
            </div>

            {/* Dördüncü içerik - Altta */}
            <div className="w-full sm:w-1/2">
              <div className="p-4 mt-[-7vh]">
                <img src={Featuresimg1} alt="Resim 1" className="w-full mb-4" />
                <p className="text-2xl font-bold mb-3">UX Experience</p>
                <p className="text-gray-400">
                  I design products that are more <br /> than pretty. I make
                  them usable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
