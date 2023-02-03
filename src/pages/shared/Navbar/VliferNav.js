import React from "react";
import logo from "../../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { activeClassName, normalClassName } from "../../../utils/navitems";

const VliferNav = () => {
  return (
    <nav  className="bg-white py-1 "  style={{boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.25)'}}>
<div className="container mx-auto">
<div className="flex items-center justify-between px-4">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="ml-2  text-xl font-medium text-primaryColor">
            Solver
          </span>
        </div>
      
<div className="flex">
<NavLink  to="/about" className={({ isActive }) =>isActive ? normalClassName + " font-semibold" : normalClassName
            }
          >
             About
          </NavLink>

          <NavLink  to="/tools" className={({ isActive }) =>isActive ? normalClassName + " font-semibold" : normalClassName
            }
          >
           Tools
          </NavLink>
          <NavLink  to="/contacts" className={({ isActive }) =>isActive ? normalClassName + " font-semibold" : normalClassName
            }
          >
        Contact
          </NavLink>

          <NavLink  to="/login" className={({ isActive }) =>isActive ? activeClassName + " font-semibold rounded" : activeClassName+ ' rounded'
            }
          >
        Enter
          </NavLink>
</div>
    
      </div>
</div>
    </nav>
  );
};

export default VliferNav;
