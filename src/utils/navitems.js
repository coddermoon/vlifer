import { AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import {MdOutlineLightMode } from "react-icons/md";

import { FiSearch, FiSettings } from "react-icons/fi";

export const navItems = [
{name: 'Ask',icons:AiOutlineQuestionCircle,path:'/ask'},
{name: 'Find',icons:FiSearch,path:'/find'},
{name: 'You',icons:AiOutlineUser,path:'/users'},
{name: 'Bell',icons:AiOutlineBell,path:'/bell'},

]


// export css classs for main nevigations

export const activeClassName=" bg-primaryColor  p-1  md:px-3 md:py-2 rounded-full flex gap-2 items-center px-3 py-2  text-lg  leading-5 text-white m-2"
export const normalClassName="  p-1  md:px-3 md:py-2 rounded-full flex gap-2 items-center px-3 py-2   text-xl  leading-5 text-primaryColor hover:bg-bgColor m-2"


// user nav Items

export const userNavItems = [
    {name:'ask',path:'/users/ask'},
    {name:'ans',path:'/users/ans'},
    {name:'save',path:'/users/save'},
    {name:'mate',path:'/users/mate'},
    {name:'info',path:'/users/info'},
]


export const userActiveClassName = 'text-lg text-primaryColor'

// user solveed navBar

export const userSolvedNavItems = [
    {name:'Ask',path:'/users/ask'},
    {name:'Solved',path:'/users/ans'},

]

export const toolItems = [
    {name: 'Ask',icons:AiOutlineQuestionCircle,path:'tools/ask'},
    {name: 'Find',icons: MdOutlineLightMode ,path:'/tools/mode'},
    {name: 'You',icons:AiOutlineUser,path:'/tools/users'},
    {name: 'Bell',icons:AiOutlineBell,path:'/tools/bells'},
    {name: 'Bell',icons:AiOutlineBell,path:'/tools/bella'},
    {name: 'Bell',icons:FiSettings ,path:'/tools/settings'},
]