import { NavLink } from "react-router-dom";
import clubLogo from '../Images/Club_logo.png';
import './Navbar.css'

export default function Navbar() {

    return (

        <div className=" " >  

            <div className="navbar flex flex-wrap justify-evenly items-center w-full gap-20 absolute text-[23px] text-black " >

                <div className="h-[50px] w-[50px] m-4  " >
                    <NavLink to='/'><img src={clubLogo} className="w-full h-full" ></img></NavLink>
                </div>
                <div className="m-4 hover:scale-[1.2] hover:text-yellow-300 text-center " >
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className="m-4 hover:scale-[1.2] hover:text-yellow-300  text-center">
                    <NavLink to='/About'>About</NavLink>
                </div>
                <div className="m-4  hover:scale-[1.2] hover:text-yellow-300 text-center">
                    <NavLink to='/Quiz'>Quiz</NavLink>
                </div>
                <div className="m-4 hover:scale-[1.2] hover:text-yellow-300  text-center">
                    <NavLink to='/Games'>Games</NavLink>
                </div>

                <div className="m-4 button-container flex border border-black rounded-3xl p-[7px] text-[17px] bg-[#FFFF00] px-6 text-center ">

                    <NavLink to='/LogIn'>
                        <button className="flip-button animation border-r-2 px-1.5 border-black text-black " >LogIn</button>
                    </NavLink>
                    <NavLink to='/SignUp'>
                        <button className="flip-button animation px-1.5 text-black " >SignUp</button>
                    </NavLink>
                </div>
            </div>

            <div className="navbarImages max-w-[vw] h-[400px] " ></div>

        </div>

    );
}