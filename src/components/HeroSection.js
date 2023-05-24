import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Messaoudi.mp4' autoPlay loop muted />
      <h1>CIAO, SONO BILEL</h1>
      <div className="hero-btns">
        <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'> SCOPRI DI PIÙ </Button>
      </div>
    </div>
  )
}

export default HeroSection
