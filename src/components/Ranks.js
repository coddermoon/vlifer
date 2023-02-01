import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import userPhoto from '../assets/images/users.png'

const Ranks = () => {
  return (
    <div className="md:max-w-[50%] mx-auto bg-green-400 my-3">
      <div className="bg-white py-3 px-8  shadow-md">
        <div className="flex justify-between">
          <div className="usersInfo flex items-center gap-5">
            
            <div className="profilePic">
                <img src={userPhoto} alt="profile pic" />
            </div>
            {/* pfolile info */}
            <div className="profileInfo">
                <p className="text-textColor text-lg">User Name</p>
                <p className="text-textColor text-lg">Occupation</p>
                <p className="text-textColor text-lg">Join</p>
                <p className="text-textColor text-lg">Point</p>
            </div>

          </div>
          {/* points */}
          <div className="poients">
          <p className="text-textColor text-lg flex items-center justify-center gap-3"><AiOutlineQuestionCircle/>  000000</p>
          <p className="text-textColor text-lg flex items-center justify-center gap-3"><AiOutlineQuestionCircle/>  000000</p>
          <p className="text-textColor text-lg flex items-center justify-center gap-3"><AiOutlineQuestionCircle/>  000000</p>
          <p className="text-textColor text-lg flex items-center justify-center gap-3"><AiOutlineQuestionCircle/>  000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranks;
