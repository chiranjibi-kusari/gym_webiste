import React, { useEffect } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(()=>{
    Aos.init(
      {
        offset:200,
        duration:500,
        easing:"ease-in-sine"
      }
    )
  })
  return (
   <>
   <section id='contact' className='w-full bg-red-500 py-20 z-10'>
    <h1 className='text-white md:text-6xl text-4xl text-center font-semibold'>Contact US</h1>
    <div className='grid md:grid-cols-3 grid-cols-1 text-center gap-10 mt-20 p-16'>

      <div data-aos='slide-up' data-aos-delay='200' className='bg-white  flex flex-col items-center rounded-lg'>
        <CiLocationOn className='text-6xl rounded-full' />
        <h1 className='text-4xl font-bold mt-3'>Address</h1>
        <p className='mt-3 mb-4'>7,Tokha,Kathmandu,Nepal</p>
      </div>

      <div data-aos='slide-up' data-aos-delay='200' className='bg-white  flex flex-col items-center rounded-lg'>
        <AiTwotoneMail className='text-6xl rounded-full' />
        <h1 className='text-4xl font-bold mt-3'>Mail Us</h1>
        <p className='mt-3 mb-4'>flexhubfitness1@gmail.com</p>
      </div>

      <div data-aos='slide-up' data-aos-delay='200' className='bg-white  flex flex-col items-center rounded-lg'>
        <IoCall className='text-6xl rounded-full' />
        <h1 className='text-4xl font-bold mt-3'>CALL NOW</h1>
        <p className='mt-3 mb-2'>+00815787887</p>
        <p className=' mb-4'>+00815787887</p>
      </div>
    </div>
    <div data-aos='slide-up' data-aos-delay='200' className='text-center justify-center items-center flex flex-col mb-4'>
      <h1 className='text-4xl font-bold text-white'>Avabile on</h1>
      <div className='flex gap-5 mt-5'>
      <FaFacebookSquare className='text-3xl text-white text-center items-center hover:text-4xl' />
      <BsInstagram className='text-3xl text-white text-center items-center hover:text-4xl' />
      <FaWhatsappSquare className='text-3xl text-white text-center items-center hover:text-4xl' />
      <FaViber className='text-3xl text-white text-center items-center hover:text-4xl' />
      </div>

    </div>
    </section>
    </>
  )
}

export default Contact
