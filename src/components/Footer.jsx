import React from 'react'
import { Link } from 'react-scroll';
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
<>
<section className='bg-black w-full text-white p-3 flex justify-center items-center gap-4'>
  <FaRegCopyright className='size-6 text-white'/>
  <h1 className='text-white text-center font-semibold'>Copyright 2024,FLEX HUB, All Rights Reserved</h1>
</section>

<div id='icon-box' className='bg-blue-600 text-black rounded-full p-4 hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
  <Link to='home' spy={true} offset={-100} smooth={true}>
  <FaArrowUp className='w-[35px] h-[35px]' />
  </Link>
  
  </div>
</>
  )
}

export default Footer
