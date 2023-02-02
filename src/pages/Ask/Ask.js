import React from 'react';
import Posts from '../../components/Posts';



const Ask = () => {
    const FormBtn = {name:'Filter',icons:'' }
    const FormInputData  = {inputPlaceholder:'Post your Problem'}
   
    return (
        <div className='md:max-w-[50%] mx-auto bg-green-400 my-3'>
            
            <div className="askForm bg-white p-3   shadow-md">

                <form  className='flex gap-2'>
                    <input className='w-full rounded-full bg-bgColor outline-darkShade outline-[0.5px] p-2  placeholder:pl-3 placeholder:text-xl placeholder:text-textColor ' type="text" placeholder={FormInputData.inputPlaceholder} />
                    <button className='text-xl px-12  bg-bgColor  rounded-full'>{FormBtn.name}</button>
                </form>

            </div>

            <Posts/>


        </div>
    );
};

export default Ask;