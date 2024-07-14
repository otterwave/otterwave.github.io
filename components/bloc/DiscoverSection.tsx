import React from "react";
import OWButton from "@/components/buttons/OWButton";

interface DiscoverSectionProps {
  onBack: () => void;
  onInterest: () => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onBack, onInterest }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white m-auto max-w-3xl text-center">
      <h3 className="py-4">Une offre de lancement à ne pas manquer !</h3>
      <ul>
        <li>- Mise en place de notre logiciel</li>
        <li>- Ebook pour améliorer sa stratégie en 10 points essentiels, pour améliorer son taux de conversion auprès des prospects en 90 jours</li>
        <li>- Support pour l&apos;installation et l&apos;utilisation de notre logiciel</li>
        <li>- Aide à la création de la base de données de contact</li>
        <li>- Assistance et évolutions sur demande</li>
      </ul>
      <h3 className="m-auto py-8">
        59.99 euros par mois sans engagement pour les 10 premiers clients !
      </h3>
      <div className="flex flex-row justify-between items-center gap-8">
        <OWButton action="Je suis intéressé" color="primary" onClick={onInterest} />
        <OWButton action="Retour à l'accueil" color="secondary" onClick={onBack} />
        </div>
      </div>
  );
};

export default DiscoverSection;
