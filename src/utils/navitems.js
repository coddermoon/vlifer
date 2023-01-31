import { AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";

import { FiSearch } from "react-icons/fi";

export const navItems = [
{name: 'Ask',icons:AiOutlineQuestionCircle,path:'/ask'},
{name: 'Find',icons:FiSearch,path:'/find'},
{name: 'You',icons:AiOutlineUser,path:'/users'},
{name: 'Bell',icons:AiOutlineBell,path:'/bell'},

]


export const activeClassName=" bg-primaryColor  p-1  md:px-3 md:py-2 rounded-full flex gap-2 items-center px-3 py-2  text-xl  leading-5 text-white "
export const normalClassName="  p-1  md:px-3 md:py-2 rounded-full flex gap-2 items-center px-3 py-2  text-xl  leading-5 text-primaryColor hover:bg-bgColor"