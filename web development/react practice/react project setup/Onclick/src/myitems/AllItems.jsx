import React, { useState } from 'react';

const ItemData = [
  {
    id: 1,
    Img: 'vishnu',
    Age: 23,
    Qualification: 'masters in Artificial Intelligence',
    Intelligence: true,
  },
  {
    id: 2,
    Img: 'Gowri',
    Age: 23,
    Qualification: 'masters in Mech',
    Intelligence: false,
  },
  {
    id: 3,
    Img: 'Lithesh',
    Age: 23,
    Qualification: 'masters in Business',
    Intelligence: false,
  },
  {
    id: 4,
    Img: 'Priya',
    Age: 23,
    Qualification: 'masters in EEE',
    Intelligence: false,
  },
  {
    id: 5,
    Img: 'Kuberan',
    Age: 23,
    Qualification: 'masters in Data Science',
    Intelligence: false,
  },
];

const Items = (props) => {
  const [detailsFetched, setDetailsFetched] = useState(false);

  const handleClick = () => {
    console.log(
      props.Intelligence
        ? `${props.name} is intelligent`
        : `${props.name} is not intelligent`
    );
    setDetailsFetched(true); 
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <p>Name: {props.name}</p>
      <p>Age: {props.Age}</p>
      <p>Qualification: {props.Qualification}</p>
      <p>
        {props.Intelligence
          ? `${props.name} is intelligent`
          : `${props.name} is not intelligent`}
      </p>
      <button onClick={handleClick}>Check</button>
      {detailsFetched && <p>{props.name} is fetched</p>}
    </div>
  );
};

const AllItems = () => {
  return (
    <div>
      {ItemData.map((item) => (
        <Items
          key={item.id}
          name={item.Img}
          Age={item.Age}
          Qualification={item.Qualification}
          Intelligence={item.Intelligence}
        />
      ))}
    </div>
  );
};

export default AllItems;
