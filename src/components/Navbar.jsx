import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='links'>
        <Link to="/"> HOME </Link>
        <Link to="/music"> BLAH </Link>
        <Link to="/gigs"> GIGS </Link>
        <Link to="/merch"> MERCH </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/contact"> CONTACT </Link>
    </nav>
  );
};

export default Navigation;