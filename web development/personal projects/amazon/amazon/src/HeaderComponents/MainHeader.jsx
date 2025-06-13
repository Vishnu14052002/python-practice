import React from 'react';
import styles from './MainHeader.module.css';
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';

const MainHeader = () => {
  return (
    <div className={styles.maindiv}>
      {/* Logo */}
      <div>
        <img
          className={styles.mainlogo}
          src="./src/assets/amazon-logo.png"
          alt="Amazon Logo"
        />
      </div>

      {/* Address */}
      <div className={styles.address}>
        <p className={styles.addressfont}>
          <IoLocationOutline />
        </p>
        <div>
          <p style={{ color: '#C7C7C8', fontSize: '13px' }}>Deliver to Vishnu</p>
          <p style={{ color: 'white', fontWeight: '700' }}>Chelmsford</p>
        </div>
      </div>

      {/* Search bar */}
      <div className={styles.entiresearch}>
        <select className={styles.dropdown}>
          <option value="">All</option>
          <option value="london">London</option>
          <option value="paris">Paris</option>
          <option value="newyork">New York</option>
        </select>
        <input className={styles.searchbox} placeholder="Search Amazon" />
        <span className={styles.searchicon}>
          <IoMdSearch />
        </span>
      </div>

      {/* Language */}
      <div className={styles.language}>
        <p className={styles.languageText}>EN</p>
      </div>

      {/* Account */}
      <div className={styles.account}>
        <p style={{ color: '#C7C7C8', fontSize: '13px' }}>Hello, Vishnu</p>
        <p style={{ color: 'white', fontWeight: '700' }}>Account & Lists</p>
      </div>

      {/* Orders */}
      <div className={styles.orders}>
        <p style={{ color: '#C7C7C8', fontSize: '13px' }}>Returns</p>
        <p style={{ color: 'white', fontWeight: '700' }}>& Orders</p>
      </div>

      {/* Cart */}
      <div className={styles.cart}>
        <FaShoppingCart className={styles.carticon} />
        <span className={styles.cartcount}>0</span>
        <p style={{ color: 'white', fontWeight: '700' }}>Cart</p>
      </div>
    </div>
  );
};

export default MainHeader;
