import React from 'react'
import {useLocation,Link} from 'react-router-dom';

const ProductDescription = () => {
    const location = useLocation();
    const { image, title, description } = location.state || {};
  
    return (
      <div>
        <h1>Product Description</h1>
        <img src={image} alt={title} style={{ width: "200px" }} />
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  };

export default ProductDescription
