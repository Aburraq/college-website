import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Programs from './components/programs/Programs';
import Title from './components/title/Title';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import VideoPlayer from './components/video-player/VideoPlayer';

export default function App() {

  const [isPlay, setIsPlay] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle="Our Programs" title="What We Offer" />
      <Programs />
      <About setIsPlay={setIsPlay} />
      <Title subtitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subtitle="Testimonials" title="Words from Alumni" />
      <Testimonials />
      <Title subtitle="Contact us" title="Learn more" />
      <Contact />
      <Footer />
      <VideoPlayer videoId={"hbsdlSpA2GU"} isPlay={isPlay} setIsPlay={setIsPlay} />
    </div>
  )
}
