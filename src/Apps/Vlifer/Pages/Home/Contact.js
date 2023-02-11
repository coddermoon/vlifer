import React from 'react';

const Contact = () => {
    return (
<div className="bg-white mt-1">
      <div className="md:max-w-[50%] mx-auto">
        <div  className="max-w-[340px] mx-auto content py-10">
          <h2 className="text-textColor font-bold text-xl text-center">
          Contact us
          </h2>

          {/* contact from */}
          
          <form className='mt-16'>

<div className='my-3'>
<label htmlFor="email">Email Number</label> <br />
<input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text"  />
</div>
<div className='my-3'>
<label htmlFor="Password">Password</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="password"   />
</div>

<div className='my-3'>
<label htmlFor="Password">Subject</label> <br />
<input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="text"   />
</div>


<div className='my-3'>
<label htmlFor="Password">Details</label> <br />
<textarea className='mt-1 h-[140px] resize-none w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="text"   />
</div>
<div className="btn mt-5 flex items-center justify-center">
                <button className='text-white bg-primaryColor  px-8 py-1 rounded '>send</button>
            </div>





           </form>

        </div>
      </div>
      </div>
    );
};

export default Contact;