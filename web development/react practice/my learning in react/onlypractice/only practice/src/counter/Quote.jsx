import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [a, setA] = useState(0)

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading quotes...</p>;
  const firstQuote = quotes;

  
  

  const ui = (
    <>
    <p>{quotes[a].quote}</p>
    <button onClick={(e) => {e.preventDefault();setA((prev) => (prev + 1) % quotes.length)}}>next</button>
    </>
  );


  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {
            firstQuote ? ui : null
        }
      </ul>
    </div>
  );
};

export default Quote;
