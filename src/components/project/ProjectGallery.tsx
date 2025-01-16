import React, { useState } from 'react';
import ImageViewer from '../common/ImageViewer';
import { getImageUrl } from '../../utils/imageUtils';
import type { ProjectImage } from '../../types/project';

interface ProjectGalleryProps {
  images: ProjectImage[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  if (images.length !== 2) return null;

  const [beforeImage, afterImage] = images;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
          <div className="absolute inset-0">
            <img
              src={getImageUrl(beforeImage.url)}
              alt=""
              className="w-full h-full object-cover blur-md scale-105 transform"
            />
          </div>
          <div 
            className="relative z-10 h-full cursor-zoom-in"
            onClick={() => setSelectedImage(beforeImage)}
          >
            <img
              src={getImageUrl(beforeImage.url)}
              alt={beforeImage.caption}
              className="w-full h-full object-cover transition-transform duration-200 
                       group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm 
                          font-medium text-white bg-red-600">
              Vorher
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
          <div className="absolute inset-0">
            <img
              src={getImageUrl(afterImage.url)}
              alt=""
              className="w-full h-full object-cover blur-md scale-105 transform"
            />
          </div>
          <div 
            className="relative z-10 h-full cursor-zoom-in"
            onClick={() => setSelectedImage(afterImage)}
          >
            <img
              src={getImageUrl(afterImage.url)}
              alt={afterImage.caption}
              className="w-full h-full object-cover transition-transform duration-200 
                       group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm 
                          font-medium text-white bg-green-600">
              Nachher
            </div>
          </div>
        </div>
      </div>

      <ImageViewer
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        src={selectedImage ? getImageUrl(selectedImage.url) : ''}
        alt={selectedImage?.caption || ''}
        caption={selectedImage?.caption}
      />
    </>
  );
};

export default ProjectGallery;