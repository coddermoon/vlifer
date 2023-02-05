import React from 'react';

const Forgotten = () => {
    return (
        <div className='mt-8 min-h-[500px] custom-shadow flex items-center'>
          <div className="min-w-[340px] mx-auto">
           <p className="text-center text-xl font-semibold text-textColor">Password setup form</p>

           <form className='mt-16'>

<div className='my-3'>
<label htmlFor="NewPassword">New Password</label> <br />
<input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='new password'  />
</div>
<div className='my-3'>
<label htmlFor="NewPassword">Confirm Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='new password'  />
</div>


<div className="btn text-center mt-16">
<input className='bg-primaryColor px-4 rounded py-2 text-center text-white font-semibold ' type="submit" />
</div>
           </form>

          </div>
        </div>
    );
};

export default Forgotten;