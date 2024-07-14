import React from "react";
import OWButton from "@/components/buttons/OWButton";

interface AboutSectionProps {
  onBack: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white m-auto">
      <h1>À propos de nous</h1>
      <p className="max-w-3xl m-auto mb-2 mt-8 text-center ">
        Nous sommes une équipe de développeurs passionnés, forts d&apos;une expérience diversifiée avec des outils de gestion de la relation client (GRC) et une expertise approfondie en marketing. Notre objectif est de révolutionner la manière dont les entreprises gèrent leur marketing et leur communication.
      </p>
      <p className="max-w-3xl m-auto my-2 text-center">
        Nous avons constaté les défis auxquels font face les entreprises dans la création de contenu, la gestion des leads et l&apos;automatisation du marketing. C&apos;est pourquoi nous avons créé une application innovante conçue pour simplifier ces processus complexes.
      </p>
      <p className="max-w-3xl m-auto my-2 text-center">
        Notre solution permet aux équipes marketing de travailler de manière plus efficace et productive. Grâce à notre approche centrée sur l&apos;utilisateur, nous aidons les entreprises à optimiser leur stratégie de marketing digital, à capturer et qualifier les leads de manière proactive, et à améliorer leur retour sur investissement (ROI).
      </p>
      <p className="max-w-3xl m-auto mb-8 mt-2 text-center">
        Que vous soyez une start-up cherchant à accélérer votre croissance ou une entreprise établie visant à renforcer sa présence en ligne, notre application vous offre les outils nécessaires pour atteindre vos objectifs marketing avec succès.
      </p>
      <OWButton action="Retour à l'accueil" color="secondary" onClick={onBack} />
    </div>
  );
};

export default AboutSection;
