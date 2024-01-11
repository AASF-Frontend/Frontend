import { NavLink } from "react-router-dom";
import clubLogo from '../Images/Club_logo.png';
import './Navbar.css'

export default function Navbar() {

    return (

        <div className=" " >  

            <div className="navbar  flex flex-wrap justify-evenly items-center w-full gap-20 fixed top-0 text-[20px]  " >

                <div className="h-[50px] w-[50px] m-4  " >
                    <NavLink to='/'><img src={clubLogo} className="w-full h-full" ></img></NavLink>
                </div>
                <div className="m-4 hover:scale-[1.2] glow-on-hover text-center " >
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className="m-4  glow-on-hover text-center">
                    <NavLink to='/About'>About</NavLink>
                </div>
                <div className="m-4  glow-on-hover text-center">
                    <NavLink to='/Quiz'>Quiz</NavLink>
                </div>
                <div className="m-4  glow-on-hover text-center">
                    <NavLink to='/Games'>Games</NavLink>
                </div>

                <div className="m-4 button-container flex gap-4 text-center py-[2px] px-3 rounded-2xl ">

                    <NavLink to='/LogIn'>
                        <button className="flip-button animation" >LogIn</button>
                    </NavLink>
                    <NavLink to='/SignUp'>
                        <button className="flip-button animation" >SignUp</button>
                    </NavLink>
                </div>
            </div>

            <div className="navbarImages max-w-[vw] h-[400px] " ></div>

        </div>

    );
}