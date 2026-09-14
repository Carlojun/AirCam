import React from 'react';
import Navbar from '../components/navbar.jsx'; 
import Hero1 from '../components/homepage.jsx'; 

const HomePage = () => {
  return (
    <div className="max-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-60">
        <Navbar />
      </header>

      <main className="flex-grow">
        <Hero1 />
      </main>
    </div>
  );
};

export default HomePage;
