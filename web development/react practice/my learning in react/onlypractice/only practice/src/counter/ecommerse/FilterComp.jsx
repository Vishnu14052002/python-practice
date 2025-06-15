import React, { useState, useEffect } from 'react';

const FilterComp = ({ onFiltersChange }) => {
  const [priceRange, setPriceRange] = useState("");
  const [mensCatg, setMensCatg] = useState(false);
  const [womenCatg, setWomenCatg] = useState(false);
  const [jeweleryCatg, setJeweleryCatg] = useState(false);
  const [electronicsCatg, setElectronicsCatg] = useState(false);

  // update parent on any change
  useEffect(() => {
    onFiltersChange({
      priceRange,
      mensCatg,
      womenCatg,
      jeweleryCatg,
      electronicsCatg
    });
  }, [priceRange, mensCatg, womenCatg, jeweleryCatg, electronicsCatg, onFiltersChange]);

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
    </div>
  );
};

export default FilterComp;
