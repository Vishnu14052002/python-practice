import React, { useState } from 'react';
import styles from './SubHeader.module.css';

const SideNav = ({ isOpen, onClose }) => {
  return (
    // header part
    <div className={`${styles.sideNav} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={onClose}>
        ×
      </button>
      <nav className={styles.navContent}>
        <h3>Digital Content & Devices</h3>
        <ul>
          <li>Prime Video</li>
          <li>Amazon Music</li>
          <li>Kindle E-readers & Books</li>
          <li>Amazon Appstore</li>
        </ul>

        <h3>Shop by Department</h3>
        <ul>
          <li>Electronics</li>
          <li>Computers</li>
          <li>Smart Home</li>
          <li>Arts & Crafts</li>
          <li><strong>See all</strong></li>
        </ul>

        <h3>Programs & Features</h3>
        <ul>
          <li>Gift Cards</li>
          <li>Shop By Interest</li>
          <li>Amazon Live</li>
          <li>International Shopping</li>
          <li><strong>See all</strong></li>
        </ul>

        <h3>Help & Settings</h3>
        <ul>
          <li>Your Account</li>
          <li>English</li>
          <li>United States</li>
          <li>Customer Service</li>
          <li>Sign Out</li>
        </ul>
      </nav>
    </div>
  );
};

const SubHeader = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => setSideNavOpen(!sideNavOpen);
  const closeSideNav = () => setSideNavOpen(false);

  return (
    <>
      <div className={styles.subheader}>
        <ul className={styles.menu}>
        <li className={styles.menuItem} onClick={toggleSideNav}>
        <span className={styles.hamburgerIcon}>&#9776;</span> All
        </li>
          <li className={styles.menuItem}>Rufus</li>
          <li className={styles.menuItem}>Today's Deals</li>
          <li className={styles.menuItem}>Prime Video</li>
          <li className={styles.menuItem}>Buy Again</li>
          <li className={styles.menuItem}>Customer Service</li>
          <li className={styles.menuItem}>Registry</li>
          <li className={styles.menuItem}>Gift Cards</li>
          <li className={styles.menuItem}>Sell</li>
        </ul>
      </div>

      <SideNav isOpen={sideNavOpen} onClose={closeSideNav} />

      {/* Optional: Overlay when side nav open */}
      {sideNavOpen && <div className={styles.overlay} onClick={closeSideNav}></div>}
    </>
  );
};

export default SubHeader;
