import React from 'react';
import solverLogo from '../../../../assets/images/logo.svg'

const ServiceCard = () => {
    return (
        <div className='bg-white py-5 custom-shadow p-8 mt-10'>
            <div className="logos flex items-center justify-center gap-3">
                <img className='h-8' src={solverLogo} alt="" />
                <h2 className='text-xl font-bold text-center text-primaryColor'>Solver</h2>
                
            </div>
            <div className="description my-6">
            <p className='text-lg text-textColor text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

            <div className="btn mt-4 flex items-center justify-center">
                <button className='text-white bg-primaryColor  px-3 py-2 rounded '>Learn More</button>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;