import React from 'react'
import sneakx from '../assets/sneakx.png'
import car from '../assets/CarExpert.png'
import disney from '../assets/disney.png'
import gym from '../assets/gym.png'
import Image from 'next/image'
import Divider from './Divider'
const Projects = () => {
  return (
    <section id='projects' className=" min-h-screen py-3 mb-14 text-white">
         <Divider/>
         <div className="text-center mt-4">
        <h3 className="text-4xl font-bold hover:underline ">Projects</h3>
      </div>
      <div className=' relative  lg:left-0 md:left-14 '>
        
<div className='relative gap-14 lg:mb-8 lg:flex md:flex sm:items-center    grid-cols-2 justify-center mt-14'>
<div className="max-w-md mb-5 border border-gray-200 rounded-lg shadow bg-gray-800 dark:border-gray-700">
    
        <Image className="rounded-t-lg" src={car} alt="" />
    
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"> Car Expert Website </h5>
      
        <p className="mb-3  font-normal text-gray-400">This website provides you the details about the cars you are looking for. The details of the cars are fetched through API.</p>
        <a href="https://carexpert-ojl4.vercel.app/" className="inline-flex mr-8 items-center px-3 py-2 text-sm font-medium border border-gray-200 text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        <a href="https://github.com/Adarshhetty/carexpert" className="inline-flex items-center px-3 py-2 text-sm font-medium border border-gray-200 text-center text-white bg-gray-800 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
<div className="max-w-md mb-5 md:mr-14 lg:mr-0 border border-gray-200 rounded-lg shadow bg-gray-800 dark:border-gray-700">
    
        <Image className="rounded-t-lg" src={disney} alt="" />
    
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Movieflix Website</h5>
        
        <p className="mb-3 font-normal text-gray-400">The recent movies and the tv shows can be viewed through our website home page. The movie details are fetched with the help of TMDB api.</p>
        <a href="https://movieflix-pmco.vercel.app/" className="inline-flex mr-8 items-center px-3 py-2 text-sm font-medium border border-gray-200 text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        <a href="https://github.com/Adarshhetty/Movieflix" className="inline-flex items-center px-3 py-2 text-sm font-medium border border-gray-200 text-center text-white bg-gray-800 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
</div>


<div className='relative gap-14 lg:flex md:flex md:justify-between sm:flex-shrink   grid-cols-2 lg:justify-center '>
<div className="max-w-md mb-5 border border-gray-200 rounded-lg shadow bg-gray-800 dark:border-gray-700">
    
        <Image className="rounded-t-lg" src={sneakx} alt="" />
    
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">SneakX : Shoes E commerce Website</h5>
        
        <p className="mb-3 font-normal text-gray-400">This website provides you the collection of various sneakers and shoes of various brands. The data is fetched from MongoDB database. </p>
        <a href="https://github.com/Adarshhetty/sneakX" className="inline-flex items-center px-3 py-2 text-sm font-medium border border-gray-200 text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
<div className="max-w-md mb-5 md:mr-14 lg:mr-0 border border-gray-200 rounded-lg shadow bg-gray-800 dark:border-gray-700">
    
        <Image className="rounded-t-lg" src={gym} alt="" />
  
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Hammer : Gym Website</h5>
        
        <p className="mb-3 font-normal text-gray-400">This website helps you find your desired workout routine for different body parts. This website also helps you to keep track of your calorie maintenance.</p>
        <a href="https://github.com/Adarshhetty/gym" className="inline-flex items-center px-3 py-2 text-sm font-medium border border-gray-200 text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
</div>

      </div>
    </section>
  )
}

export default Projects