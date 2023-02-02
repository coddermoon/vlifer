import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const FormBtn = {name:'Filter',icons:FiSearch }
const FormInputData  = {inputPlaceholder:'find your Problem'}

const Find = () => {
    const [focused,setFocused]= useState(false)
    
    return (
        <div className='md:max-w-[50%] mx-auto bg-green-400 my-3'>
            
            <div className="askForm bg-white p-3   shadow-md">

                <form  className='flex gap-2'>
                    <input
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    
                    className='w-full rounded-full bg-bgColor outline-darkShade outline-[0.5px] p-2  placeholder:pl-3 placeholder:text-xl placeholder:text-textColor ' type="text" placeholder={FormInputData.inputPlaceholder} />

                    {

focused ? <button className='text-xl px-2  bg-bgColor  rounded-full '><FiSearch size={30}/></button>
:
<button className='text-xl px-12  bg-bgColor  rounded-full '>{FormBtn.name}</button>

                    }
                    
                </form>

            </div>


        </div>
    );
};

export default Find;