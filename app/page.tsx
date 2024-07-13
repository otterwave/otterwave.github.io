"use client";

import React from "react";
import OWButton from "@/components/buttons/OWButton";
import { MainTitle } from "@/components/title";

const Home: React.FC = () => {
  const handleClick = (section: string) => {
    console.log("hey"), section;
  };

  return (
    <>
      <header className="p-3 flex justify-between">
        <MainTitle />
        <a
          href="mailto:sales.otterwave@gmail.com"
          className="transition duration-300 hover:underline pr-2 self-end"
        >
          Contactez-nous
        </a>
      </header>
      <div className="flex flex-col items-center justify-start gap-8 max-w-3xl text-center m-auto">
        <h1>Votre guide pour l&apos;automatisation du marketing</h1>
        <p className="max-w-lg m-auto">
          Optimisez vos campagnes avec notre logiciel de marketing automation.
          Augmentez vos leads, améliorez la qualification et dynamisez vos
          campagnes grâce à nos experts. Gagnez du temps et rentabilisez votre
          temps.
        </p>
        <h3>Boostez votre marketing avec nos solutions innovantes.</h3>
        <p>Commencez l&apos;aventure dès maintenant !</p>
        <div className="flex flex-row justify-between items-center gap-8">
          <OWButton
            action="À propos"
            color="primary"
            onClick={() => handleClick("about")}
          />
          <OWButton
            action="Découvrir"
            color="secondary"
            onClick={() => handleClick("discover")}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
