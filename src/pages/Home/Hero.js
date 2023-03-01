import React from "react";

const Hero = () => {
  return (
    <div className="bg-white pt-28 mb-28" style={{ height: '85vh' }} id="about">
      <div className="md:max-w-[50%] mx-auto">
        <div className="content py-20">
          <h2 className="text-textColor font-bold text-xl text-center">
            Wellcome in Vlifer.com
          </h2>
          <p className="text-lg text-textColor text-justify mt-10 lg:ml-0 ml-4 lg:mr-0 mr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-primaryColor px-8  rounded py-4 mt-6 text-center text-white font-semibold ">Enter In Vlifer</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
