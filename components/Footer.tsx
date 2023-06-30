import React from 'react'
import logo from '../assets/A.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>

        
<footer className=" rounded-lg shadow bg-gray-900 m-4">
    
<footer className="bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <div  className="flex items-center">
                  <Image src={logo} className="w-[10rem] h-[10rem] " alt="adarsh Logo" />
                  <span className="self-center mb-9 text-3xl font-semibold whitespace-nowrap text-white">Adarsh Shetty</span>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Follow Me</h2>
                  <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/Adarshhetty" className="hover:underline ">Github</a>
                      </li>
                      <li className='mb-4'>
                          <a href="https://www.linkedin.com/in/adarsh-shetty-42842920b" className="hover:underline">Linked In</a>
                      </li>
                      <li className='mb-4'>
                          <a href="https://instagram.com/_.adarsh.shetty._?igshid=ZGUzMzM3NWJiOQ==" className="hover:underline">Instagram</a>
                      </li>
                  </ul>
              </div>
              <div>

              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center text-center justify-center">
          <span className="text-sm  text-center text-gray-400">© 2023 . All Rights Reserved.
          </span>
       
      </div>
    </div>
</footer>

</footer>


    </div>
  )
}

export default Footer