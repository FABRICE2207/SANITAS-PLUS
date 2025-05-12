import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md'


const Footer = () => {

    // Le menu = les onglets
    const navItems = [
      {
        link: "ACCUEIL",
        path: "home",
      },
      {
        link: "OBJECTIFS",
        path: "objectifs",
      },
      {
        link: "SERVICES",
        path: "services",
      },
      {
        link: "ACTIVITES",
        path: "activites",
      },
      {
        link: "Contact",
        path: "contacts",
      },
    ];


  return (
    
    <div className='mt-10 border-t-2 border-[var(--primary-green)]'>
      <div className='mx-10 my-5'>
      <div className='flex lg:flex-row flex-col justify-between items-start gap-2'>
        <div className='lg:w-[800px]'>
          <Image 
            src="/assets/logo_sanitas_plus.jpg"
            alt=''
            width={100}
            height={50}
          />
          <div className='font-extralight text-xl'>
          SANITAS PLUS est une structure professionnelle et organisation sanitaire de proximités. Notre mission est d’être plus proche de la population et surtout notre objectif est de permettre à tout le monde de bénéficier de soin de qualité tout en restant à son domicile ou sur son lieu de travail.
          </div>
        </div>
        <div className='lg:w-[500px]'>
          <h3 className='font-bold'>
            Liens utiles
          </h3>
          {/* Menu */}
          <ul className="flex flex-col justify-start mt-4 items-start">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-black uppercase cursor-pointer p-1
                hover:text-[var(--primary-green)] text-[15px]"
                href={`#${path}`}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className='lg:w-[600px] lg:flex lg:flex-col justify-start items-start'>
          <h3 className='font-bold'>
            Contacts
          </h3>
          <div className='flex flex-col gap-4 mt-4 font-extralight'>
            <div className='flex flex-row gap-3'>
              <MdEmail size={30}/>
              Sanitasplus01@gmail.com
            </div>
            <div className='flex flex-row gap-3'>
              <MdPhone size={30}/>
              +225 05 96 37 34 76
            </div>
            <div className='flex flex-row gap-3'>
              <MdPlace size={30}/>
              Abidjan
            </div>
            
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-5'>
        <h4 className='text-center'>Copyright © 2025 devéloppé par <Link href="https://www.djilx.ci/" className='font-bold'>DJILX CI</Link></h4>
      </div>
    </div>
    </div>
  )
}

export default Footer