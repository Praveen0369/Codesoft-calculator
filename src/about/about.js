import React from 'react'
import abt from '../assests/assests/about.png'

const About = () => {
  return (
    <section id='about'>
      <div className='space-x-4'>
        <h1 className='text-white'><center>ABOUT</center></h1>
      <div className='flex '>
      <img src={abt} alt='none' className='rounded-full'></img>
      <p className='text-white'> 
      </p>
      </div>
 
      </div>
      </section>

  )
}

export default About
