import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Signup = () => {
    return (
<div className='my-8 py-20 custom-shadow flex items-center'>
          <div className="min-w-[340px] mx-auto">
           <div className='flex items-center justify-between'>
            <NavLink  to="/login" className={({ isActive }) =>isActive ? 'text-xl text-primaryColor  w-1/3 text-center font-semibold border-b-4' : 'text-xl text-primaryColor  w-1/3 text-center  '}>Login </NavLink>


            <NavLink  to="/register" className={({ isActive }) =>isActive ? 'text-xl text-primaryColor  w-1/3 text-center font-semibold border-b-4' : 'text-xl text-primaryColor  w-1/3 text-center  '}>register </NavLink>
           
           </div>

           <form className='mt-16'>

<div className='my-3'>
<label htmlFor="email">Email Number</label> <br />
<input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text"  />
</div>
<div className='my-3'>
<label htmlFor="newPassword">New Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="password"   />
</div>

<div className='my-3'>
<label htmlFor="newPassword">Confirm Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='confirmPassword' type="password"   />
</div>


<div className="btn text-center mt-14">
<input className='bg-primaryColor px-4 rounded py-2 text-center text-white font-semibold ' type="submit" />
</div>


<div className='flex bg-bgColor items-center mt-10'>
<button className='text-primaryColor mx-auto text-xl  text-center'>Register With Google</button>
</div>



           </form>

          </div>
        </div>
    );
};

export default Signup;