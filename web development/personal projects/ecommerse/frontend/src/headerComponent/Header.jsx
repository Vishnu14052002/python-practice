import React, { useState } from 'react'
import './header.css'
import '../../src/assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {
    const userAdderss = 'chelmsford';
    const userName = 'vishnu';
    const [userLoggedin, setUserLoggedIn] = useState(true);
    const cartItemNumber = 2;
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [dropdownarrow, setDropdownarrow] = useState(false);
    const login = (
        <div className="loginMainModel">
          <div className="loginSuma">
            <h2 className="loginModel">Login</h2>
            <IoCloseSharp onClick={() => {setShowLogin(false)}} className="loginModelCloseIcon" />
          </div>
          <form>
            <input placeholder="Email or phone number" /><br />
            <input type="password" placeholder="Password" /><br />
            <button className="formButton">Login</button>
          </form>
      
          <p>or</p>
          <h4 onClick={() => {setShowLogin(false);setShowRegister(true)}}>Register</h4>
        </div>
      );
    
    const register = (
        <div className="RegisterMainModel">
            <div className="registerSuma">
                <h2 className="RegisterModel">Register</h2>
                <IoCloseSharp onClick={() => {setShowRegister(false)}} className='RegisterModelCloseIcon'/>
            </div>
            <form>
                <input placeholder='Name' /><br />
                <input placeholder='Email' /><br />
                <input placeholder='Number' /><br />
                <input placeholder='Address' /><br />
                <input type="password" placeholder='Password' /><br />
                <input type="password" placeholder='Re-enter Password' /><br />
                <button className="formButton">Register</button>
            </form>

            <p>or</p>
            <h4 onClick={() => {setShowLogin(true);setShowRegister(false)}}>Login</h4>
        </div>
    );
    

    return (
        <>
        <div className='maindiv'>
            <div className="logo">
                <img className='mainlogo' src='../../src/assets/logo.png' alt='logo'></img>
            </div>

            {userLoggedin && 
                        <div className="deliveryadderess">
                        <CiLocationOn className='deliverylogo'/>
                        <div className="addressfetch">
                            <p>deliver to {userName}</p>
                            <p>{userAdderss}</p>
                        </div>
                    </div>
            }


            <div className="searchbar">
                <input className='searchbar1' placeholder='search products'></input>
                <FaSearch className='searchIcon'/>
            </div>

            <div className="accounts">
                {userLoggedin ? (
                    <>
                        <div className="accountstop">
                        <p>hello {userName}</p>
                        <h3>accounts and list</h3>
                        </div>
                        <IoMdArrowDropdown onClick={() => setDropdownarrow(true)} className='dropdownarrow'/>
                    </>
                ): 
                <>
                    <h4 onClick={() => {setShowLogin(true)}}>login / register</h4>
                </>
                }
            </div>
{/* sssss*/}s
            <div className="cart">
                <p className='cartItemNumber'>{cartItemNumber}</p>
                <CgShoppingCart className='carticon'/>
            </div>
        </div>



        <div className="authWrapper">
            {showLogin && login}
            {showRegister && register}
        </div>
        </>
    )
}

export default Header
