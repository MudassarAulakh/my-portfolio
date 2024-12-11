import React, { useState, useEffect } from "react";

const About = () => {
  const [barWidths, setBarWidths] = useState({
    htmlCss: "0%",
    reactJs: "0%",
    javascript: "0%",
    nextJs: "0%",
  });

  useEffect(() => {
    // Trigger the animation after component mounts
    setTimeout(() => {
      setBarWidths({
        htmlCss: "80%",
        reactJs: "75%",
        javascript: "100%",
        nextJs: "80%",
      });
    }, 100); // Delay of 100ms before the animation starts
  }, []);

  const Counter = ({ endValue, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = endValue;
      const increment = Math.ceil(end / (duration / 100));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 100);

      return () => clearInterval(timer);
    }, [endValue, duration]);

    return <h3 className="text-4xl font-bold headingColor">{count}+</h3>;
  };

  return (
    <div name="About" className="bg-[#161513]">
      <h2 className="text-white text-center text-[25px] px-4  sm:text-[30px] md:text-[35px] xl:text-[45px] headingColor font-bold montserrat">
        About me
      </h2>
      <div className=" text-white py-10 md:px-16 max-md:w-[80%] mx-auto flex flex-col gap-[20px] items-center md:flex-row md:justify-center">
        {/* Left section with image */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="/my.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg w-64 h-80 lg:w-[300px] lg:h-[360px] object-cover"
          />
        </div>

        {/* Right section with text */}
        <div className="md:w-2/3 text-center px-2 md:text-left">
          <p className="text-[16px]  mb-6 montserrat">
            I'm Mudassar Hussain, a passionate Frontend Developer with over 4
            years of experience. I’ve had the opportunity to work with leading
            organizations, where my expertise has helped shape innovative
            solutions and drive success
          </p>
          <p className="text-[16px] mb-8 montserrat">
            My journey in frontend development reflects my dedication to
            creating intuitive, responsive, and cutting-edge designs. With each
            project, I bring my enthusiasm, attention to detail, and a
            commitment to delivering high-quality results.
          </p>

          {/* Skill bars with 10-second animations */}
          <div className="space-y-4 mb-8 montserrat">
            <div className="flex items-center">
              <span className="w-1/3">HTML & CSS</span>
              <div className="w-2/3 bg-gray-800 h-2 rounded overflow-hidden">
                <div
                  className="bg-gradient-to-r from-pink-500 to-orange-500 h-full rounded transition-all duration-10000"
                  style={{ width: barWidths.htmlCss }}
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-1/3">React JS</span>
              <div className="w-2/3 bg-gray-800 h-2 rounded overflow-hidden">
                <div
                  className="bg-gradient-to-r from-pink-500 to-orange-500 h-full rounded transition-all duration-100000"
                  style={{ width: barWidths.reactJs }}
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-1/3">JavaScript</span>
              <div className="w-2/3 bg-gray-800 h-2 rounded overflow-hidden">
                <div
                  className="bg-gradient-to-r from-pink-500 to-orange-500 h-full rounded transition-all duration-100000"
                  style={{ width: barWidths.javascript }}
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-1/3">Next JS</span>
              <div className="w-2/3 bg-gray-800 h-2 rounded overflow-hidden">
                <div
                  className="bg-gradient-to-r from-pink-500 to-orange-500 h-full rounded transition-all duration-100000"
                  style={{ width: barWidths.nextJs }}
                ></div>
              </div>
            </div>
          </div>

          {/* Statistics */}
        </div>
      </div>
      <div className="flex flex-wrap gap-y-[40px] justify-around mt-10 text-center montserrat">
        <div className="sm:border-r px-[100px] border-red-400 text-center">
          <Counter endValue={4} duration={5000} />
          <p className="text-sm mt-2 text-purple-500">YEARS OF EXPERIENCE</p>
        </div>
        <div className="sm:border-r px-[100px] border-red-400">
          <Counter endValue={45} duration={5000} />
          <p className="text-sm mt-2 text-purple-500">PROJECTS COMPLETED</p>
        </div>
        <div className="px-[100px]">
          <Counter endValue={15} duration={5000} />
          <p className="text-sm mt-2 text-purple-500">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
