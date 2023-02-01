import React from 'react';
import { FiEdit } from 'react-icons/fi';

const Info = () => {
    return (
        <div className='md:max-w-[50%] mx-auto bg-green-400 my-4'>
          <div className="info bg-white p-3 shadow-md">

            
                <p className='text-primaryColor text-lg items-center justify-end gap-3 mx-4 flex'><FiEdit/> Edit</p>
          
           
           {/* information table */}

           <table>
           <tr class="bg-blue-200 lg:text-black">
            <td class="p-3 font-medium capitalize">Gazi Rahad</td>
            <td class="p-3">gazi.rahad871@gmail.com</td>



          </tr>
           </table>



          </div>
        </div>
    );
};

export default Info;