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
import Growth from './components/Growth';
import TherapyModes from './components/TherapyModes';
import FeaturesGifSection from './components/FeaturesGifSection';
import VideoCarousel from './components/VideoCarousel';
import { VideoCarouselItem } from './types';

const ITEMS: VideoCarouselItem[] = [
  {
    title: 'Geostorm',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'The Last of Us',
    videoUrl: 'https://www.youtube.com/embed/9POTn1z8gQY',
  },
];

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
      <Growth/>
      <TherapyModes/>
      <Offering />
      <VideoCarousel items={ITEMS}/>
    
       <Footer/>
    </div>
  );
}

export default App;
