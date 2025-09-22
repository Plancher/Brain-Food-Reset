import React from "react";

type CollabBadgeProps = {
  silas: string;
  influencer: string;
  text: string;
};

const CollabBadge: React.FC<CollabBadgeProps> = ({ silas, influencer, text }) => {
  return (
    <div 
      className="fixed top-20 right-4 z-50"
    >
      {/* Grüne Ellipse mit Text und Bildern */}
      <div
        className="flex items-center bg-[#0a978a] rounded-full px-6 py-3 shadow-lg"
      >
        {/* Silas Bild */}
        <img
          src={silas}
          alt="Silas"
          className="w-16 h-16 rounded-full border-2 border-white object-cover shadow-md mr-4"
        />

        {/* Text */}
        <p className="text-white font-bold text-lg mr-4">
          {text}
        </p>

        {/* Influencer Bild */}
        <img
          src={influencer}
          alt="Influencer"
          className="w-16 h-16 rounded-full border-2 border-white object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default CollabBadge;
