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

export const activeClassName=" bg-primaryColor  p-2 md:px-3 md:py-2  rounded-full flex gap-2 items-center text-md  md:text-lg  leading-5 text-white m-2"
export const normalClassName="  p-1  md:px-3 md:py-2 rounded-full flex gap-2 items-center   text-lg  leading-5 text-primaryColor hover:bg-bgColor m-2 hover:bg-bgColor"
export const normalToolsClassName="hover:bg-bgColor  p-2  rounded-full flex gap-2 items-center   text-lg  leading-5 text-primaryColor m-2 "
export const normalActiveToolsClassName="  p-2  rounded-full flex gap-2 items-center   text-lg  leading-5 text-white bg-primaryColor m-2 "


// user nav Items

export const userNavItems = [
    {name:'Ask',path:'/solver/users/ask'},
    {name:'Ans',path:'/solver/users/ans'},
    {name:'Save',path:'/solver/users/save'},
    {name:'Mate',path:'/solver/users/mate'},
    {name:'Info',path:'/solver/users/info'},
]


export const userActiveClassName = 'text-lg text-primaryColor'

// user solveed navBar

export const userSolvedNavItems = [
    {name:'Ask',path:'/solver/users/ask'},
    {name:'Solved',path:'/solver/users/ans'},
 


]

export const toolItems = [
    {name: 'Ask',icons:AiOutlineQuestionCircle,path:'/solver/tools/ask'},
    {name: 'Find',icons: MdOutlineLightMode ,path:'/solver/tools/mode'},
    {name: 'You',icons:AiOutlineUser,path:'/solver/tools/users'},
    {name: 'Bell',icons:AiOutlineBell,path:'/solver/tools/bells'},
    {name: 'Bell',icons:AiOutlineBell,path:'/solver/tools/bella'},
    {name: 'Bell',icons:FiSettings ,path:'/solver/tools/settings'},
]