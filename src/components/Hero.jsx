import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
        <div  className=' mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] sm:font-bold md:text-xl'>Embark on an Extraordinary Adventure: Discover the World with us!</p>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold '>We've got your travel plans.</h1>
            <div className='flex justify-center p-5'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold'>Unleash Your Wanderlust with </p>
                <Typed className='md:text-3xl sm:text-2xl text-xl font-bold pl-2' strings={['Explore', 'Discover', 'stays']} typeSpeed={120} backSpeed={140}  loop/>
            </div>
            <p className='md:text-xl  font-bold text-gray-500'> Connecting Adventurers for Unforgettable Experiential Stays and Epic Destination Tours!</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black mx-auto'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero