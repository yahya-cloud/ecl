// src/components/HomePage.jsx
import React from 'react';

const Home = () => {
  return (
    <div className='home'>
      <HomeNavbar />
      <h1>Grant Thornton Bharat LLP</h1>
      <p>ECL Tool</p>
    </div>
  );
};

const HomeNavbar = () => {
  return <div className='home_navbar'>
    <div>Nav content </div>
  </div>
}

export default Home;
