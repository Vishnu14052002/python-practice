import React from 'react'
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
    const userLoggedin = true;
    const cartItemNumber = 2;
    const showRegister = false;
    const showLogin = true;
    const login = (
        <div className="loginMainModel">
          <div className="loginSuma">
            <h2 className="loginModel">Login</h2>
            <IoCloseSharp className="loginModelCloseIcon" />
          </div>
          <form>
            <input placeholder="Email or phone number" /><br />
            <input type="password" placeholder="Password" /><br />
            <button className="formButton">Login</button>
          </form>
      
          <p>or</p>
          <h4>Register</h4>
        </div>
      );
    
    const register = (
        <div className="RegisterMainModel">
            <div className="registerSuma">
                <h2 className="RegisterModel">Register</h2>
                <IoCloseSharp className='RegisterModelCloseIcon'/>
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
            <h4>Login</h4>
        </div>
    );
    

    return (
        <>
        <div className='maindiv'>
            <div className="logo">
                <img className='mainlogo' src='../../src/assets/logo.png' alt='logo'></img>
            </div>

            <div className="deliveryadderess">
                <CiLocationOn className='deliverylogo'/>
                <div className="addressfetch">
                    <p>deliver to {userName}</p>
                    <p>{userAdderss}</p>
                </div>
            </div>

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
                        <IoMdArrowDropdown className='dropdownarrow'/>
                    </>
                ): 
                <>
                    <h4>login / register</h4>
                </>
                }
            </div>

            <div className="cart">
                <p className='cartItemNumber'>{cartItemNumber}</p>
                <CgShoppingCart className='carticon'/>
            </div>
        </div>

        <div className="authWrapper">
            {showLogin ? login : register}
        </div>

        <div className="authWrapper">
            {showLogin && login}
            {showRegister && register}
        </div>
        </>
    )
}

export default Header
