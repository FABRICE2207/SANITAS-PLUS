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
      <div className='mx-15 my-5'>
      <div className='flex flex-row justify-between items-start gap-2'>
        <div>
          <Image 
            src="/assets/logo_sanitas_plus.jpg"
            alt=''
            width={100}
            height={50}
          />
          <div className='w-[580px] font-extralight text-xl'>
          SANITAS PLUS est une structure professionnelle et organisation sanitaire de proximités. Notre mission est d’être plus proche de la population et surtout notre objectif est de permettre à tout le monde de bénéficier de soin de qualité tout en restant à son domicile ou sur son lieu de travail.
          </div>
        </div>
        <div className='w-[500px]'>
          <h3 className='font-bold'>
            Liens utiles
          </h3>
          {/* Menu */}
          <ul className="lg:flex lg:flex-col justify-start items-start">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-black uppercase font-semibold cursor-pointer p-1
                hover:text-[var(--primary-green)] text-[15px]"
                href={`#${path}`}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className=' w-[600px] lg:flex lg:flex-col justify-start items-start'>
          <h3 className='font-bold'>
            Contacts
          </h3>
          <div className='flex flex-col gap-4 font-extralight'>
            <div className='flex flex-row gap-3'>
              <MdEmail size={30}/>
              sanitasplus@gmail.com
            </div>
            <div className='flex flex-row gap-3'>
              <MdPhone size={30}/>
              0777497750
            </div>
            <div className='flex flex-row gap-3'>
              <MdPlace size={30}/>
              Abidjan, Yopougon - Andokoi
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer