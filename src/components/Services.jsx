import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import boxing from '../../public/images/boxing2.jpg'
import gym from '../../public/images/pos1.jpg'
import yoga from '../../public/images/yoga.jpg'
import cardio from '../../public/images/abs2.jpg'
import weightlifting from '../../public/images/liftgirl1.jpg'
import zumba from '../../public/images/jumba.jpg'

const Services = () => {

  useEffect(()=>{
    AOS.init({
      offset:200,
  duration:500,
  easing:"ease-in-sine"
    },[])
  })
  return (
    <>
    <section id='services' className='w-full py-20 overflow-hidden'>
      <h1 data-aos='zoom-in' data-aos-delay='200' className='md:text-6xl text-5xl font-semibold text-center pb-20'>OUR SERVICES</h1>
      <div className=' grid md:grid-cols-2 grid-cols-1 justify-between items-start w-full mx-auto  gap-20 md:p-10 p-10  text-center'>
        <div data-aos='zoom-in' data-aos-delay='300' className='bg-red-600 p-3 text-center items-center justify-center flex flex-col rounded-lg'>
      <img src={gym} alt="" className='h-48 w-48 rounded-full' />
      <h1 className='text-4xl text-white font-bold mt-2'>GYM</h1>
      <p className='text-white mt-3'>
       In the gym program, we can provide the best exercise for the body building.
      </p>
      <button className='mt-3 bg-black text-white p-2 rounded-md hover:bg-blue-700'>JOIN US</button>
        </div>
        <div data-aos='zoom-in' data-aos-delay='300' className='bg-red-600 p-3 text-center items-center justify-center flex flex-col rounded-lg'>
        <img src={boxing} alt="" className='h-48 w-48 rounded-full'/>
        <h1 className='text-4xl text-white font-bold mt-2'>BOXING</h1>
      <p className='text-white mt-3'>
        In the boxing program, we can provide the best training for the boxing.
      </p>
      <button className='mt-3 bg-black text-white p-2 rounded-md hover:bg-blue-700'>JOIN US</button>
        </div>
        <div data-aos='zoom-in' data-aos-delay='300' className='bg-red-600 p-3 text-center items-center justify-center flex flex-col rounded-lg'>
        <img src={yoga} alt="" className='h-48 w-48 rounded-full' />
        <h1 className='text-4xl text-white font-bold mt-2'>YOGA</h1>
      <p className='text-white mt-3'>
        This yoga program is designed for those who exercise only for their body fitness not body building.
      </p>
      <button className='mt-3 bg-black text-white p-2 rounded-md hover:bg-blue-700'>JOIN US</button>
        </div>
        <div data-aos='zoom-in' data-aos-delay='300' className='bg-red-600 p-3 text-center items-center justify-center flex flex-col rounded-lg'>
        <img src={cardio} alt="" className='h-48 w-48 rounded-full'/>
        <h1 className='text-4xl text-white font-bold mt-2'>CARDIO</h1>
      <p className='text-white mt-3'>
        In this cardio training, you are trained to do sequential moves in range of 30 minutes to 1 hours.
      </p>
      <button className='mt-3 bg-black text-white p-2 rounded-md hover:bg-blue-700'>JOIN US</button>
        </div>

        <div data-aos='zoom-in' data-aos-delay='300' className='bg-red-600 p-3 text-center items-center justify-center flex flex-col rounded-lg'>
        <img src={weightlifting} alt="" className='h-48 w-48 rounded-full'/>
        <h1 className='text-4xl text-white font-bold mt-2'>WEIGHT LIFTING</h1>
      <p className='text-white mt-3'>
        In the weight lifting program, you are trained to improve your strength through the many exercises.
      </p>
      <button className='mt-3 bg-black text-white p-2 rounded-md hover:bg-blue-700'>JOIN US</button>
        </div>

        <div data-aos='zoom-in' data-aos-delay='300' className='bg-red-600 p-3 text-center items-center justify-center flex flex-col rounded-lg'>
        <img src={zumba} alt="" className='h-48 w-48 rounded-full'/>
        <h1 className='text-4xl text-white font-bold mt-2'>ZUMBA</h1>
      <p className='text-white mt-3'>
        In the zumba program is suitable for you who wants to get rid of your fat and lose their weight.
      </p>
      <button className='mt-3 bg-black text-white p-2 rounded-md hover:bg-blue-700'>JOIN US</button>
        </div>
      </div>

    </section>
    </>
  )
}

export default Services
