import React from 'react'
import './header.css'
import '../../src/assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";


const Header = () => {
    const userAdderss = 'chelmsford';
    const userName = 'vishnu';
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
        </div>

        <div className="accounts">
            <div className="accountstop">
                <p>hello {userName}</p>
                <h3>accounts and list</h3>
            </div>
            <IoMdArrowDropdown className='dropdownarrow'/>
        </div>

        <div className="cart">
        <CgShoppingCart className='carticon'/>
        </div>
    </div>
    )
}

export default Header
