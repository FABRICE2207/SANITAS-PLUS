"use client"

import React from 'react'
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md'

const Contacts = () => {
  return (
    <div id='contacts' className='mx-10 mt-10'>
      <div className='lg:flex lg:flex-row justify-between items-center lg:gap-5'>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[70px] rounded-full'>
            <MdPlace size={40} color='white' className='m-auto mt-3' />
          </div>
          <p className='mt-2 font-semibold text-[18px]'>LOCALISATION</p>
          <p className='mt-1 text-[18px]'>Abidjan</p>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[70px] rounded-full'>
            <MdPhone size={40} color='white' className='m-auto mt-3' />
          </div>
          <p className='uppercase mt-2 font-semibold text-[18px]'>téléphone</p>
          <p className='mt-1 text-[18px]'> (+225) 05 96 37 34 76 </p>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[70px] rounded-full'>
            <MdEmail size={40} color='white' className='m-auto mt-3' />
          </div>
          <p className='mt-2 font-semibold text-[18px]'>EMAIL</p>
          <p className='mt-2 text-[18px]'>sanitasplus@gmail.com</p>
        </div>
      </div>

      <div>
       <div className='mt-10'>
         <div className='w-full flex flex-col justify-center items-center'>
          <div className='bg-[var(--primary-green)] w-[70px] h-[5px]'></div>
          <h2 className='text-2xl font-semibold text-center'>FORMULAIRE DE CONTACT</h2>
          <div className='bg-[var(--primary-green)] w-[70px] h-[5px]'></div>
         </div>

         {/* Formulaire */}
         <div className='mt-8 w-full'>
          <div className='lg:mx-[400px]'>
          <form action="">
            <div className='flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Nom</label>
              <input 
                type="text" 
                name='nom'
                required
                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
              />
            </div> 
            <div className=' mt-4 flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Email</label>
              <input 
                type="email" 
                name='email'
                required
                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
              />
            </div> 
            <div className=' mt-4 flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Objet</label>
              <input 
                type="text"
                name="objet"
                required 
                className="p-2 border border-gray-300 focus:outline-none focus:border-1 focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
              />
            </div> 
            <div className=' mt-4 flex flex-col font-extralight text-[20px]'>
              <label htmlFor="" className='font-medium'>Message</label>
              <textarea 
                name="message"
                id="message"
                cols={30}
                rows={5}
                required
                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-[var(--primary-green)]" 
                />
            </div>

            <div className='mt-4 mb-4'>
              <input type='submit' className='bg-[var(--primary-green)] w-full py-2 text-white
              hover:bg-white hover:border hover:border-[var(--primary-green)]
              hover:text-[var(--primary-green)] duration-500 eat-in-out
              ' value="ENVOYER" />
            </div>
          </form>
          </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Contacts