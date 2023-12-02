import React from "react";
function Succes() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* İçerikler buraya eklenecek */}
          <div className="col-span-3 sm:col-span-1 hidden sm:block">
            <p
              className="text-7xl font-londrina-outline font-medium"
              style={{
                background: "linear-gradient(1deg, #4b34e4, #ee346b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              12K+
            </p>
            <p className="text-1xl font-medium">Project Complete</p>
          </div>
          <div className="col-span-3 sm:col-span-1 hidden sm:block">
            <h1
              className="text-7xl font-londrina-outline font-medium"
              style={{
                background: "linear-gradient(1deg, #4b34e4, #ee346b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              7K+
            </h1>
            <h5 className="text-1xl font-medium">Happy Client</h5>
          </div>
          <div className="col-span-3 sm:col-span-1 hidden sm:block">
            {/* hidden class for small screens */}
            <h1
              className="text-7xl font-londrina-outline font-medium"
              style={{
                background: "linear-gradient(1deg, #4b34e4, #ee346b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              10+
            </h1>
            <h5 className="text-1xl font-medium">Years Experience</h5>
          </div>
          <div className="col-span-3 sm:col-span-1 hidden sm:block">
            <h1
              className="text-7xl font-londrina-outline font-medium"
              style={{
                background: "linear-gradient(1deg, #4b34e4, #ee346b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              270+
            </h1>
            <h5 className="text-1xl font-medium">Win Awards</h5>
          </div>
          {/* İçerikler buraya eklenecek */}
        </div>
      </div>
    </>
  );
}

export default Succes;
