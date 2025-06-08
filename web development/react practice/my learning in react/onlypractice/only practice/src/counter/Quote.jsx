import React, { useEffect, useState } from "react";

const Quote = () => {
  const [orginalData, setOrginalData] = useState([]);
  const [currentQuote, setCurrentQuote] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setOrginalData(data.quotes);
      });
  }, []);

  useEffect(() => {
    console.log(orginalData);
  }, [orginalData]);

  orginalData.map((quote) => {
    console.log(quote.quote);
  });
  
  return (
    <div>
      <h1>quotes</h1>
      <p>{currentQuote}</p>
      <button
        onClick={() => {
          setCurrentQuote();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Quote;
