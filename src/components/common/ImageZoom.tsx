import React, { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface ImageZoomProps {
  src: string;
  alt: string;
  caption?: string;
  label?: {
    text: string;
    color: 'red' | 'green';
  };
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, caption, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case '+':
        case '=':
          handleZoom(0.1);
          break;
        case '-':
          handleZoom(-0.1);
          break;
        case 'ArrowLeft':
          setPosition(prev => ({ ...prev, x: prev.x + 50 }));
          break;
        case 'ArrowRight':
          setPosition(prev => ({ ...prev, x: prev.x - 50 }));
          break;
        case 'ArrowUp':
          setPosition(prev => ({ ...prev, y: prev.y + 50 }));
          break;
        case 'ArrowDown':
          setPosition(prev => ({ ...prev, y: prev.y - 50 }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle wheel zoom
  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = -e.deltaY / 1000;
      handleZoom(delta);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isOpen, handleWheel]);

  const handleOpen = () => {
    setIsOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'auto';
  };

  const handleZoom = (delta: number) => {
    setScale(prev => Math.min(Math.max(1, prev + delta), 3));
  };

  // Mouse and touch event handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const point = 'touches' in e ? e.touches[0] : e;
    setDragStart({
      x: point.clientX - position.x,
      y: point.clientY - position.y
    });
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const point = 'touches' in e ? e.touches[0] : e;
    setPosition({
      x: point.clientX - dragStart.x,
      y: point.clientY - dragStart.y
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* Thumbnail view */}
      <div 
        onClick={handleOpen}
        className="group cursor-zoom-in relative h-full overflow-hidden rounded-lg"
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-200 
                   group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 
                      transition-colors flex items-center justify-center">
          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 
                          transition-opacity" size={32} />
        </div>
        {label && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm 
                        font-medium text-white ${label.color === 'red' ? 
                        'bg-red-600' : 'bg-green-600'}`}>
            {label.text}
          </div>
        )}
      </div>

      {/* Zoom overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[99999] backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-[100000]">
            <button
              onClick={(e) => { e.stopPropagation(); handleZoom(-0.1); }}
              className="text-white hover:text-gray-300 transition-colors 
                       bg-black/20 p-2 rounded-full backdrop-blur-sm"
              aria-label="Zoom out"
              disabled={scale === 1}
            >
              <ZoomOut size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleZoom(0.1); }}
              className="text-white hover:text-gray-300 transition-colors 
                       bg-black/20 p-2 rounded-full backdrop-blur-sm"
              aria-label="Zoom in"
              disabled={scale === 3}
            >
              <ZoomIn size={24} />
            </button>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-300 transition-colors 
                       bg-black/20 p-2 rounded-full backdrop-blur-sm"
              aria-label="Close zoom view"
            >
              <X size={24} />
            </button>
          </div>

          {/* Image container */}
          <div 
            className="absolute inset-0 flex items-center justify-center p-4"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] object-contain transition-transform 
                       duration-200 select-none"
              style={{
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                touchAction: 'none'
              }}
              draggable={false}
            />
          </div>

          {/* Caption */}
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white 
                          p-4 text-center backdrop-blur-sm">
              <p>{caption}</p>
            </div>
          )}

          {/* Help text */}
          <div className="absolute bottom-4 left-4 text-white/70 text-sm flex 
                        items-center gap-2">
            <Move size={16} />
            <span>Drag to pan • Scroll to zoom • ESC to close</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageZoom;