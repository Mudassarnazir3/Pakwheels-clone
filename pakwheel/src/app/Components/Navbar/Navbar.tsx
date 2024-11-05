import Image from "next/image";
import Link from "next/link";
//import {FaBars,FaTimes} from "react-icon/fa";
//{/* eslint-disable react/no-unescaped-entities */}


export default function Navbar () {
   return (
    <header>
      <Image src="/logo.png" alt="Logo" height={40} width={220} />
        <nav>
        <Link href="/">Home</Link>  
        <Link href="/UsedCars">Used Cars</Link>
        <Link href="/NewCar">New Cars</Link>
        <Link href="/Bikes">Bikes</Link>
        <Link href="/AutoStore">Auto Store</Link>
        <Link href="/Form">Book Now</Link>
        <button className="nav-btn nav-close-btn">
          
        
        </button>
      </nav>    
      <button className="nav-btn">
            
        
      </button>
    </header>
  );
}

