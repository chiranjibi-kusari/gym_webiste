import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaCheck } from "react-icons/fa";
import aboutimg from '../../public/images/back1.jpg'
import aboutimg2 from '../../public/images/abs1.jpg'
import banner from '../../public/images/weightlifting.jpg'
import banner2 from '../../public/images/rope2.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import banner3 from '../../public/images/banner1.jpg'


const About = () => {
  
  useEffect(()=>{
    Aos.init(
      {
        offset:200,
        duration:500,
        easing:"ease-in-sine"
      })
  },[]);
  return (
     <>
     <section id='about' className='w-[75%] mx-auto md:py-20 py-10 flex md:flex-row flex-col justify-between items-start gap-20'>
      <div className='md:w-[50%] w-full flex flex-col justify-center items-start gap-6'>
        <h1 data-aos='zoom-in' data-aos-delay='' className='text-red-600 md:text-7xl text-6xl font-semibold'>JOIN TODAY</h1>
        <p data-aos='zoom-in' data-aos-delay='200' className=' pt-4 text-lg text-slate-600 text-justify'>We an give lots of services to our customers. In the flex hub fitness center have several facilities to use our team. We are excited to welcome you. If you want to join with us you can contact us or click the join us button. </p>
        <button data-aos="zoom-in data-aos-delay='400" className=' px-6 py-3 bg-blue-900 hover:bg-red-500 text-white font-semibold cursor-pointer rounded-lg'>BOOK NOW</button>
      <div data-aos='zoom-in' data-aos-delay='800' id='list-infos' className='flex md:flex-row flex-col justify-center md:items-center items-start gap-6 md:pr-10'>
        <div>
          <ul className='flex flex-col justify-center items-start'>
            <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className='text-slate-600'>Access to locer rooms</span></li>
            <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className='text-slate-600'>Access to shawor</span></li>
            <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className='text-slate-600'>Access to cafe</span></li>
          
        
          </ul>
        </div>
        <div>
          <ul className='flex flex-col justify-center items-start'>
            <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className='text-slate-600'>Access to changing room</span></li>
            <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className='text-slate-600 mt-1'>Access to the photo shot area</span></li>
            <li className='flex justify-center items-center gap-2'><span><FaCheck /></span><span className='text-slate-600'>Access to drink water</span></li>
           
           
          </ul>
        </div>
     </div>
   </div>

   <div className='md:w-[50%] w-full h-fit relative'>
    <img data-aos='zoom-in' data-aos-delay='200' src={aboutimg} alt="about img" className='' />
    <img data-aos='zoom-in' data-aos-delay='200' src={aboutimg2} alt="about img" className='mt-4' />
    {/* <div data-aos='slide-up' data-aos-delay='400' className='bg-red-500 md:w-[98%] w-full text-white flex flex-col justify-center items-start gap-4 md:p-8 p-6 absolute md:-left[100px] md:right-[-100px] md:bottom-[-180px] mt-87 z-10' >
      <FaQuoteLeft className='md:size-14 size-10' />
      <p className='md:text-3xl text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nemo.</p>
    </div> */}
   </div>

     </section>
     <section data-aos='zoom-in' data-aos-delay='200' id='banner' className='md:w-[100%] w-full  md:h-[600px] h-[400px] flex justify-end items-end p-10 mt-10 bg-cover ' style={{backgroundImage:`url(${banner3})`}}>
      <h1 data-aos='slide-up' data-aos-delay='400' className='md:text-[75px] text-[50px] text-white font bold'>"No pain, no gain"</h1>

     </section>
     <section data-aos='zoom-in' data-aos-delay='200' id='banner' className='md:w-[100%] w-full  md:h-[500px] h-[400px] flex justify-end items-end p-10 mt-20 bg-cover ' style={{backgroundImage:`url(${banner2})`}}>
      <h1 data-aos='slide-up' data-aos-delay='400' className='md:text-[75px] text-[50px] text-purple-500 font bold'>"Never give up."</h1>

     </section>

     </>
  )
}

export default About
