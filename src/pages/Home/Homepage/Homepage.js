import React from 'react';
import VliferNav from '../../shared/Navbar/VliferNav';
import Contact from '../Contact';

import Footer from '../Footer';
import Hero from '../Hero';
import RunningServices from '../RunningServices';



const Homepage = () => {
  return (
    <div >
      <VliferNav />
      <Hero />
      <RunningServices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;