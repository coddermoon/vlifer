import React from "react";
import { userSolvedNavItems } from "../../../utils/navitems";

const UserSolvedNav = () => {
  return (
    <div className="flex justify-between px-12">
      <div>
        <p> 000000</p>
      </div>
      <div>
      {
            userSolvedNavItems.map((nav,index)=> <button key={index} className="text-lg text-textColor ml-20">{nav.name}</button>)
      }
      </div>

    </div>
  );
};

export default UserSolvedNav;
