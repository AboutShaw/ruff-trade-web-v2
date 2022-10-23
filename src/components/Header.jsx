import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <div>
      <div className='headerUpper'/>
      <div className='headerMiddle'>
        <Link className='link' to="/"> HOME </Link>
        <Link className='link' to="/buy"> BUY </Link>
        <Link className='link' to="/about"> ABOUT </Link>
        <Link className='link' to="/music"> MUSIC </Link>
        <Link className='link' to="/gallery"> GALLERY </Link>
        <Link className='link' to="/bookings"> BOOKINGS </Link>
      </div>
      <div className='headerLower'/>
    </div>
    
  );
};