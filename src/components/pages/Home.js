import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import MyStory from '../MyStory';

function Home() {
  return (
    <>
      <HeroSection />
      <MyStory/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
