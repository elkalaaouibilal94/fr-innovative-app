import React from 'react';
import { getImageUrl } from '../../utils/imageUtils';

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({ beforeImage, afterImage, alt }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <img
            src={getImageUrl(beforeImage)}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-md scale-105"
          />
          <img
            src={getImageUrl(beforeImage)}
            alt={`${alt} - Vorher`}
            className="absolute inset-0 w-full h-full object-contain z-10"
          />
        </div>
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
          Vorher
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <img
            src={getImageUrl(afterImage)}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-md scale-105"
          />
          <img
            src={getImageUrl(afterImage)}
            alt={`${alt} - Nachher`}
            className="absolute inset-0 w-full h-full object-contain z-10"
          />
        </div>
        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
          Nachher
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterImage;