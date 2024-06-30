import React, { useState } from 'react'
import logo from '../../public/images/logo fff.png'
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';
import Form from './Form';
import Button from './Button';

const Navbar = () => {
  const [menu,setMenu]=useState(false)
  const toggle=()=>{
    setMenu(!menu)
  }
  const navlists=[
    {
      id:1,
      text:'Home',
      path:'home'
    },
    {
      id:2,
      text:'About',
      path:'about'
    },
    {
      id:3,
      text:'Services',
      path:'services'
    },
    {
      id:4,
      text:'Team',
      path:'team'
    },
    {
      id:5,
      text:'Contact',
      path:'contact'
    },
    {
      id:6,
      text:'Pricing',
      path:'pricing'
    },
  ]
    return (
      <nav className='w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 overflow-hidden py-4 sticky top-0 z-50'>
        <img src={logo} className='h-14 w-14 rounded-full' alt="" />
  
        <ul className='md:flex justify-center items-center gap-2 hidden'>
          {navlists.map(({id,text,path})=>(
            <Link to={path} key={id} className='text-white uppercase font-semibold p-3 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer' spy={true} offset={-100} smooth={true}>{text}</Link>
          ))}
        </ul>     
        <Button />
        <div className='flex justify-center items-center md:hidden mt-3' onClick={toggle}>
          <div>
            {menu ? <MdClose className='text-white text-3xl cursor-pointer'/>:<IoMenu className='text-white text-3xl cursor-pointer' />}
          </div>
        </div>    
        {
          menu && (            
  <div className=''> 
                <ul className='flex flex-col justify-center items-center w-full h-fit bg-black p-4'>
               {navlists.map(({id,text,path})=>(
                <Link
                onClick={()=>(
                  setMenu(!menu)
                )}
                 to={path} key={id} className='text-white uppercase font-semibold p-3 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer' spy={true} offset={-100} smooth={true}>{text}</Link>               
    ))}
    {/* <button className='bg-red-600 mt-3 hover:bg-blue-900 text-white px-10 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex'>JOIN US</button> */}
  </ul>
  </div>
          )
        }     
      </nav>
  )
}
export default Navbar