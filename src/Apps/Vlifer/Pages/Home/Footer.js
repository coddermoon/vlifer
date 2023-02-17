import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/vlifer.png'

const Footer = () => {
    return (
        <footer className='bg-bgColor'>
        <div className="container mx-auto py-10">

<div className="footer flex justify-around items-center">

    <div className="left flex gap-3">
        <img  className='w-20' src={logo}  alt="logo" />
        <div className="content">
            <h2 className='text-xl'>V-Lifer</h2>
            <h4 className='text-xl font-bold'>vlifer.com</h4>
            <p className='text-lg'>This is our slogan text.</p>
        </div>
    </div>
    <div className="right">
    <h4 className='text-xl font-bold text-center'>Stay with us</h4>
    <div className="icons my-5 flex gap-10">
        <FaFacebookF size={25}/>
        <FaFacebookMessenger size={25}/>
        <MdMailOutline size={25}/>
        <AiFillYoutube size={25}/>
        <FaWhatsapp size={25}/>
    </div>
    <div className="links flex justify-around items-center">
        <Link className='text-sm'>Privecy & policy</Link>
        <Link className='text-sm'>Term & conditaion</Link>
    </div>
    </div>

</div>

        </div>
        </footer>
    );
};

export default Footer;