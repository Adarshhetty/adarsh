import React from 'react'
import Image from 'next/image'
import logo from '../assets/A.png'
const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div className='mt-2'>
        <Image  className='w-[10rem] h-[10rem]' src={logo} alt='Logo'/>
        </div>
        <div className='mt-14 mr-12'>
          <a href="Resume.pdf" download>
        <button className=" hover:scale-110 transition-all duration-200 ease-in-out bg-white shadow hover:shadow-md text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Resume</span>
</button></a>
        </div>
        
    </div>
  )
}

export default Navbar