import React from 'react'
import './header.css'
import '../../src/assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";


const Header = () => {
    const userAdderss = 'chelmsford';
    const userName = 'vishnu';
    const userLoggedin = false;
    const cartItemNumber = 2;
    return (
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
    )
}

export default Header
