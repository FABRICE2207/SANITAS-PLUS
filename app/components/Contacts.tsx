"use client"

import React from 'react'
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md'

const Contacts = () => {
  return (
    <div id='contacts' className='mx-15 mt-10'>
      <div className='flex flex-row justify-between items-center gap-5'>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[70px] rounded-full'>
            <MdPlace size={40} color='white' className='m-auto mt-3' />
          </div>
          <p className='mt-2 font-semibold text-[18px]'>LOCALISATION</p>
          <p className='mt-1 text-[18px]'>Abidjan, Yopougon - Andokoi</p>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[70px] rounded-full'>
            <MdPhone size={40} color='white' className='m-auto mt-3' />
          </div>
          <p className='uppercase mt-2 font-semibold text-[18px]'>téléphone</p>
          <p className='mt-1 text-[18px]'> (+225) 07 77 49 77 50 </p>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[70px] rounded-full'>
            <MdPlace size={40} color='white' className='m-auto mt-3' />
          </div>
          <p className='mt-2 font-semibold text-[18px]'>EMAIL</p>
          <p className='mt-2 text-[18px]'>sanitasplus@gmail.com</p>
        </div>
      </div>

      <div>
       <div className='mt-10'>
         <div className='w-full flex flex-col justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[5px]'></div>
          <h2 className='text-2xl font-semibold'>FORMULAIRE DE CONTACT</h2>
          <div className='bg-[var(--primary-green)] w-[70px] h-[5px]'></div>
         </div>

         {/* Formulaire */}
         <div className='mt-8'>
          <form action="">
            <div className='mx-92 flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Nom</label>
              <input 
                type="text" 
                name='nom'
                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
              />
            </div> 
            <div className='mx-92 mt-4 flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Email</label>
              <input 
                type="email" 
                name='email'
                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
              />
            </div> 
            <div className='mx-92 mt-4 flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Objet</label>
              <input 
                type="text"
                name="objet" 
                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
              />
            </div> 
            <div className='mx-92 mt-4 flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Message</label>
              <textarea 
                name="message"
                id="message"
                cols={30}
                rows={5}
                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
                />
            </div> 
          </form>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Contacts