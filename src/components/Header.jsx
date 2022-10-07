import React from 'react';
import { Link } from 'react-router-dom';
import IndexPage from '../pages';
import About from '../pages/about';
import Contact from '../pages/contact';
import Gallery from '../pages/gallery';
import Gigs from '../pages/gigs';
import Merch from '../pages/merch';
import Music from '../pages/music';

export default function Header(){
  return (
    <div>
      <div className='headerUpper'/>
      <div className='headerMiddle'>
        <Link className='link' to="/"> HOME </Link>
        <Link className='link' to="/about"> ABOUT </Link>
        <Link className='link' to="/gallery"> GALLERY </Link>
        <Link className='link' to="/music"> MUSIC </Link>
        <Link className='link' to="/gigs"> GIGS </Link>
        <Link className='link' to="/merch"> MERCH </Link>
        <Link className='link' to="/contact"> CONTACT </Link>

        {/* <a className='link' href="/" path={IndexPage}>HOME</a>
        <a className='link' href="/about" path={About}>ABOUT</a>
        <a className='link' href="/gallery" path={Gallery}>GALLERY</a>
        <a className='link' href="/music" path={Music}>MUSIC</a>
        <a className='link' href="/gigs" path={Gigs}>GIGS</a>
        <a className='link' href="/merch" path={Merch}>MERCH</a>
        <a className='link' href="/contact" path={Contact}>CONTACT</a> */}
      </div>
      <div className='headerLower'/>
    </div>
    
  );
};