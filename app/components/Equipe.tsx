"use client"

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Equipe = () => {

  // L'equipe
  const teamMembers = [
    {
      name: "Yao Koffi Kévin",
      role: "Biologiste",
      phone: "+225 07 77 49 77 50",
      image: "/assets/kevin.png",
    },
    {
      name: "Yao Koffi Kévin",
      role: "Biologiste",
      phone: "+225 07 77 49 77 50",
      image: "/assets/kevin.png",
    },
  ];

  return (
    <div>
      {/* Contexte */}
      <div className='bg-gray-200 mt-4'>
        <div className='mx-10' data-aos="fade-up" data-aos-delay="650">
          <div className='flex justify-center'>
            <h1 className='font-extrabold text-3xl mt-4 mb-4 text-[var(--primary-green)]'>
              NOTRE EQUIPE
            </h1>
          </div>
          <div className='text-xl w-full mb-5 pb-5'>
            {/* <div className='flex flex-col justify-center items-center'>
              <div className=''>
                <Image 
                  src="/assets/photo_test.png"
                  alt=''
                  width={150}
                  height={150}
                  className='rounded-full border-6 border-[var(--primary-green)]'
                />
              </div>
              <div className='flex flex-col justify-center items-center'>
                  <p>Koffi Kévin</p>
                  <p>Laboratin</p>
                  <p>+225 01 02 03 04 05</p>
                </div>
            </div> */}
              <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col w-full justify-center items-center font-extralight">
                    <div>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="rounded-full border-6 border-[var(--primary-green)]"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4 mb-8">
                      <p>{member.name}</p>
                      <p>{member.role}</p>
                      <p>{member.phone}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Equipe