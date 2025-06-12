import React from 'react'
import styles from './MainHeader.module.css'; // import as 'styles'
import { IoLocationOutline } from "react-icons/io5";

const MainHeader = () => {
  return (
    <div>
        <div className={styles.maindiv}>
            <div>
                <img className={styles.mainlogo} src='./src/assets/amazon-logo.png'></img>
            </div>
            <div className={styles.address}>
                <p className={styles.addressfont}>{<IoLocationOutline />}</p>
                <div>
                    <p style={{ color: '#C7C7C8', fontSize: "13px" }}>deliver to Vishnu</p>
                    <p style={{color: "white", fontWeight: "700"}}>Chelmsford</p>
                </div>
            </div>
            <div>
                <select id="city">
                    <option value="">Select</option>
                    <option value="london">London</option>
                    <option value="paris">Paris</option>
                    <option value="newyork">New York</option>
                </select>
                <input placeholder='Search Amazon'></input>
            </div>
            <div>
                <h1>language</h1>
            </div>
            <div>
                <h1>welcome vishnu</h1>
            </div>
            <div>
                <h1>orders</h1>
            </div>
            <div>
                <h1>cart</h1>
            </div>
        </div>
    </div>
  )
}

export default MainHeader
