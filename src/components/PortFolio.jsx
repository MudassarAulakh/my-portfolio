import React, { useState } from "react";

function PortFolio() {
  // State to manage the number of visible projects and toggle between showing more or less
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showAll, setShowAll] = useState(false);

  // Data for projects
  const cardItem = [
    { id: 1, logo: "/athenasol.webp", href: "https://athenasols.com/" },
    { id: 2, logo: "/andleave.webp", href: "https://xtrail-fu1o.vercel.app/" },
    { id: 3, logo: "/children.webp", href: "https://babies-ruby.vercel.app/" },
    { id: 4, logo: "/dogi.webp", href: "https://dawg-project.vercel.app/" },
    {
      id: 5,
      logo: "/everything (2).webp",
      href: "https://apple-wallet-kohl.vercel.app/",
    },
    {
      id: 6,
      logo: "/feature.webp",
      href: "https://springboard-eosin.vercel.app/",
    },
    {
      id: 7,
      logo: "/SocialV.png",
      href: "https://wordpress.iqonic.design/product/wp/socialv/",
    },
    { id: 8, logo: "/EveryWhere.png", href: "https://anywhereweroam.com/" },
  ];

  // Function to toggle between showing more or less projects
  const toggleProjects = () => {
    if (showAll) {
      setVisibleProjects(6); // Show initial 6 projects when toggled back to less
    } else {
      setVisibleProjects(cardItem.length); // Show all projects when "Show More" is clicked
    }
    setShowAll(!showAll); // Toggle between the states
  };

  return (
    <div id="Portfolio" className="bg-[#161513] text-white py-16 montserrat">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-white text-center text-[25px] sm:text-[30px] md:text-[35px] xl:text-[45px] headingColor font-bold montserrat">
            My latest <span className="text-pink-500">work</span>
          </h2>
        </div>

      {/* Grid for projects */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {cardItem.slice(0, visibleProjects).map(({ id, logo, name, href }) => (
    <div
      key={id}
      className="relative rounded-lg overflow-hidden shadow-lg max-md:w-[80%] mx-auto transform hover:scale-105 transition-transform duration-300 hover:border-[4px] border-pink-600"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {/* Image */}
        <img
          src={logo}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
            onClick={toggleProjects}
            className="
            px-4  py-2 s rounded-lgtext-white font-semibold text-nowrap hover:scale-[1.1] hover:text-white"
            style={{
              border: "none",
              borderRadius: "50px",
              background:
                "linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)",
              fontSize: "18px",
              marginTop: "15px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Click me
          </button>
        </div>
      </a>
    </div>
  ))}
</div>


        {/* Toggle Button (Show More / See Less) */}
        <div className="text-center mt-12">
          <button
            onClick={toggleProjects}
            className="
            px-4 sm:px-8 py-2 sm:py-4 rounded-lgtext-white font-semibold text-nowrap hover:scale-[1.1] hover:text-white"
            style={{
              border: "none",
              borderRadius: "50px",
              background:
                "linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)",
              fontSize: "18px",
              marginTop: "15px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {showAll ? "See Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
