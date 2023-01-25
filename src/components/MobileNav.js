import React from "react";

import { FiSettings } from "react-icons/fi";
import { navItems } from "../utils/navitems";

const MobileNav = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
          <span className="ml-2 text-lg font-medium">solver</span>
        </div>



        {
    navItems.map((navItem, index) =>             <a key={index}
    href="d"
    className="flex gap-2 items-center px-3 py-2 rounded-md text-sm font-medium leading-5  focus:outline-none focus:text-white focus:bg-gray-700"
  >
    <navItem.icons />
    <span className="hidden md:block">{navItem.name}</span>
  </a>
    )
}

  

        <div>
          <a
            href="#as"
            className="flex gap-2 items-center px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            <FiSettings />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
