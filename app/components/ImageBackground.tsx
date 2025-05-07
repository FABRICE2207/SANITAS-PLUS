"use client"

import React, { useEffect } from 'react'
import bgimage from '../../public/assets/image_1.jpg'
import Aos from "aos"; // Importation de Aos
import "aos/dist/aos.css"; // Importation des styles d'Aos

const ImageBackground = () => {

     // Chargement de l'animation
     useEffect(() => {
      Aos.init({
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      });
    }, []);
  

  return (
     // Image arriere plan
     <div id='home' className='bg-[#090674] lg:h-[600px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px]
     px-[20px] flex justify-center items-center bg-custom'
     style={{ backgroundImage: `url(${bgimage})` }}>

      {/* Superposition noire
      <div className="absolute inset-0 bg-black opacity-50 mt-26 lg:h-[600px]"></div> */}
 
       {/* Texte au centre */}
       <div className='relative lg:h-[600px] flex flex-col justify-center items-center text-white'>
         <div data-aos="zoom-in-down" data-aos-delay="300" className='flex flex-col justify-center items-center'>
           <h1 className='text-[50px] font-extrabold text-center'>SANITAS PLUS, <br />
           VOTRE SANTÉ NOTRE PRIORITÉ</h1>

           <div className='bg-[var(--primary-green)] w-[100px] h-[10px]'></div>
         </div>
       </div>
     </div>
  )
}

export default ImageBackground