"use client";

import React, { useState } from "react";
import OWButton from "@/components/buttons/OWButton";
import { MainTitle } from "@/components/title";
import AboutSection from "@/components/bloc/AboutSection";
import DiscoverSection from "@/components/bloc/DiscoverSection";

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<"main" | "about" | "discover">("main");

  const handleBack = () => {
    setCurrentSection("main");
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
      {currentSection === "main" && (
        <div className="flex flex-col items-center justify-start gap-8 max-w-3xl text-center m-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins">La nouvelle vague du marketing</h1>
          <p className="text-base sm:text-lg md:text-xl font-arimo max-w-lg m-auto">
            Optimisez vos campagnes avec notre logiciel de marketing automation.
            Augmentez vos leads, améliorez la qualification et dynamisez vos
            campagnes grâce à nos experts. Gagnez du temps et rentabilisez votre
            temps.
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-arimo">Boostez votre marketing avec nos solutions innovantes.</h3>
          <p className="text-base sm:text-lg md:text-xl">Commencez l&apos;aventure dès maintenant !</p>
          <div className="flex flex-row justify-between items-center gap-8">
            <OWButton
              action="À propos"
              color="primary"
              onClick={() => setCurrentSection("about")}
            />
            <OWButton
              action="Découvrir"
              color="secondary"
              onClick={() => setCurrentSection("discover")}
            />
          </div>
        </div>
      )}
      {currentSection === "about" && <AboutSection onBack={handleBack} />}
      {currentSection === "discover" && <DiscoverSection onBack={handleBack} />}
    </>
  );
};

export default Home;
