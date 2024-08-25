import React from 'react'
import './Hero.css/'
import pic from '../../assets/DP.jpg'
const Hero = () => {
  return (
    <div className='Hero'>
        <img className='hero-pic' src={pic} alt="" />
        <h1><span>I'm Vishnu PP</span> web developer from INDIA</h1>
        <p>I'm a full stack developer, MERN</p>
        <div className='Hero-action'>
            <div className='Hero-connect'>
                Connect with me
            </div>
            <div className='Hero-resume'>
                My resume
            </div>

        </div>
    </div>


  )
}

export default Hero