import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/vlifer.png'
import '../../utils/style.css'

const Footer = () => {
    return (
        //         <footer className='bg-bgColor'>
        //         <div className="container mx-auto py-10">

        // <div className="footer flex justify-around items-center">

        //     <div className="left flex gap-3">
        //         <img  className='w-20' src={logo}  alt="logo" />
        //         <div className="content">
        //             <h2 className='text-xl'>V-Lifer</h2>
        //             <h4 className='text-xl font-bold'>vlifer.com</h4>
        //             <p className='text-lg'>This is our slogan text.</p>
        //         </div>
        //     </div>
        //     <div className="right">
        //     <h4 className='text-xl font-bold text-center'>Stay with us</h4>
        //     <div className="icons my-5 flex gap-10">
        //         <FaFacebookF size={25}/>
        //         <FaFacebookMessenger size={25}/>
        //         <MdMailOutline size={25}/>
        //         <AiFillYoutube size={25}/>
        //         <FaWhatsapp size={25}/>
        //     </div>
        //     <div className="links flex justify-around items-center">
        //         <Link className='text-sm'>Privecy & policy</Link>
        //         <Link className='text-sm'>Term & conditaion</Link>
        //     </div>
        //     </div>

        // </div>

        //         </div>
        //         </footer>
        <div className='mt-0 pt-0'>
            <div className="form-control fotter-input lg:w-1/3 w-96">
                <label className="label">
                    <span className="label-text font-bold">Subscribe Newsletter For stay updated</span>
                </label>
                <div className="">
                    <input type="text" placeholder="username@site.com" className="input input-bordered lg:w-96 w-48pr-16" />
                    <button className="btn bg-white rounded-l-none" style={{ color: '#1479FF' }}>Subscribe</button>
                </div>
            </div>

            <footer className="footer p-10 text-base-content lg:pb-12 pb-32" style={{ backgroundColor: '#2C86FF' }}>
                {/* <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div> */}

                <div className='flex flex-col justify-center justify-items-center'>
                    <div className='text-center mr-auto lg:ml-48 mb-10 pl-20 lg:pl-0'>
                        <h1 className='text-black text-2xl font-bold mb-3'>VLIFER.COM</h1>
                        <p className='text-black font-semibold'>"Make life easier <br /> Join with VLIFER "</p>
                    </div>

                    <div className='lg: ml-0 ml-4'>
                        {/* <img src="https://i.ibb.co/BtxNxQQ/Screenshot-2023-02-21-134839-1.png" alt="" /> */}

                        <div className="carousel fotter-slider">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/BtxNxQQ/Screenshot-2023-02-21-134839-1.png" alt='' className="w-full" />
                                {/* 
                                <div className="absolute flex justify-between bg-white p-0 m-0 transform -translate-y-1/2 left-1 right-1" style={{ top: '300px' }}>
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div> */}
                            </div>

                            <div id="slide2" className="carousel-item relative w-full">
                                {/* <img src="https://i.ibb.co/BtxNxQQ/Screenshot-2023-02-21-134839-1.png" alt='' className="w-full" />
                                <div className="absolute flex justify-between bg-white p-0 m-0 transform -translate-y-1/2 left-1 right-1" style={{ top: '300px' }}>
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div> */}


                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/BtxNxQQ/Screenshot-2023-02-21-134839-1.png" alt='' className="w-full" />

                                {/* 
                                <div className="absolute flex justify-between bg-white p-0 m-0 transform -translate-y-1/2 left-1 right-1" style={{ top: '300px' }}>
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div> */}


                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/BtxNxQQ/Screenshot-2023-02-21-134839-1.png" alt='' className="w-full" />
                                {/* 
                                <div className="absolute flex justify-between bg-white p-0 m-0 transform -translate-y-1/2 left-1 right-1" style={{ top: '300px' }}>
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div> */}


                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:block flex'>
                    <div>
                        <span className="text-black font-bold text-base ">Decomention</span>
                        <br /><a className="link link-hover">Web decomention</a>
                        <br /><a className="link link-hover">Vedio decomention</a>
                        <br /><a className="link link-hover">Pdf decomention</a>

                    </div>
                    <div className='lg:mt-8 lg:ml-0 ml-4'>
                        <span className="text-black font-bold text-base ">Legal</span>
                        <ul>
                            <li className="link link-hover">Privacy and policy</li>
                            <li className="link link-hover">Term and condition</li>
                        </ul>
                    </div>

                </div>


                <div className='lg:block flex'>
                    <div>
                        <span className="text-black font-bold text-base ">Follow Us</span>
                        <br /><a className="link link-hover">Facebook</a>
                        <br /><a className="link link-hover">Youtube</a>
                        <br /><a className="link link-hover">Twetter</a>
                    </div>

                    <div className='lg:mt-8 ml-20 lg:ml-0'>
                        <span className="text-black font-bold text-base ">Contact</span>
                        <br /><a className="link link-hover">info@vlifer.com</a>
                        <br /><a className="link link-hover">support@vlifer.com</a>
                        <a className="link link-hover">Twetter</a>
                    </div>


                </div>

                <div>

                </div>
            </footer>

        </div>
    );
};

export default Footer;