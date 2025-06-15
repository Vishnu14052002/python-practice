import React, { useState, createContext } from 'react';

export const checkBox = createContext();

const FilterComp = () => {
    const [priceRange, setPriceRange] = useState(""); // <-- use one state for all radios
    const [mensCatg, setMensCatg] = useState(false);
    const [womenCatg, setWomenCatg] = useState(false);
    const [jeweleryCatg, setJeweleryCatg] = useState(false);
    const [electronicsCatg, setElectronicsCatg] = useState(false);

    return (
        <div>
            <h1>Filters</h1>

            <label>
                <input 
                    type="radio"
                    name="price"
                    value="lessFifty"
                    checked={priceRange === "lessFifty"}
                    onChange={(e) => setPriceRange(e.target.value)}
                />
                Less than $50
            </label>

            <br />

            <label>
                <input 
                    type="radio"
                    name="price"
                    value="fiftyToHundred"
                    checked={priceRange === "fiftyToHundred"}
                    onChange={(e) => setPriceRange(e.target.value)}
                />
                $50 to $100
            </label>

            <br />

            <label>
                <input 
                    type="radio"
                    name="price"
                    value="moreHundred"
                    checked={priceRange === "moreHundred"}
                    onChange={(e) => setPriceRange(e.target.value)}
                />
                More than $100
            </label>

            <br />

            <label>
                <input 
                    type="checkbox" 
                    checked={mensCatg}
                    onChange={(e) => setMensCatg(e.target.checked)}
                />
                Men's Category
            </label>

            <br />

            <label>
                <input 
                    type="checkbox" 
                    checked={womenCatg}
                    onChange={(e) => setWomenCatg(e.target.checked)}
                />
                Women's Category
            </label>

            <br />

            <label>
                <input 
                    type="checkbox" 
                    checked={jeweleryCatg}
                    onChange={(e) => setJeweleryCatg(e.target.checked)}
                />
                Jewelery Category
            </label>

            <br />

            <label>
                <input 
                    type="checkbox" 
                    checked={electronicsCatg}
                    onChange={(e) => setElectronicsCatg(e.target.checked)}
                />
                Electronics Category
            </label>

            <br /><br />

            <div>
                <strong>Current Selections:</strong>
                <ul>
                    {priceRange === "lessFifty" && <li>Less than $50</li>}
                    {priceRange === "fiftyToHundred" && <li>$50 to $100</li>}
                    {priceRange === "moreHundred" && <li>More than $100</li>}
                    {mensCatg && <li>Men's Category</li>}
                    {womenCatg && <li>Women's Category</li>}
                    {jeweleryCatg && <li>Jewelery</li>}
                    {electronicsCatg && <li>Electronics</li>}
                </ul>
            </div>
        </div>
    );
};

export default FilterComp;
