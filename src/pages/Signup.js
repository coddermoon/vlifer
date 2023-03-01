import React from 'react';
import { NavLink } from 'react-router-dom';
import '../utils/style.css'

const Signup = () => {
    return (
        <div className='back-image'>


            {/* <div className="min-h-[100vh] flex items-center justify-center">
                <div className="w-[90%] sm:w-[560px]   mx-auto bg-white custom-shadow ">
                    <div className=' py-10 flex items-center mx-auto register-form '>
                        <div className="min-w-[340px] mx-auto">
                            <div className='flex items-center justify-around'>
                                <h1 className='text-center font-bold text-lg'>Register</h1>

                                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-xl text-primaryColor  w-2/3 text-center font-semibold border-b-4' : 'text-xl text-primaryColor  w-2/3 text-center border-bgColor  border-b-4 '}>Login </NavLink>


                                <NavLink to="/register" className={({ isActive }) => isActive ? 'text-xl text-primaryColor  w-2/3 text-center font-semibold border-b-4' : 'text-xl text-primaryColor  w-2/3 text-center border-bgColor  border-b-4'}>Register </NavLink>

                            </div>

                            <form className='mt-8'>

                                <div className='my-2'>
                                    <label htmlFor="email">Email Number</label> <br />
                                    <input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text" />
                                </div>
                                <div className='my-2'>
                                    <label htmlFor="newPassword">New Password</label> <br />
                                    <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="password" />
                                </div>

                                <div className='my-3'>
                                    <label htmlFor="newPassword">Confirm Password</label> <br />
                                    <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='confirmPassword' type="password" />
                                </div>


                                <div className=" text-center mt-5">
                                    <input className='bg-primaryColor px-4 rounded py-1 text-center text-white font-semibold ' type="submit" />
                                </div>


                                <div className='flex bg-bgColor items-center mt-5'>
                                    <button className='text-primaryColor mx-auto text-lg py-1  text-center'>Register With Google</button>
                                </div>



                            </form>


                        </div>
                    </div>
                </div>

            </div> */}







            <div className="min-h-[100vh] flex items-center justify-center">

                <div className="w-[90%] sm:w-[560px]   mx-auto bg-white custom-shadow ">
                    <div className='cross text-center pt-1 mr-24 lg:mt-4 mt-2'>
                        <p className=' text-gray-400 font-bold text-xl'>X</p>
                    </div>
                    <div className=' py-10 flex items-center mx-auto register-form'>
                        <div className="min-w-[340px] mx-auto">
                            <div className='flex items-center justify-around'>
                                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-xl text-black  w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black  w-2/3 text-center border-bgColor  border-b-4 '}>Login </NavLink>


                                <NavLink to="/register" className={({ isActive }) => isActive ? 'text-xl text-black  w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black  w-2/3 text-center border-bgColor  border-b-4'}>Register </NavLink>

                            </div>

                            {/* <form className='mt-8'>

<div className='my-2'>
<label htmlFor="email">Email Number</label> <br />
<input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text"  />
</div>
<div className='my-2'>
<label htmlFor="newPassword">New Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="password"   />
</div>

<div className='my-3'>
<label htmlFor="newPassword">Confirm Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='confirmPassword' type="password"   />
</div>


<div className="btn text-center mt-5">
<input className='bg-primaryColor px-4 rounded py-1 text-center text-white font-semibold ' type="submit" />
</div>


<div className='flex bg-bgColor items-center mt-5'>
<button className='text-black mx-auto text-lg py-1  text-center'>Register With Google</button>
</div>



           </form> */}

                            <form className='mt-8'>

                                <div className='my-2'>
                                    <label htmlFor="email">Email Number</label> <br />
                                    <input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text" />
                                </div>
                                <div className='my-2'>
                                    <label htmlFor="newPassword">New Password</label> <br />
                                    <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="password" />
                                </div>

                                <div className='my-3'>
                                    <label htmlFor="newPassword">Confirm Password</label> <br />
                                    <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='confirmPassword' type="password" />
                                </div>


                                <div className=" text-center mt-5">
                                    <input className='bg-primaryColor px-4 rounded py-1 text-center text-white font-semibold ' type="submit" />
                                </div>


                                <div className='flex bg-bgColor items-center mt-5'>
                                    <button className='text-primaryColor mx-auto text-lg py-1  text-center'>Register With Google</button>
                                </div>



                            </form>

                        </div>
                    </div>
                </div>

            </div>






        </div>
    );
};

export default Signup;