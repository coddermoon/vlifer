import React, { useEffect, useState } from "react";

import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";

const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white shadow-xl">
      <div className="container mx-auto">

      {width < 600 ?  <MobileNav/> : <DesktopNav />}

      
          
     
      

     

     </div>
    </nav>
  );
};

export default Navbar;
