import React from "react";
import Marks1 from "../assets/images/Marks/3.png";

function HeaderMarks() {
  // resimler
  const marks = [Marks1, Marks1, Marks1, Marks1, Marks1];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 ">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-5 mt-10">
          {marks.map((mark, index) => (
            // Mobil ekranlarda son 2 resmi gösterme
            <div key={index} className={index >= 3 ? "hidden sm:block" : ""}>
              <img src={mark} alt={`Mark ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderMarks;
