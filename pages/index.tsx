import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Projects from '@/components/Projects'

import Footer from '@/components/Footer'
import Form from './form'



export default function Home() {
  return (
    <main className=''>
      <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
     <Navbar/>
     <Hero/>
     <About/>
     <Education/>
     <Projects/>
     <Form/>
     <Footer/>
    </main>
  )
}
