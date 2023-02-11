import React from 'react';

const Otp = () => {
    return (
<div className="md:max-w-[50%] mx-auto bg-white  mt-3">
<div className=' mt-10 py-10  custom-shadow flex '>
          <div className="min-w-[340px] mx-auto">
           <p className="text-center text-xl font-bold text-textColor">Verification</p>
           <p className='text-center text-lg mt-4 text-textColor'>We sent a otp code your <br />
Email - S**********Y </p>

           <form className='mt-10'>


<div className='my-3'>

<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Enter otp code'  />
</div>


<div className="btn text-center mt-16">
<input className='bg-primaryColor px-4 rounded py-2 text-center text-white font-semibold ' type="submit" />
</div>
           </form>

          </div>
        </div>
</div>
    );
};

export default Otp;