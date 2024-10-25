import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2d4d5f03-bb9e-4a84-9953-c7e56461cadb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormSubmitted(true);
        event.target.reset(); // Clear form on success
        setTimeout(() => setFormSubmitted(false), 5000); // Hide alert after 5 seconds
      } else {
        setFormError(true);
        setTimeout(() => setFormError(false), 5000); // Hide alert after 5 seconds
      }
    } catch (error) {
      setFormError(true);
      setTimeout(() => setFormError(false), 5000); // Hide alert after 5 seconds
    }
  };

  return (
    <div className="text-white py-20" id="Contact">
      <div className="container mx-auto px-4 max-md:w-[80%] md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 headingColor">
          Contact Me
        </h2>

        {/* Alert Messages */}
        {formSubmitted && (
          <div className="text-green-500 text-center mb-4">
            Your message has been successfully sent!
          </div>
        )}
        {formError && (
          <div className="text-red-500 text-center mb-4">
            There was an error. Please try again.
          </div>
        )}

        <div className="flex flex-col md:flex-row items-baseline md:space-x-12">
          <div className="flex-1">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text headingColor mb-4">
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block headingColor-400 mr-2" />
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                muzammilhks1@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block headingColor-400 mr-2" />
              <span>+923328410705</span>
            </div>
            <div className="mb-4">
              <FaLocationDot className="inline-block headingColor-400 mr-2" />
              <span>Faisal Market, Bhakkar, Punjab, Pakistan</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded text-white border focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Name"
                  style={{
                    background:
                      "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded text-white border focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Email"
                  style={{
                    background:
                      "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 rounded text-white border focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  style={{
                    background:
                      "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  
                />
              </div>
              <button
                type="submit"
                className="px-8  py-3  rounded-lg text-white font-semibold text-nowrap hover:scale-[1.1] hover:text-white"
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
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
