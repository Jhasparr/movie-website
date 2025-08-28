import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'


export default function MoviesContent() {
  return <>
  <HeroSection />
  <div className='bg-gardient-to-b from-neutral-900 to-neutral-950'>
    <MovieSlider />

  </div>

  </>
}
