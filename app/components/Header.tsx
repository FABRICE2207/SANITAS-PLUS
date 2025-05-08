"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaTimes, FaBars, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Clique sur la barre du menue pour ouvrier
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      link: "ACTIVITES",
      path: "activites",
    },
    {
      link: "Contact",
      path: "contacts",
    },
  ];

  return (
    <div>
      {/* Pré-header */}
      <div 
         className={`flex justify-center font-extralight text-[18px] p-2 gap-5 border-t-4 border-t-[var(--primary-green)] border-b-1 border-b-gray-300 transition-transform duration-300 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
          <div className="flex gap-1">
            <MdEmail className="m-auto" />
            sanitasplus@gmail.com
          </div>
          <div className="flex gap-1">
            <FaPhoneAlt className="m-auto" />
            07 77 49 77 50
          </div>
      </div>

      {/* Header */}
      <nav
        className={`w-full bg-white gap-1 lg:px-16 px-6 py-4 ${
          isScrolled ? "fixed" : "sticky"
        } top-0 z-50 shadow-md`}
      >
        {/* NOM ENTREPRISE */}
        {/* <h1 className='text-[var(--primary-green)] font-bold  font-rubik'> SANITAS PLUS
      </h1> */}
        <div className="flex flex-row justify-between items-center">
          <Image
            src="/assets/logo_sanitas_plus.jpg"
            alt="Logo stanitas plus"
            width={100}
            height={50}
          />
          {/* Menu */}
          <ul className="lg:flex justify-center items-center gap-6 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-black uppercase font-semibold cursor-pointer p-1
               hover:border-[var(--primary-green)] hover:border-b-4 hover:text-[var(--primary-green)] text-[15px]"
                href={`#${path}`}
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* debut du menu ici */}
          <div
            className="flex justify-betwenn items-center lg:hidden mt-3"
            onClick={toggleMenu}
          >
            <div>
              {
                // Si le menu est ouvert, affiche Icon FaXmark sinon FarBars
                isMenuOpen ? (
                  <FaTimes className="text-black text-3xl cursor-pointer" />
                ) : (
                  <FaBars className="text-black text-3xl cursor-pointer" />
                )
              }
            </div>
          </div>

          {/* affiche du menu format telephone */}
          <div
            className={`${isMenuOpen && isScrolled === window.scrollY > 50 ? "flex" : "hidden"}  w-full h-fit bg-white
      p-4 absolute top-[70px] left-0`}
            onClick={closeMenu}
          >
            
            <div
          className="fixed top-25 right-0 w-screen h-screen bg-[#0e0d0d88] bg-opacity-30"
        >
          <div className="bg-white pb-2">
            <ul className="flex flex-col justify-center items-center gap-2 w-full">
                {navItems.map(({ link, path }) => (
                  <Link
                    key={path}
                    className="text-black uppercase font-semibold cursor-pointer p-2
                rounded-lg  hover:text-[#090674] w-full text-center"
                    href={`#${path}`}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
          </div>
        </div>
        
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
