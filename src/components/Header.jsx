import React from 'react';
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
        <a className='link' href="/" path={IndexPage}>HOME</a>
        <a className='link' href="/about" path={About}>ABOUT</a>
        <a className='link' href="/gallery" path={Gallery}>GALLERY</a>
        <a className='link' href="/music" path={Music}>MUSIC</a>
        <a className='link' href="/gigs" path={Gigs}>GIGS</a>
        <a className='link' href="/merch" path={Merch}>MERCH</a>
        <a className='link' href="/contact" path={Contact}>CONTACT</a>
      </div>
      <div className='headerLower'/>
    </div>
    
  );
};