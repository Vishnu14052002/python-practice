import React from 'react';

const DisplayComponent = ({ formData }) => {
  return (
    <div>
      <h2>Received Data:</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default DisplayComponent;
