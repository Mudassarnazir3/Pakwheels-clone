import React from 'react';
import Link from 'next/link';
import Navbar from "./Components/Navbar/Navbar"
import HeroSection from './Components/HeroSection/Hero'
import FeaturedCars from './Components/Featuring/Featuring'
import Footer from './Components/footer/Footer'


function App() {
  return (

    <main>
      <title>PakWheels.com</title>
      

    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCars/>
    
      
      
      <Footer/>
    
      
      



    </div>
    

    </main>
      
    
  )
  
  
}

export default App;