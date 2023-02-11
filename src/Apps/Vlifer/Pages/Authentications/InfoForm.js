import React from 'react';

const InfoForm = () => {
    return (
<div className="md:max-w-[50%] mx-auto bg-white  mt-3">
<div className='my-8 py-10 custom-shadow flex items-center'>
          <div className="min-w-[340px] mx-auto">
           <p className="text-center text-xl font-semibold text-textColor">Fill this form for Solver perfect browsing .</p>

           <form className='mt-10 '>

<div className='grid grid-cols-2 gap-2'>
<div className=' '>
<label htmlFor="NewPassword">Full Name</label> <br />
<input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Full Name'  />
</div>
<div className=''>
<label htmlFor="NewPassword">Nick name</label> <br />
<input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Nick name'  />
</div>

<div className=''>
<label htmlFor="NewPassword">Age</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Age'  />
</div>

<div className=''>
<label htmlFor="NewPassword">Gender</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Gender'  />
</div>

<div className=''>
<label htmlFor="NewPassword">Occupation</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Occupation'  />
</div>

<div className=''>
<label htmlFor="NewPassword">Riligion</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Riligion'  />
</div>

<div className=''>
<label htmlFor="NewPassword">Language</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Language'  />
</div>

<div className=''>
<label htmlFor="NewPassword">Nationality</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='newPassword' type="text" placeholder='Nationality'  />
</div>


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

export default InfoForm;