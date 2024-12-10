import { Link } from 'react-router-dom';
import React from 'react';

const SimpleTest = () => {
  return (
    <div>
      <h1>Test Navigation</h1>
      <Link to="/carabao" className='test-link'>Test Buy Now</Link>
      <Link to="/carabao-products" className='test-link'>Test Order Now</Link>
    </div>
  );
}

export default SimpleTest;
