import React from 'react';
import solverLogo from '../../assets/images/logo.svg'
import '../../utils/style.css'

const ServiceCard = () => {
    return (
        <div className='tools'>
            <div className='bg-white py-5 custom-shadow p-8 mt-10 '>
                <div className="logos flex items-center justify-center gap-3 mb-20 mt-8">
                    <img className='h-8' src={solverLogo} alt="" />
                    <h2 className='text-xl font-bold text-center text-primaryColor '>Solver</h2>

                </div>
                <div className="description my-6 text-center">
                    <p className='text-lg text-textColor text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

                    <div className="mt-16 flex items-center justify-center">
                        <button className=" border border-solid px-6 rounded py-2 mt-6 text-center text-base font-semibold" style={{ borderColor: '#1479FF', color: '#1479FF' }}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;