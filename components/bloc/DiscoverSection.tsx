import React from "react";
import OWButton from "@/components/buttons/OWButton";

interface DiscoverSectionProps {
  onBack: () => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white m-auto">
      <h1>Découvrez nos solutions</h1>
      <p className="max-w-3xl m-auto mb-2 mt-8 text-center py-8">
        Explorez notre gamme de solutions de marketing automation conçues pour améliorer l&apos;efficacité de vos campagnes, augmenter vos leads, et simplifier vos processus marketing.
      </p>
      <OWButton action="Retour à l'accueil" color="secondary" onClick={onBack} />
    </div>
  );
};

export default DiscoverSection;
