import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Footer from './components/footer';

export default function page() {
  return (
    <div className='p-2 '>
      <Navbar />
      <Body />
      <Footer />

    </div>
  )
}
