import React, { useState, useCallback } from 'react';
import CartComp from './CartComp';
import FilterComp from './FilterComp';
import EProducts from './EProducts';

const ParentEcommerse = () => {
  const [filterValues, setFilterValues] = useState({
    priceRange: '',
    mensCatg: false,
    womenCatg: false,
    jeweleryCatg: false,
    electronicsCatg: false,
  });

  // Memoize the callback to prevent recreation on every render
  const handleFiltersChange = useCallback((newFilters) => {
    setFilterValues(newFilters);
  }, []);

  console.log("FILTER STATE:", filterValues);

  return (
    <div>
      <CartComp />
      <FilterComp onFiltersChange={handleFiltersChange} />
      <EProducts filters={filterValues} />
    </div>
  );
};

export default ParentEcommerse;