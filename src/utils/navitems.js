import { AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

export const navItems = [
{name: 'ask',icons:AiOutlineQuestionCircle,path:'/ask'},
{name: 'find',icons:CiSearch,path:'/find'},
{name: 'Users',icons:AiOutlineUser,path:'/users'},
{name: 'bell',icons:AiOutlineBell,path:'/bell'},
]


export const activeClassName=" bg-primaryColor rounded-full flex gap-2 items-center px-3 py-2  text-xl font-medium leading-5 text-white "
export const normalClassName="flex gap-2 items-center px-3 py-2 rounded-md text-xl font-medium leading-5 text-primaryColor"