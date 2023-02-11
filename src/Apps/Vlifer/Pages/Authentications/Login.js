import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Login = () => {
    return (
        <div className="md:max-w-[50%] mx-auto bg-white  mt-3">
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
<label htmlFor="Password">Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="password"   />
</div>


<div className="btn flex items-center justify-between mt-16">
    <Link className='text-primaryColor text-xl'>Forgot password</Link>
<button className='bg-primaryColor px-4 rounded py-2 text-center text-white font-semibold ' type="submit">Login</button>
</div>
<div className='flex bg-bgColor items-center mt-10'>
<Link className='text-primaryColor mx-auto text-xl  text-center'>Register Your ID</Link>
</div>



           </form>

          </div>
        </div>

        </div>

    );
};

export default Login;