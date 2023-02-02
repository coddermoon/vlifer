import React from 'react';

import { NavLink } from 'react-router-dom';
import { activeClassName,  normalClassName, toolItems } from '../../../utils/navitems';

const ToolsNav = () => {
    return (
        <div className='border-bottom'>
        <div className="flex items-center justify-between p-4">

          {
      toolItems.map((navItem, index) =>             <NavLink key={index}
      to={navItem.path}
      className={({isActive})=> isActive ? activeClassName : normalClassName}
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