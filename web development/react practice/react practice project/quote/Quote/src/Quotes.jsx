import React, { useEffect, useState } from 'react';

const TOTAL_QUOTES = 3;          // how many items exist on the server

function Quotes() {
  const [data, setData]   = useState({ quote: '', author: '' });
  const [index, setIndex] = useState(0);

  // advance to the next quote (wrap around with %)
  const handleNext = () => setIndex(prev => (prev + 1) % TOTAL_QUOTES);

  useEffect(() => {
    fetch(`http://localhost:3000/${index}`)
      .then(res => {
        if (!res.ok) throw new Error('404');
        return res.json();
      })
      .then(setData)
      .catch(err => {
        console.error(err);
        setData({ quote: 'Not found', author: '' });
      });
  }, [index]);                  // <- re-fetch whenever index changes

  return (
    <div>
      <h1>Quote #{index}</h1>
      <p>{data.author}</p>
      <p>{data.quote}</p>
      <button onClick={handleNext}>next</button>
    </div>
  );
}

export default Quotes;
