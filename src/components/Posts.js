import React from 'react';

const Posts = () => {
    return (
       
            
            <div className="askForm bg-white  shadow-md mt-5">

               <p className='text-xl  p-3 '><span className="heading text-textColor">The box will contain two lines of text. 1st the title of the problem will show.</span>
<span className="paragraph text-darkShade">After the title lines empty spaces fill with details word... </span><button className='text-primaryColor'> more</button></p>

<div className="footer flex justify-around items-center mt-3 userNav  p-3 ">



    <span className='text-xl'>Asker</span>
    <span className='text-xl'>Time</span>
    <span className='text-xl'>Solver</span>

</div>

       


        </div>
    );
};

export default Posts;