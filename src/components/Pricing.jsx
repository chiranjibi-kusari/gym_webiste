import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Pricing = () => {
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
    <div id='pricing' className='w-full py-20 overflow-hidden'>
        <h1 className='text-center text-4xl font-boldl'>Pricing plan for flex hub</h1>
    <div className=' m-10 grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-10'>
        <div data-aos='slide-up' data-aos-delay='200' className='w-80 p-5 rounded-lg bg-red-600 text-center items-center flex flex-col justify-center text-white'>
            <h1 className='text-3xl font-bold'>For one month</h1>
            <p className='mt-2 text-xl text-black mb-3'>Rs:3000/per month</p>
            <ul className='text-start'>
                <li><span>-</span>Unlimated access gym</li>
                <li><span>-</span>Personal trainer</li>
                <li><span>-</span>6 classes per week</li>
            </ul>
            <button className='mt-4 bg-blue-800 p-2 rounded-md hover:bg-black'>JOIN US</button>
        </div>
        <div data-aos='slide-up' data-aos-delay='200' className='w-80 p-5 rounded-lg bg-red-600 text-center items-center flex flex-col justify-center text-white'>
            <h1 className='text-3xl font-bold'>For Three month</h1>
            <p className='mt-2 text-xl text-black mb-3'>Rs:7500/3 month</p>
            <ul className='text-start'>
                <li><span>-</span>Unlimated access gym</li>
                <li><span>-</span>Personal trainer</li>
                <li><span>-</span>6 classes per week</li>
            </ul>
            <button className='mt-4 bg-blue-800 p-2 rounded-md hover:bg-black'>JOIN US</button>
        </div>
        <div data-aos='slide-up' data-aos-delay='200' className='w-80 p-5 rounded-lg bg-red-600 text-center items-center flex flex-col justify-center text-white'>
            <h1 className='text-3xl font-bold'>For one year</h1>
            <p className='mt-2 text-xl text-black mb-3'>Rs:26500/per year</p>
            <ul className='text-start'>
                <li><span>-</span>Unlimated access gym</li>
                <li><span>-</span>Personal trainer</li>
                <li><span>-</span>6 classes per week</li>
            </ul>
            <button className='mt-4 bg-blue-800 p-2 rounded-md hover:bg-black'>JOIN US</button>
        </div> 
    </div>
    </div>
  )
}

export default Pricing