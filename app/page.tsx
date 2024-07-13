"use client";

import React from 'react';
import OWButton from "@/components/buttons/OWButton";
import { MainTitle } from "@/components/title";

const Home: React.FC = () => {
  const handleClick = (section: string) => {
    console.log('hey'), section;
  };

  return (
    <>
      <header className='align-top p-3 flex justify-between'>
        <MainTitle />
        <a href='mailto:sales.otterwave@gmail.com' className='transition duration-300 hover:underline pr-2'>Contactez-nous</a>
      </header>
      <div className="flex flex-col items-center justify-start gap-8 max-w-3xl text-center m-auto">
        <h1 className='text-6xl'>Votre guide pour l'automatisation du marketing</h1>
        <p className='max-w-lg m-auto'>Optimisez vos campagnes avec notre logiciel de marketing automation. Augmentez vos leads, améliorez la qualification et dynamisez vos campagnes emailing grâce à nos experts. Gagnez du temps et simplifiez votre utilisation.</p>
        <h3 className='text-3xl'>Boostez votre marketing avec nos solutions innovantes.</h3>
        <p>Commencez l'aventure dès maintenant !</p>
        <div className="flex flex-row justify-between items-center gap-8">
        <OWButton action="À propos" color="primary" onClick={() => handleClick('about')} />
          <OWButton action="Découvrir" color="secondary" onClick={() => handleClick('discover')} />
        </div>
      </div>
    </>
  );
}

export default Home;
