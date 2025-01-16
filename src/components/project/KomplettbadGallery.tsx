import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectImage } from '../../types/project';
import ImageViewer from '../common/ImageViewer';
import { getImageUrl } from '../../utils/imageUtils';

interface KomplettbadGalleryProps {
  images: ProjectImage[];
}

const KomplettbadGallery: React.FC<KomplettbadGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [viewerIndex, setViewerIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(images[index]);
    setViewerIndex(index);
  };

  const handleNext = () => {
    setViewerIndex((prev) => {
      const next = (prev + 1) % images.length;
      setSelectedImage(images[next]);
      return next;
    });
  };

  const handlePrevious = () => {
    setViewerIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[next]);
      return next;
    });
  };

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
        <div className="absolute inset-0">
          <img
            src={getImageUrl(images[currentIndex].url)}
            alt=""
            className="w-full h-full object-cover blur-md scale-105 transform opacity-50"
          />
        </div>
        <div 
          className="relative z-10 h-full cursor-zoom-in"
          onClick={() => handleImageClick(currentIndex)}
        >
          <img
            src={getImageUrl(images[currentIndex].url)}
            alt={images[currentIndex].caption}
            className="w-full h-full object-cover transition-transform duration-200 
                     group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                 shadow-lg text-gray-800 hover:bg-white hover:text-blue-600
                 transition-all duration-200 z-20"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                 shadow-lg text-gray-800 hover:bg-white hover:text-blue-600
                 transition-all duration-200 z-20"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden 
                     transition-all duration-200 ${
                       index === currentIndex ? 'ring-2 ring-blue-600' : 'opacity-70 hover:opacity-100'
                     }`}
          >
            <img
              src={getImageUrl(image.url)}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <ImageViewer
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        src={selectedImage ? getImageUrl(selectedImage.url) : ''}
        alt={selectedImage?.caption || ''}
        caption={selectedImage?.caption}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={true}
        hasPrevious={true}
      />
    </div>
  );
};

export default KomplettbadGallery;