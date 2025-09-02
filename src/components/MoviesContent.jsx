import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MovieDetails from './MovieDetails'


export default function MoviesContent() {
  return ( <>
  <HeroSection />
  <div className='bg-gradient-to-b from-neutral-900 to-neutral-950'>
    <MovieSlider />
    <GenreSection />
    
  </div>
  {/*Conditional Rendering*/}
   {/*  <MovieDetails /> */}


  </>
  )
}
