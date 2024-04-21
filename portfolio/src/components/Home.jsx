import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className= ' w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            {/* Title */}
            <h1 className='text-4xl text-gray-300'>Hello, I'm <span className='text-[#6fc2b0]'>Dale Lambert</span></h1>
            <p className='text-xl text-gray-300'>I'm a junior software developer</p>
            <p className='text-xl text-gray-300'>I am a junior Software developer looking to make my mark in the tech industry. I am currently improving my skills daily to specialize in Full Stack development.</p>
            <button className='flex items-center mt-4 text-gray-300 hover:text-[#6fc2b0]'>
                View my work
                <HiArrowNarrowRight />
            </button>
            </div>
    </div>
  )
}

export default Home