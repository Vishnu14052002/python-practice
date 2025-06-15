import React, { useState } from 'react'

const FilterComp = () => {
    
    const [lessfifty, setLessFifts] = useState(false);
    const [fiftyToHundred, setFiftyToHundred] = useState(false);
    const [morehundred, setMorehundred] = useState(false);
    const [mensCatg, setMensCatg] = useState(false);
    const [womenCatg, setWomenCatg] = useState(false);
    const [jeweleryCatg, setJeweleryCatg] = useState(false);
    const [electronicsCatg, setElectronicsCatg] = useState(false);

    const handleCheckboxChange = (event) => {
        setLessFifts(event.target.checked);
    };

    return (
    <div>
        <h1>filters</h1>

        <p>less than 50</p>
        <input 
            type="checkbox" 
            onChange={handleCheckboxChange}
        />

        <p>50 to 100</p>
        <input 
            type="checkbox"  
        />

        <p>more than 100</p>
        <input 
            type="checkbox"      
        />

        <p>mens category</p>
        <input 
            type="checkbox"      
        />

        <p>womens category</p>
        <input 
            type="checkbox"      
        />

        <p>jewelery category</p>
        <input 
            type="checkbox"      
        />

        <p>electronics category</p>
        <input 
            type="checkbox"      
        />

        <p>check box is {lessfifty ? "checked" : "unchecked"}</p>
    </div>
    )
}

export default FilterComp
