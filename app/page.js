import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Body from './components/body';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Footer from './components/footer';

export default function page() {
  return (
    <div className='p-2 relative '>
      <Navbar />
      <HeroSection/>
      <Body />
      <Projects />
      {/* Uncomment if you have an AboutSection component */}
      {/* <AboutSection /> */}
      {/* Uncomment if you have a Competencies component */}
      {/* <Competencies /> */}
      <Testimonial />
      {/* Uncomment if you have an Education component */}
      {/* <Education /> */}
      {/* Uncomment if you have a Competencies component */}
      {/* <Competencies /> */}
      <Footer />

    </div>
  )
}
