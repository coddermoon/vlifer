import React from "react";

import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { activeClassName, navItems, normalClassName } from "../utils/navitems";

const MobileNav = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
          <span className="ml-2 text-xl font-medium">solver</span>
        </div>



        {
    navItems.map((navItem, index) =>             <NavLink key={index}
    to={navItem.path}
    className={({isActive})=> isActive ? activeClassName : normalClassName}
  >
    <navItem.icons />
    <span className="hidden md:block">{navItem.name}</span>
  </NavLink>
    )
}

  

        <div>
          <NavLink to="/"
           
           className={({isActive})=> isActive ? activeClassName : normalClassName}
          >
            <FiSettings />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
