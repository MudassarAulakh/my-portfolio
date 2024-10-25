import React from "react";
import pic from "../../public/my.jpg";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll"; // Import Link component

function Home() {
  return (
    <>
      {/* Background container */}
      <div className="relative bg-[#161513] min-h-screen flex flex-col justify-center items-center">
        <div
          name="Home"
          className="max-w-screen-xl container mx-auto max-md:w-[80%] px-4 md:px-20 my-28 relative z-10 text-center"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img
              src={pic}
              className="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-lg"
              alt="Profile"
            />
          </div>

          {/* Name and Title */}
          <h1 className=" text-[25px] sm:text-[35px] md:text-[35px] lg:text-[50px] xl:text-[60px] font-semibold tracking-wide text-white">
            Hi, I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF8908] to-[#B415FF]">
              <ReactTyped
                className="text-red-700 font-bold"
                style={{
                  background:
                    "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </span>
          </h1>

          <p className="text-white mt-4 mb-8 text-[16px] md:text-lg">
            I’m a frontend developer with 4 years of experience working with
            multiple companies and delivering top-notch web solutions.
          </p>

          {/* Buttons */}
          <div className="flex max-sm:flex-col justify-center space-x-4">
            {/* Link wrapping the "Connect with me" button */}
            <Link to="Contact" smooth={true} duration={500} offset={-70}>
              <button
                className="px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-white font-semibold text-nowrap hover:scale-[1.1] hover:text-white"
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
                Connect with me
              </button>
            </Link>

            <button
              className="px-5 sm:px-10 py-2 sm:py-4 text-white font-semibold rounded-full text-nowrap hover:scale-[1.1] hover:text-white hover:border-[#B415FF 106.28%] text-[#b415ff]"
              style={{
                color: "white",
                fontSize: "18px",
                marginTop: "15px",
                cursor: "pointer",
                transition: "0.3s",
                background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
                borderRadius: "50px",
              }}
            >
              My Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
