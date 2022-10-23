import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='links'>
        <Link to="/"> HOME </Link>
        <Link to="/music"> MUSIC </Link>
        <Link to="/gigs"> GIGS </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/buy"> BUY </Link>
        <Link to="/bookings"> BOOKINGS </Link>
    </nav>
  );
};

export default Navigation;