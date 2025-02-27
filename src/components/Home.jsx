import React from "react";
import image from "/public/image.jpg";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img
          src={image}
          alt=""
          className="w-[250px] rounded-full sm:w-[300px]"
        />

        <div className="space-y-1 sm:space-y-3">
          <h5 className="bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
            Kaspars Kukainis
          </h5>
          <h3 className="bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-xl font-light text-transparent md:text-2xl lg:text-3xl">
            Local Bum
          </h3>
          <p className="max-w-[500px] text-sm text-gray-500">
            Trying to learn how to dev and failing miserably
          </p>
        </div>

        <div className="flex gap-3">
          <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          <BiLogoYoutube className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          <BiLogoTwitter className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
        </div>
      </div>
    </div>
  );
};

export default Home;
