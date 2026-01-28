import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import VRTherapy from './components/VRTherapy';
import TwoVideos from './components/TwoVideos';
import Testimonials from './components/Testimonials';
import Offering from './components/Offering';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <VRTherapy />
      <TwoVideos />
      <Testimonials />
      <Offering />
      <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
