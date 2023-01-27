import { AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";

import { FiSearch } from "react-icons/fi";

export const navItems = [
{name: 'ask',icons:AiOutlineQuestionCircle,path:'/ask'},
{name: 'find',icons:FiSearch,path:'/find'},
{name: 'Users',icons:AiOutlineUser,path:'/users'},
{name: 'bell',icons:AiOutlineBell,path:'/bell'},
]


export const activeClassName=" bg-primaryColor  px-1 py-1 md:px-3 md:py-2 rounded-full flex gap-2 items-center px-3 py-2  text-xl  leading-5 text-white "
export const normalClassName="flex gap-2 items-center px-1 py-1 md:px-3 md:py-2 rounded-md text-xl  leading-5 text-primaryColor"