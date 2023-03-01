import React from 'react';
import '../../utils/style.css'

const Forgotten = () => {
    return (

        <div className='back-image'>
            <div className="min-h-[100vh] flex items-center justify-center">
                <div className="w-[90%] sm:w-[560px]   mx-auto bg-white custom-shadow ">

                    <div className='cross text-center pt-1 mr-24 lg:mt-4 mt-'>
                        <p className=' text-gray-400 font-bold text-xl'>X</p>
                    </div>
                    <div className='my-8 py-10 flex items-center'>
                        <div className="min-w-[340px] mx-auto">
                            <p className="text-center text-xl font-semibold text-textColor">Password setup form</p>

                            <form className='mt-10'>

                                <div className='my-3'>
                                    <label htmlFor="NewPassword">New Password</label> <br />
                                    <input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                </div>
                                <div className='my-3'>
                                    <label htmlFor="NewPassword">Confirm Password</label> <br />
                                    <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                </div>


                                <div className=" text-center mt-16">
                                    <input className='bg-primaryColor px-4 rounded py-2 text-center text-white font-semibold ' type="submit" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Forgotten;