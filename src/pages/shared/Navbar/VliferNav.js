import React from "react";
import logo from "../../../assets/images/vlifer.png";
import { NavLink } from "react-router-dom";
import { activeClassName, normalClassName } from "../../../utils/navitems";
import { Link } from 'react-scroll'

const VliferNav = () => {
  return (
    <div >
      {/* <nav className="container lg:pl-28 lg:pr-28 py-4 fixed  z-50 w-full px-5 flex justify-between items-center" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-8" />
              <NavLink to="/"><span className="ml-2  text-xl font-medium text-primaryColor">
                V-Lifer
              </span></NavLink>
            </div>

            <div className="flex">
              <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
              >
                About
              </Link>

              <Link to="tools" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
              >
                Tools
              </Link>
              <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
              >
                Contact
              </Link>

              <NavLink to="/login" className="btn btn-outline btn-primaryColor "
              >
                Enter
              </NavLink>
            </div>

          </div>
        </div>
      </nav > */}

      <div>

        <div className="navbar  lg:pl-32 lg:pr-32 fixed z-50 w-full flex justify-between items-center p-6 m-0" style={{ backgroundColor: "#FFFFFF" }}>

          <div className="navbar-start">


            <div className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-8" />
              <NavLink to="/" style={{ width: "150px" }}><span className="ml-2  text-xl font-medium text-primaryColor">
                V-Lifer
              </span></NavLink>
            </div>


            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>

              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
                >
                  About
                </Link>

                <Link to="tools" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
                >
                  Tools
                </Link>
                <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
                >
                  Contact
                </Link>
              </ul>


            </div>

          </div>


          <div className="navbar-center hidden lg:flex lg:ml-48">
            <ul className="menu menu-horizontal px-1">

              <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
              >
                About
              </Link>

              <Link to="tools" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
              >
                Tools
              </Link>
              <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} className="btn btn-outline  border-none mr-8 buttons"
              >
                Contact
              </Link>
            </ul>
          </div>

          <div className=" mr-4">
            <NavLink to="/login" className=" border border-solid px-6 rounded py-2 text-center text-base font-semibold buttons" style={{ borderColor: '#1479FF', }}
            >
              Enter
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VliferNav;
