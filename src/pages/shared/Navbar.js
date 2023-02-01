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
    <nav className="bg-white h-[60px]"  style={{boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.25)'}}>
      <div className="container mx-auto">

      {width < 600 ?  <MobileNav/> : <DesktopNav />}

      
      {/* box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);    */}
     
      

     

     </div>
    </nav>
  );
};

export default Navbar;
