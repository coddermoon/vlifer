import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../utils/style.css'


const Login = () => {
    return (
        <div className='back-image '>


            {/* <div className="min-h-[100vh] flex items-center justify-center back-image">
                <div className="w-[90%] sm:w-[560px]   mx-auto bg-white custom-shadow ">
                    <div className=' py-10 flex items-center register-form'>
                        <div className="flex mx-auto">
                            <div className="min-w-[340px] mx-auto">
                                <div className='flex items-center justify-around'>
                                    <h1 className='text-center font-bold text-lg'>Login</h1>
                                    <NavLink to="/login" className={({ isActive }) => isActive ? 'text-xl text-primaryColor  w-2/3 text-center font-semibold border-b-4' : 'text-xl   w-2/3 text-center border-bgColor  border-b-4 '}>Login </NavLink>


                                    <NavLink  to="/register" className={({ isActive }) =>isActive ? 'text-xl text-primaryColor  w-2/3 text-center font-semibold border-b-4' : 'text-xl text-primaryColor  w-2/3 text-center border-bgColor  border-b-4'}>Register </NavLink>

                                </div>

                                <form className='mt-10'>

                                    <div className='my-3'>
                                        <label htmlFor="email">Email Number</label> <br />
                                        <input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text" />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="Password">Password</label> <br />
                                        <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="password" />
                                    </div>


                                    <div className="mt-6">
                                        <div className='text-center flex justify-between'>
                                            <div className='pt-7'>
                                                <Link className='text-primaryColor text-md'>Forgot password</Link>
                                            </div>

                                            <div>
                                                <button className='bg-primaryColor px-4 rounded py-1 mt-6 text-center text-white font-semibold ' type="submit">Login</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex bg-bgColor items-center mt-10 p-1'>
                                        <NavLink to="/register" className='text-primaryColor mx-auto text-lg   text-center'>Register Now</NavLink>
                                    </div>



                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div> */}





            <div className="min-h-[100vh] flex items-center justify-center">
                <div className="w-[90%] sm:w-[560px]   mx-auto bg-white custom-shadow ">
                    <div className='cross text-center pt-1 mr-24 lg:mt-4 mt-'>
                        <p className=' text-gray-400 font-bold text-xl'>X</p>
                    </div>
                    <div className=' py-10 flex items-center register-form'>
                        <div className="flex mx-auto">
                            <div className="min-w-[340px] mx-auto">
                                <div className='flex items-center justify-around'>
                                    <NavLink to="/login" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>Login </NavLink>


                                    <NavLink to="/register" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>Register </NavLink>

                                </div>

                                {/* <form className='mt-10'>

<div className='my-3'>
<label htmlFor="email">Email Number</label> <br />
<input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text"  />
</div>
<div className='my-3'>
<label htmlFor="Password">Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="password"   />
</div>


<div className="btn flex  items-center justify-center mt-6">
<div className='text-center'>
<Link className='text-primaryColor text-md'>Forgot password</Link> <br />
<button className='bg-primaryColor px-4 rounded py-1 mt-6 text-center text-white font-semibold ' type="submit">Login</button>
</div>
</div>
<div className='flex bg-bgColor items-center mt-5 p-1'>
<Link className='text-primaryColor mx-auto text-lg   text-center'>Register Your ID</Link>
</div>



           </form> */}

                                <form className='mt-10'>

                                    <div className='my-3'>
                                        <label htmlFor="email">Email Number</label> <br />
                                        <input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text" />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="Password">Password</label> <br />
                                        <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="password" />
                                    </div>


                                    <div className="mt-6">
                                        <div className='text-center flex justify-between'>
                                            <div className='pt-7'>
                                                <Link className='text-primaryColor text-md'>Forgot password</Link>
                                            </div>

                                            <div>
                                                <button className='bg-primaryColor px-4 rounded py-1 mt-6 text-center text-white font-semibold ' type="submit">Login</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex bg-bgColor items-center mt-10 p-1'>
                                        <NavLink to="/register" className='text-primaryColor mx-auto text-lg   text-center'>Register Now</NavLink>
                                    </div>



                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>








        </div>


    );
};

export default Login;