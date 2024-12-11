import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <footer className="py-12 ">
      <div className="w-full mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61566901600613&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center  border-2 border-transparent hover:border-blue-500 p-2 rounded-full transition duration-300"
            >
              <FaFacebook
                size={24}
                className="text-white hover:text-blue-500"
              />
            </a>
            <a
              href="https://www.instagram.com/ma_hu_dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-2 border-transparent hover:border-pink-500 p-2 rounded-full transition duration-300"
            >
              <FaInstagram
                size={24}
                className="text-white hover:text-pink-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mudassar-aulakh-b60256290/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-2 border-transparent hover:border-blue-600 p-2 rounded-full transition duration-300"
            >
              <FaLinkedinIn
                size={24}
                className="text-white hover:text-blue-600"
              />
            </a>
          </div>
          <hr className="bg-white text-white border-[0.3px] opacity-5 mt-5 border-blue-50 w-full" />
          <div className="border-gray-700 pt-8 flex flex-col items-center">
            <p className="text-sm text-white">
              &copy; 2024 Your Company. All rights reserved.
            </p>
            <p className="text-sm text-white">Mudassar Aulakh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
