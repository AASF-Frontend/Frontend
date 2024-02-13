import './Footer.css';
import clubImage from '../Images/Club_logo.png';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default function Footer() {

    return (

        <div className="new_footer_area bg_color max-w-[1200px] w-auto m-auto ">

            <div className=' footerSection flex items-center justify-center max-w-[1100px] w-[1200px] mt-[80px] ' >

                <div className=' place-content-center max-w-[1300px] w-[1200px]' >

                    <div className=' clubNameText clubNameText-[60px] text-center  m-8 ' >
                        Abhgyan abhikaushalam student forum
                    </div>

                    <div className='flex items-center justify-center m-8 ' >
                        <img src={clubImage} height={50} width={50} />
                    </div>

                    <div className='text-center m-5 text-green-500 text-[25px] ' >Join US Now !</div>

                    <NavLink to='/SignUp' className='flex items-center justify-center m-8 ' >
                        <button className="bg-green-500 rounded-lg px-12 py-[5px] text-[20px] hover:scale-[1.2] duration-[600ms] hover:text-red-500" >SignUp</button>
                    </NavLink>


                    <div className=' homeAndicons flex items-center justify-between' >
                        <div className='flex text-[20px] gap-8 py-10' >
                            <NavLink to='/' className='hover:scale-[1.5] duration-[600ms] hover:text-red-500 ' >Home</NavLink>
                            <NavLink to='/About' className='hover:scale-[1.5] duration-[600ms] hover:text-red-500 ' >About</NavLink>
                            <NavLink to='/Legal' className='hover:scale-[1.5] duration-[600ms] hover:text-red-500 ' >Legal</NavLink>
                            <NavLink to='/Contact' className='hover:scale-[1.5] duration-[600ms] hover:text-red-500 ' >Contact</NavLink>
                        </div>

                        <div className='flex justify-between items-center gap-9 '>
                            <NavLink>
                                <FaInstagram size={48} className=' icons hover:scale-[1.3] duration-[600ms] hover:text-red-500 ' />
                            </NavLink>
                            <NavLink>
                                <FaFacebook size={45} className='icons hover:scale-[1.3] duration-[600ms] hover:text-red-500 ' />
                            </NavLink>
                            <NavLink>
                                <FaTwitter size={45} className='icons hover:scale-[1.3] duration-[600ms] hover:text-red-500 ' />
                            </NavLink>
                            <NavLink>
                                <FaLinkedin  size={50} className='icons hover:scale-[1.3] duration-[600ms] hover:text-red-500 ' />
                            </NavLink>

                        </div>

                    </div>
                </div>

            </div>

            <div class="new_footer_top">
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>

        </div>

    );

}
