import React from 'react';
import Header from './Header';
import Banner from './Banner';
import WhatWeBuy from './WhatWeBuy';
import HowDoesThisWork from './HowDoesThisWork';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <WhatWeBuy />
        <HowDoesThisWork />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
