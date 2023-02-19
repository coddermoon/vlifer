import React from "react";
import ServiceCard from "./ServiceCard";

const RunningServices = () => {
  return (
    <div className="md:max-w-[50%] mx-auto py-20">
      <div className="titles">
        <h2 className="text-textColor font-bold text-xl text-center">
          Running
        </h2>
        <p className="text-center">
          <small>only one tools is launched</small>
        </p>
      
      </div>

      {/* cards */}

      <div className="cards">
        <ServiceCard/>

      </div>



    </div>
  );
};

export default RunningServices;
