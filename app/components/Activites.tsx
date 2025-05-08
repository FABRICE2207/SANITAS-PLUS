"use client"

import React from 'react'
import { 
  FaHouseMedical, 
  FaBriefcaseMedical, 
  FaBookMedical, 
  FaChildren 
} from "react-icons/fa6";
import { FaHome, FaCar } from "react-icons/fa";

const Activites = () => {
  return (
    <div>
      <div className="mb-10 mx-20" id="activites">
        <div data-aos="fade-up" data-aos-delay="700">
          <div className="flex justify-center">
            <h1 className="font-extrabold text-3xl mt-4 mb-4 text-[var(--primary-green)]">
              ACTIVITES
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="800">
            <div className='mt-5 lg:flex lg:flex-row'>
              <div className='w-full lg:h-[300px] border-r-1 border-b-1 border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white transition duration-600 ease-in-out'>
                <div className='flex flex-col justify-center items-center mt-4 font-extralight'>
                  <FaHouseMedical 
                    size={35}
                  />
                  <h3 className='font-medium text-2xl mt-5'>CONSULTATIONS À DOMICILE </h3>

                  <p className='text-center m-5'>Un médecin déployé par la structure viendra vers vous en fonction de l’endroit désiré pour vous consulter normalement comme si vous étiez dans un centre de soin.</p>
                </div>
              </div>
              <div className='w-full lg:h-[300px] border-r-1 border-b-1 border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white transition duration-600 ease-in-out'>
                <div className='flex flex-col justify-center items-center mt-4 font-extralight'>
                  <FaBriefcaseMedical
                    size={35}
                  />
                  <h3 className='font-medium text-2xl mt-5 text-center'>PRÉLÈVEMENTS À DOMICILE ET RÉALISATIONS DES EXAMENS</h3>
                  <p className='text-center m-5'>
                  Un technicien en biologie médicale viendra vers vous pour vous faire votre prélèvement et ensuite l’acheminera dans un laboratoire afin de réaliser les différents examens et vous les délivrer dans un délai connu.
                  </p>
                </div>
              </div>
              <div className='w-full lg:h-[300px] border-b-1 border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white transition duration-600 ease-in-out'>
                <div className='flex flex-col justify-center items-center mt-4 font-extralight'>
                  <FaBookMedical
                    size={35}
                  />
                  <h3 className='font-medium text-2xl mt-5 text-center'>HOSPITALISATIONS A DOMICILE</h3>
                  <p className='text-center m-5'>
                  Après avoir reçu le protocole du clinicien, l’infirmier suivi d’une aide-soignante se chargeront de vous administrer vos soins en tout quiétude. L’aide-soignante peut rester et être permanente pour les soins sous la direction bienveillante du clinicien et de l’infirmier. 
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:flex lg:flex-row'>
              <div className='w-full lg:h-[300px] border-r-1 border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white transition duration-600 ease-in-out'>
                <div className='flex flex-col justify-center items-center mt-4 font-extralight'>
                  <FaChildren 
                    size={35}
                  />
                  <h3 className='font-medium text-2xl mt-5 text-center'>GARDE D’ENFANT MALADE <br /> (À PARTIR DE 12 ANS)</h3>
                  <p className='text-center m-5'>
                  SANITAS PLUS grâce à ce programme vient assouplir les difficultés des parents relativement à la suivie de leurs enfants malades. Etant donné qu’ils ne pourront toujours pas être présent.
                  </p>
                </div>
              </div>
              <div className='w-full lg:h-[300px] border-r-1 border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white transition duration-600 ease-in-out'>
                <div className='flex flex-col justify-center items-center mt-4 font-extralight'>
                  <FaHome
                    size={35}
                  />
                  <h3 className='font-medium text-2xl mt-5 text-center'>MÉNAGE À DOMICILE</h3>
                  <p className='text-center m-5'>
                  Votre maison ou entreprise a besoin d’un coup de propreté ou de réaménagement, ce programme est la vôtre. Sans hésiter contactez-nous. Nous sommes prompts à aider.
                  </p>
                </div>
              </div>
              <div className='w-full lg:h-[300px] border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white transition duration-600 ease-in-out'>
                <div className='flex flex-col justify-center items-center mt-4 font-extralight'>
                  <FaCar
                    size={35}
                  />
                  <h3 className='font-medium text-2xl mt-5 text-center'>GÉRER VOS COURSES</h3>
                  <p className='text-center m-5'>
                  Vos courses seront prises en charge et gérer dans les plus brefs délais pour votre plus grand plaisir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Autres services */}
      <div className="mb-10 mx-20">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-center">
            <h1 className="font-extrabold text-3xl mt-4 mb-4 text-[var(--primary-green)]">
              AUTRES SERVICES
            </h1>
          </div>
        </div>

        <div className='lg:flex lg:flex-row lg:px-32 md:w-full flex-col justify-between items-center 
        py-5 gap-5'>

          {/* 1 */}
        <div className='bg-[var(--primary-green)] w-full rounded-xl'
        data-aos="fade-up" data-aos-delay="200">
          <div className='flex flex-col justify-center items-center py-10'>
            <p className='font-semibold text-2xl text-center text-white'>ERGOTHÉRAPEUTES ET KINESITHERAPEUTES</p>
            <p className='mt-5 text-white text-[18px] mx-5 text-center font-extralight'>Ils vous aident à retrouver votre mobilité ou à apprendre à vous déplacer en toute autonomie. </p>
          </div>
        </div>
          {/* 2 */}
          <div className='bg-[var(--primary-green)] w-full rounded-xl'
        data-aos="fade-up" data-aos-delay="400">
          <div className='flex flex-col justify-center items-center py-12'>
            <p className='font-semibold text-2xl text-center text-white'>COIFFEURS</p>
            <p className='mt-5 text-white text-[15px] mx-5 text-center'>On se sent toujours mieux quand on est bien coiffé dans de bonnes commodités et surtout dans l’environnement souhaité. </p>
          </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Activites