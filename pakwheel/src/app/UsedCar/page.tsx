import Navbar from "../Components/Navbar/Navbar"
import Link from "next/link";
import React from 'react';
import './UsedCar.css';
import Footer from "../Components/footer/Footer"
import Image from "next/image";

const UsedCar = () => {
  return (
    <div>
     <Navbar/>
        
    <div className="used-car">
      <h1>Toyota Corolla 2021 Price in Pakistan, Images, Reviews & Specs</h1>
      <Image src="/corolla.jpeg" alt="Toyota Corolla 2021" height= {40} width={40}/> 
      <p>
      Toyota Corolla 2021 offers a blend of reliability, fuel efficiency, and comfortable driving experience.
      It's known for its spacious interior, advanced safety features, and smooth handling, making it a popular choice for daily commuting and family outings. </p>
      <div className="price">
        <p>PKR 4,000,000</p>
        <div className="button-row">
      <button>Make Payment</button>
      <button>Requst Bank Finance</button>
      <button>Visit Place</button>
      <button>Car Ispection</button>
    </div>
               
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default UsedCar;
    
    
