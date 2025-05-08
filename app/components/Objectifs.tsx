"use client";

import React from "react";
import Image from "next/image";

const Objectifs = () => {
  return (
    <div id="objectifs w-full">
      <div className="mb-10 mx-10">
      <div data-aos="fade-up" data-aos-delay="680">
        <div className="flex justify-center">
          <h1 className="text-center font-extrabold text-3xl mt-4 mb-4 text-[var(--primary-green)]">
            OBJECTIFS
          </h1>
        </div>

        <div className="lg:flex lg:flex-row w-full gap-5">
          <div className="text-2xl font-extralight">
           Nos objectifs sont : <br />
           <strong>-  Accorder des soins de qualités et pour tous.</strong> <br />
           <strong>-  Renouer des liens avec les patients avec la proximité.</strong> 

          </div>
          <div>
            <Image
              src="/assets/image_2.jpg"
              alt="Description of the image"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mb-10">
      <div>
        <div id='home' className='bg-[#090674] lg:h-[300px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px]
          px-[20px] flex justify-center lg:items-center bg-image-3'>
            <div data-aos="fade-up" data-aos-delay="650">
              <h1 className="font-extrabold text-4xl mt-4 mb-4 text-center text-white">L’ÉLIGIBILITÉ POUR LES SERVICES</h1>
              <p className="text-2xl mt-4 mb-4 text-center font-extralight text-white">
                Nous manifestons vos besoins
              </p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Objectifs;
