import React from 'react';
import { AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { FiSettings } from 'react-icons/fi';

const DesktopNav = () => {
    return (
        <div>
                   <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
            <span className="ml-2 text-lg font-medium">solver</span>
          </div>
          <div className=" flex">
            <a
              to=""
              className="flex gap-2 items-center px-3 py-2 rounded-md text-sm font-medium leading-5  focus:outline-none focus:text-white focus:bg-gray-700"
            >
              <AiOutlineQuestionCircle />{" "}
              <span className="hidden md:block">Ask</span>{" "}
            </a>
            <a
              to=""
              className="flex gap-2 items-center px-3 py-2 rounded-md text-sm font-medium leading-5  focus:outline-none focus:text-white focus:bg-gray-700"
            >
              <CiSearch /> <span className="hidden md:block">Find</span>{" "}
            </a>
            <a
              to=""
              className="flex gap-2 items-center px-3 py-2 rounded-md text-sm font-medium leading-5  focus:outline-none focus:text-white focus:bg-gray-700"
            >
              <AiOutlineUser /> <span className="hidden md:block">Users</span>{" "}
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex gap-2 items-center px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              <FiSettings /> Setting
            </a>
          </div>
        </div> 
        </div>
    );
};

export default DesktopNav;