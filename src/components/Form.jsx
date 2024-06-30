import React, { useRef } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({onClose}) => {
const Notify=()=>{
    toast("succcessful")
}

    const modalRef=useRef();
    const closemodal=(e)=>{
        if(modalRef.current===e.target){
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closemodal} className=' mt-6 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
    <div className='mt-1 flex flex-col gap-5'>
        <button onClick={onClose} className='place-self-center'><IoCloseSharp  className=' text-white' size={40}/></button>
        <div className='bg-indigo-600 rounded-xl px-20 py-4 flex flex-col gap-5 items-center mx-4'>
            <h1 className='text-white mb-1 text-3xl font-bold'>Fill the form for join </h1>

            <form action="https://getform.io/f/lakmmnda" method='POST'>
            <label htmlFor="" className='text-xl font-bold text-white'>Fullname:</label>
            <input type="text"
            name='fullname'
                placeholder='Enter your full Name' required 
                className='w-60 px-2 py-1 rounded-md text-black'
                />  <br /><br />
                <label htmlFor="" className='text-xl font-bold text-white'>Contact:</label>
            <input type="number"
            name='contact'
                placeholder='Enter your mobile number' required 
                className='w-60 px-2 py-1 rounded-md text-black'
                /> <br /> <br />
                <label htmlFor="" className='text-xl font-bold text-white'>Month Plan:</label>
                 <select name="month-plan"> 
                     <option value="one-five-years">Choose</option>
                       <option value="one-year">1 Month</option>
                       <option value="one-five-years">3 month</option>
                       <option value="one-five-years">1 year</option>
               </select><br /><br />
               <label htmlFor="" className='text-xl font-bold text-white'>Choose Services:</label>
                 <select name="choose services">
                       <option value="one-five-years">Choose</option>
                       <option value="one-year">Gym</option>
                       <option value="one-five-years">Boxing</option>
                       <option value="one-five-years">Cardio</option>
                       <option value="one-five-years">Yoga</option>
                       <option value="one-five-years">Zumba</option>
                       <option value="one-five-years">lifting</option>
               </select>
                <button type='submit' className='text-white bg-red-600 p-2 mt-4 w-full flex items-center justify-center rounded-lg hover:bg-black' onClick={Notify}>Submit</button>
                <ToastContainer />
            </form>

        </div>
    </div>
    </div>
  )
}

export default Form