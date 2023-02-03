import React from 'react';

import { NavLink } from 'react-router-dom';
import { activeClassName,  normalToolsClassName, toolItems } from '../../../utils/navitems';

const ToolsNav = () => {
    return (
        <div className='border-bottom'>
        <div className="flex items-center justify-around px-4 py-2">

          {
      toolItems.map((navItem, index) =>             <NavLink key={index}
      to={navItem.path}
      className={({isActive})=> isActive ? activeClassName : normalToolsClassName}
    >
      <navItem.icons />
    
    </NavLink>
      )
  }
  

        </div>
      </div>
    );
};

export default ToolsNav;