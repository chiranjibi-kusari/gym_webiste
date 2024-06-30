import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Pricing from './components/Pricing'
import {Toaster} from "react-hot-toast"


function App() {
  

  return (
   <>
   <div>
   <Navbar />
   <Home />
   <About />
   <Services />
   <Team />
   <Contact />
   <Pricing />
   <Footer />
   </div>
   <Toaster />
   </>
  )
}

export default App
