import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useZoom } from '../../contexts/ZoomContext';
import { getImageUrl } from '../../utils/imageUtils';

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  isOpen,
  onClose,
  src,
  alt,
  caption,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setIsZoomed } = useZoom();

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          if (onNext && hasNext) onNext();
          break;
        case 'ArrowLeft':
          if (onPrevious && hasPrevious) onPrevious();
          break;
      }
    };

    if (isOpen) {
      setIsZoomed(true);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyboard);
    }

    return () => {
      setIsZoomed(false);
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [isOpen, onClose, setIsZoomed, onNext, onPrevious, hasNext, hasPrevious]);

  const handleNavigation = (e: React.MouseEvent, direction: 'next' | 'previous') => {
    e.stopPropagation();
    if (direction === 'next' && onNext) {
      onNext();
    } else if (direction === 'previous' && onPrevious) {
      onPrevious();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 z-[10000]">
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 
                   transition-colors duration-200"
          aria-label="Close image viewer"
        >
          <X size={24} />
        </button>
      </div>

      {hasPrevious && (
        <button
          onClick={(e) => handleNavigation(e, 'previous')}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                   bg-black/50 text-white hover:bg-black/70 transition-all duration-200
                   hover:scale-110 cursor-pointer z-[10000]"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => handleNavigation(e, 'next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                   bg-black/50 text-white hover:bg-black/70 transition-all duration-200
                   hover:scale-110 cursor-pointer z-[10000]"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      )}

      <div 
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <img
          src={getImageUrl(src)}
          alt={alt}
          className={`max-w-[95vw] max-h-[90vh] object-contain transition-opacity duration-300
                    ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white text-center">
          <p>{caption}</p>
        </div>
      )}

      <div className="absolute bottom-4 left-4 text-white/50 text-sm">
        Use arrow keys to navigate • ESC to close
      </div>
    </div>
  );
};

export default ImageViewer;