import React, { useEffect } from 'react'

import trainer1 from '../../public/images/trainer1.jpg'
import trainer2 from '../../public/images/trainer2.jpg'
import trainer3 from '../../public/images/trainer3.jpg'
import trainer4v from '../../public/images/trainer4v.jpg'
import trainer5 from '../../public/images/triningwoman.jpg'
import trainer6 from '../../public/images/trainer6.jpg'
import trainer7 from '../../public/images/trainer7.jpg'
import trainer8 from '../../public/images/rraning.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Team = () => {
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
  <section id='team' className='w-[80%] mx-auto py-20 h-fit flex flex-col justify-center items-center gap-8'>
<div>
<h1 className='text-5xl font-bold text-center mb-2'>Our Trainers Team </h1>
<p>Our team provides the best training.If you want to personal trainer,our gym provide the professional trainer. In our gym have all the professional trainer have the training license.</p>
<p className='mt-3 font-bold'>"All progress takes place, outside the confort zone."</p>
</div>

    <div id='gallery' className='grid md:grid-cols-4 grid-cols-2 justify-center items-center gap-6'>
      <img data-aos='slide-up' data-aos-delay='200' src={trainer1} alt="" className='h-60 w-60' />
      <img data-aos='slide-up' data-aos-delay='200' src={trainer2} alt="" className='h-60 w-60' />
      <img data-aos='slide-up' data-aos-delay='200' src={trainer3} alt="" className='h-60 w-60' />
      <img data-aos='slide-up' data-aos-delay='200' src={trainer4v} alt="" className='h-60 w-60' />
      <img data-aos='slide-up' data-aos-delay='200' src={trainer5} alt="" className='h-60 w-60' />
      <img data-aos='slide-up' data-aos-delay='200' src={trainer6} alt="" className='h-60 w-60' />
      <img data-aos='slide-up' data-aos-delay='200' src={trainer7} alt="" className='h-60 w-60' />
      <img data-aos='slide-up' data-aos-delay='200' src={trainer8} alt="" className='h-60 w-60' />
    </div>
   
  </section>
  )
}

export default Team
