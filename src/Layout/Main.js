import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import VliferNav from '../pages/shared/Navbar/VliferNav';

const Main = () => {
    return (
        <div className="bg-bgColor min-h-screen text-textColor">
        <VliferNav/>
      <Outlet/>
            </div>
    );
};

export default Main;