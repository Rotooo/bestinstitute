import React from 'react';
import Navbar from '../components/Navbar';
import HomeBanner from '../containers/HomePage/Carousel';
import Hola from '../components/Hola';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <Hola />
    </div>
  )
}
