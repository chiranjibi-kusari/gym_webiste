import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos"
import 'aos/dist/aos.css'
import img1 from '../../public/images/rraning.jpg'
import img2 from '../../public/images/equiment.jpg'

const Home = () => {
 useEffect(()=>{
  AOS.init({
  offset:200,
  duration:500,
  easing:"ease-in-sine"
  },[]);

 },)
  return (
    <section id='home' className=' w-full py-10 mx-auto h-fit flex md:flex-row flex-col justify-between items-center md:gap-40'>
      <div className='md:py-10 flex flex-col justify-center items-center md:gap-6 gap-4 p-10'>
        <h1 data-aos="zoom-in" className='text-2xl uppercase font-regular text-slate-700 text-center'> welcome to <br /> Flex Hub</h1>
        <h1 data-aos='zoom-in'  data-aos-delay='200' className='md:text-5xl text-4xl font-bold text-center text-blue-900'>FITNESS CENTER</h1>
        <p data-aos='zoom-in'  data-aos-delay='200' className='font-bold text-center'>"Be strong than your excuses"</p>
        
        <button data-aos="zoom-in data-aos-delay='400" className='px-8 py-4 bg-red-600 hover:bg-blue-900 text-white font-semibold cursor-pointer rounded-lg'>BOOK NOW</button>
        <p data-aos='zoom-in'  data-aos-delay='200' className='font-bold text-center'>"Stay motivated."</p>
      </div>
      <div className=' flex justify-end items-end'>
        <img data-aos='zoom-in' data-aos-delay='600' src={img2} alt='img1' className=' h-96 w-auto md:mr-20 bg-cover bg-center rounded-lg'/>
      </div>
    </section>
  )
}
export default Home
