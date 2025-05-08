"use client"

import Image from 'next/image'
import React from 'react'

const Presentation = () => {

  return (
      <div>
        <div className='bg-white mx-10 mt-[-30px] mb-10'>
          <div className='mx-15' data-aos="fade-up" data-aos-delay="500">
            <div className='flex justify-center'>
              <h1 className='font-extrabold text-center text-3xl mt-4 mb-4 text-[var(--primary-green)]'>
                PRESENTATION DE SANITAS PLUS
              </h1>
            </div>

            <div className='lg:flex lg:flex-row w-full gap-4'>
              <div>
                <Image 
                  src="/assets/image_presentation.jpg" 
                  alt="Description of the image" 
                  width={1600} 
                  height={1600} 
                />
              </div>
              <div className='text-2xl font-extralight'>
                <strong>SANITAS PLUS</strong> est une structure professionnelle et organisation sanitaire de proximités. Notre mission est d’être plus proche de la population et surtout notre objectif est de permettre à tout le monde de bénéficier de soin de qualité tout en restant à son domicile ou sur son lieu de travail.
              </div>

            </div>
          </div>    
        </div>

         {/* Contexte */}
         <div className='bg-gray-200 mt-20px'>
          <div className='mx-15' data-aos="fade-up" data-aos-delay="650">
            <div className='flex justify-center'>
              <h1 className='font-extrabold text-center text-3xl mt-4 mb-4 text-[var(--primary-green)]'>
                CONTEXTE ET JUSTIFICATION
              </h1>
            </div>
            <div className='text-2xl flex justify-start font-extralight mx-10 mb-5 pb-5'>
              La création de SANITAS PLUS s’est faite suite à un constat dans le milieu hospitalier. Au niveau de la prise en charge du patient, il lui faut au minimum 30 à 45 minutes avant d’être consulté par un médecin, s’en suit les examens médicaux (laboratoire, échographie, radiologie…) qui prendront à eux seuls des heures ou des jours avant de revenir vers le consultant qui va poser son diagnostic. Tout ceci favorise le stress et l’anxiété chez le patient déjà affaiblit par son mal. Ainsi pour palier à ses manquements et lenteurs, SANITAS PLUS, vient briser les barrières de la proximité avec les patients tout en allant vers eux et leur procurer des soins de qualités donnés par des professionnels de la santé sans bavures.
            </div>
          </div>
        </div>
      </div> 
  )
}

export default Presentation