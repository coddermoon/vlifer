import React from 'react';
import "../../utils/style.css"

const InfoForm = () => {
    return (

        <div className='back-image'>
            <div className="min-h-[100vh] flex items-center justify-center">

                <div className="w-[90%] sm:w-[560px]   mx-auto bg-white custom-shadow ">
                    <div className='cross text-center pt-1 mr-24 lg:mt-4 mt-2'>
                        <p className=' text-gray-400 font-bold text-xl'>X</p>
                    </div>
                    <div className='py-8  flex items-center'>
                        <div className="min-w-[340px] mx-auto">
                            <p className="text-center text-xl font-semibold text-textColor">Fill this form for Solver perfect browsing .</p>

                            <form className='mt-8 lg:pl-0 pl-4'>

                                <div className='grid grid-cols-2 gap-2'>
                                    <div className=' '>
                                        <label htmlFor="NewPassword">Full Name</label> <br />
                                        <input className='mt-1 lg:w-full w-40 py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="NewPassword">Nick name</label> <br />
                                        <input className='mt-1 lg:w-full w-40 py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>

                                    <div className=''>
                                        <label htmlFor="NewPassword">Age</label> <br />
                                        <input className='mt-1  lg:w-full w-40  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>

                                    <div className=''>
                                        <label htmlFor="NewPassword">Gender</label> <br />
                                        <input className='mt-1  lg:w-full w-40  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>

                                    <div className=''>
                                        <label htmlFor="NewPassword">Occupation</label> <br />
                                        <input className='mt-1  lg:w-full w-40  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>

                                    <div className=''>
                                        <label htmlFor="NewPassword">Riligion</label> <br />
                                        <input className='mt-1  lg:w-full w-40  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>

                                    <div className=''>
                                        <label htmlFor="NewPassword">Language</label> <br />
                                        <input className='mt-1  lg:w-full w-40  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>

                                    <div className=''>
                                        <label htmlFor="NewPassword">Nationality</label> <br />
                                        <input className='mt-1  lg:w-full w-40  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" />
                                    </div>


                                </div>


                                <div className="text-center mt-8">
                                    <input className='bg-primaryColor px-4 rounded py-1 text-center text-white font-semibold ' type="submit" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default InfoForm;