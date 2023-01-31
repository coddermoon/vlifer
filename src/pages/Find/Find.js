import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Searchbox from '../../components/Searchbox';
const FormBtn = {name:'Find',icons:FiSearch }
const FormInputData  = {inputPlaceholder:'find a Problem'}

const Find = () => {
    return (
        <div className='md:max-w-[50%] mx-auto bg-green-400 my-3'>
            <div className="askForm bg-white p-6   shadow-md">

<form  className='flex gap-5'>
    <input className='w-full rounded-full  p-2 border border-primaryColor placeholder:pl-3 placeholder:text-xl' type="text" placeholder={FormInputData.inputPlaceholder} />
    <button className='text-xl px-5 '>{FormBtn.name}</button>
</form>

</div>

        </div>
    );
};

export default Find;