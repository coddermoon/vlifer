import React from "react";
import ServiceCard from "./ServiceCard";
import '../../utils/style.css'

const RunningServices = () => {
  return (
    <div className="solver pb-24" style={{ height: '100vh' }} id="tools">
      <div className="md:max-w-[50%] mx-auto py-20 mt-16">
        <div className="titles">
          <h2 className="text-white font-bold text-xl text-center">
            Only one tool is Running
          </h2>
          {/* <p className="text-center">
            <small>only one tools is launched</small>
          </p> */}

        </div>

        {/* cards */}

        <div className="cards pt-8 lg:ml-16 ml-12 ">
          <ServiceCard />

        </div>



      </div>
    </div>
  );
};

export default RunningServices;
