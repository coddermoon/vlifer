import React from 'react';
import { FiEdit } from 'react-icons/fi';

const Info = () => {
    return (
        <div className='md:max-w-[50%] mx-auto bg-green-400 my-4 mt-5'>
          <div className="info bg-white p-3 shadow-md">

            
                <p className='text-primaryColor w-[80%] text-lg items-center justify-end gap-3 mx-auto px-2 flex'><FiEdit/> Edit</p>
          
           
           {/* information table */}

           <table className='my-3 w-[80%] mx-auto' >

<tr>
  <td className='w-[35%]'>Full Name</td>
  <td>Full Name</td>

</tr>
<tr>
  <td>Nick Name</td>
  <td>Nick Name</td>

</tr>
<tr>
  <td>Age</td>
  <td>Age</td>

</tr>
<tr>
  <td>Gender</td>
  <td>Gender</td>

</tr>
<tr>
  <td>Occupation</td>
  <td>Occupation</td>

</tr>
<tr>
  <td>Riligion</td>
  <td>Riligion</td>

</tr>
<tr>
  <td>Language</td>
  <td>Language</td>

</tr>
<tr>
  <td>Nationality</td>
  <td>Nationality</td>

</tr>
<tr>
  <td>Description</td>
  <td>Description</td>

</tr>

</table>



          </div>
        </div>
    );
};

export default Info;