"use client"
import React, {useEffect} from 'react'
import ImageBackground from "./components/ImageBackground"
import Objectifs from "./components/Objectifs";
import Presentation from "./components/Presentation";
import Aos from "aos"; // Importation de Aos
import "aos/dist/aos.css"; // Importation des styles d'Aos
import Activites from './components/Activites';
import Equipe from './components/Equipe';
import Contacts from './components/Contacts';

export default function Home() {

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
    <div>
      {/* Image arrire-plan */}
      <ImageBackground />

      {/* Présentation */}
      <Presentation />

      {/* Objectifs */}
      <Objectifs />

      {/* Activités */}
      <Activites />

      {/* Notre équipe */}
      <Equipe />

      {/* Contacts */}
      <Contacts />
    </div>
  );
}
