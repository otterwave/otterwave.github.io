"use client";

import React, { useState } from 'react';
import OWButton from "@/components/buttons/OWButton";
import { MainTitle } from "@/components/title";

const Home: React.FC = () => {
  const [showSection, setShowSection] = useState<string | null>(null);

  const handleClick = (section: string) => {
    setShowSection(section);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-8">
        <MainTitle />
        <h3>Your guide to marketing automation</h3>
        <p>Boost your sales, save time and money ! </p>
      </div>
      <div className="flex flex-row justify-between items-center gap-8 pt-24">
        <OWButton action="Discover" color="primary" onClick={() => handleClick('discover')} />
        <OWButton action="About us" color="secondary" onClick={() => handleClick('about')} />
        <OWButton action="Get in touch" path="mailto:sales.otterwave@gmail.com" color="primary" />
      </div>
      {showSection === 'discover' && (
        <DiscoverSection />
      )}
      {showSection === 'about' && (
        <AboutUsSection />
      )}
    </>
  );
}

const DiscoverSection: React.FC = () => {
  return (
    <div className="mt-8 p-4 rounded-md text-center"
         style={{
           background: '#E76F51', // Fond primaire
           color: 'white',
           boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
         }}>
      <p className="text-lg">
      Revolutionize your marketing strategy with our cutting-edge product design. Enhance automation, boost lead generation, streamline qualification, and supercharge your email campaigns—all while saving valuable time and ensuring effortless usability.
      </p>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <div className="mt-8 p-4 rounded-md text-center"
         style={{
           background: '#E76F51', // Fond primaire
           color: 'white',
           boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
         }}>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna eget dolor accumsan semper.
        Integer finibus faucibus lacus, eget consequat dui rutrum in. Duis vel efficitur lectus.
      </p>
    </div>
  );
};


export default Home;
