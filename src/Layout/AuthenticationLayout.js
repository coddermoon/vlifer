import React from 'react';
import { Outlet } from 'react-router-dom';
import VliferNav from '../pages/shared/Navbar/VliferNav';

const AuthenticationLayout = () => {
    return (
        <div className="bg-white min-h-screen text-textColor">
            <Outlet />


        </div>
    );
};

export default AuthenticationLayout;