import React from "react";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png",
      name: "Html",
    },
    {
      id: 2,
      logo: "/css.png",
      name: "CSS",
    },
    {
      id: 3,
      logo: "/javascript.png",
      name: "JavaScript",
    },
    {
      id: 4,
      logo: "/reactjs.png",
      name: "ReactJs",
    },
    {
      id: 5,
      logo: "/nextjs.svg",
      name: "NextJs",
    },
    {
      id: 6,
      logo: "/node.png",
      name: "NodeJs",
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container   max-md:w-[80%] mx-auto px-4 md:px-20 my-16"
    >
      <div>
        {/* Heading */}
        <h2 className="text-white text-center text-[25px] sm:text-[30px] md:text-[35px] xl:text-[45px] headingColor font-bold montserrat">
          Technologies <span className="">I've Mastered</span>
        </h2>

        <p className="text-center mb-12 text-white mt-[30px]">
          I've more than 4 years of experience in the following technologies.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-gray-800 text-white rounded-lg shadow-lg w-full p-6 hover:scale-105 transform transition duration-300"
            >
              {/* Number at the top */}
              <div className="text-5xl font-bold text-pink-500 mb-4">0{id}</div>

              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={logo}
                  className="w-[150px] h-[150px] rounded-full border-4 p-2 border-gray-700"
                  alt={name}
                />
              </div>

              {/* Name */}
              <div className="text-center text-xl font-semibold">{name}</div>

              {/* Button */}
              <div className="text-center mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
