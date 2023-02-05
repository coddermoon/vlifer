import React from 'react';
import { Outlet } from 'react-router-dom';
import VliferNav from '../pages/shared/Navbar/VliferNav';

const AuthenticationLayout = () => {
    return (
        <div className="bg-bgColor min-h-screen text-textColor">
        <VliferNav/>

        <div className="md:max-w-[50%] mx-auto bg-white  mt-3">
        <Outlet/>
        </div>
     
            </div>
    );
};

export default AuthenticationLayout;