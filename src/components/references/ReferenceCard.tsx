import React from 'react';
import { getImageUrl } from '../../utils/imageUtils';

interface ReferenceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({
  title,
  description,
  imageUrl,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-64">
        <img
          src={getImageUrl(imageUrl)}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ReferenceCard;