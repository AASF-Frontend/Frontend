import './Footer.css';
import clubImage from '../Images/Club_logo.png';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function Footer() {

    return (

        <div className="new_footer_area bg_color max-w-[1200px] w-auto m-auto ">

            <div className='flex items-center justify-center max-w-[1300px] w-[1200px] mt-[80px] ' >

                <div className=' place-content-center max-w-[1300px] w-[1200px]' >

                    <div className='text-[60px] text-center  m-8 ' >
                        Abhgyan abhikaushalam student forum
                    </div>

                    <div className='flex items-center justify-center m-8 ' >
                        <img src={clubImage} height={50} width={50} />
                    </div>

                    <div className='text-center m-5 text-green-500 text-[25px] ' >Join US Now !</div>

                    <NavLink to='/SignUp' className='flex items-center justify-center m-8 ' >
                        <button className="bg-green-500 rounded-lg px-12 py-[5px] text-[20px] hover:scale-[1.2] duration-[600ms] hover:text-red-500" >SignUp</button>
                    </NavLink>


                    <div className='flex items-center justify-between' >
                        <div className='flex text-[20px] gap-8 ' >
                            <NavLink to='/' className='hover:scale-[1.5] duration-[600ms] hover:text-red-500 ' >Home</NavLink>
                            <NavLink to='/About' className='hover:scale-[1.5] duration-[600ms] hover:text-red-500 ' >About</NavLink>
                            <NavLink to='/Legal' className='hover:scale-[1.5] duration-[600ms] hover:text-red-500 ' >Legal</NavLink>
                        </div>

                        <div className='flex justify-between items-center gap-9 '>
                            <NavLink>
                                <FaInstagram size={53}  className='hover:scale-[1.3] duration-[600ms] hover:text-red-500 ' />
                            </NavLink>
                            <NavLink>
                            <FaFacebook size={50} className='hover:scale-[1.3] duration-[600ms] hover:text-red-500 ' />
                            </NavLink>
                            <NavLink>
                            <FaTwitter size={50} className='hover:scale-[1.3] duration-[600ms] hover:text-red-500 ' />
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


// {/* <div class="footer_bottom">
//                     <div class="container">
//                         <div class="row align-items-center">
//                             <div class="col-lg-6 col-sm-7">
//                                 <p class="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
//                             </div>
//                             <div class="col-lg-6 col-sm-5 text-right">
//                                 <p>Made with <i class="icon_heart"></i> in <a href="http://cakecounter.com" target="_blank">CakeCounter</a></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}


// {/* <div class="col-lg-3 col-md-6">
//                                 <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
//                                     <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>          

//                                     <p>Don’t miss any updates of our new templates and extensions.!</p>
//                                     <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
//                                         <input type="text" name="EMAIL" class="form-control memail" placeholder="Email" />
//                                         <button class="btn btn_get btn_get_two" type="submit">Subscribe</button>
//                                         <p class="mchimp-errmessage" style={{display: 'none'}}></p>
//                                         <p class="mchimp-sucmessage" style={{display: 'none'}}></p>
//                                     </form>
//                                 </div>
//                             </div> */}
//                             {/* <div class="col-lg-3 col-md-6">
//                                 <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
//                                     <h3 class="f-title f_600 t_color f_size_18">Download</h3>
//                                     <ul class="list-unstyled f_list">
//                                         <li><a href="#">Company</a></li>
//                                         <li><a href="#">Android App</a></li>
//                                         <li><a href="#">ios App</a></li>
//                                         <li><a href="#">Desktop</a></li>
//                                         <li><a href="#">Projects</a></li>
//                                         <li><a href="#">My tasks</a></li>
//                                     </ul>
//                                 </div>
//                             </div> */}
//                             {/* <div class="col-lg-3 col-md-6">
//                                 <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
//                                     <h3 class="f-title f_600 t_color f_size_18">Help</h3>
//                                     <ul class="list-unstyled f_list">
//                                         <li><a href="#">FAQ</a></li>
//                                         <li><a href="#">Term &amp; conditions</a></li>
//                                         <li><a href="#">Reporting</a></li>
//                                         <li><a href="#">Documentation</a></li>
//                                         <li><a href="#">Support Policy</a></li>
//                                         <li><a href="#">Privacy</a></li>
//                                     </ul>
//                                 </div>
//                             </div> */}
//                             {/* <div class="col-lg-3 col-md-6">
//                                 <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
//                                     <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
//                                     <div class="f_social_icon">
//                                         <a href="#" class="fab fa-facebook"></a>
//                                         <a href="#" class="fab fa-twitter"></a>
//                                         <a href="#" class="fab fa-linkedin"></a>
//                                         <a href="#" class="fab fa-pinterest"></a>
//                                     </div>
//                                 </div>
//                             </div> */}