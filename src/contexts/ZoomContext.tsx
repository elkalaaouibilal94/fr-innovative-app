import React, { createContext, useContext, useState } from 'react';

interface ZoomContextType {
  isZoomed: boolean;
  setIsZoomed: (zoomed: boolean) => void;
}

const ZoomContext = createContext<ZoomContextType | undefined>(undefined);

export const ZoomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <ZoomContext.Provider value={{ isZoomed, setIsZoomed }}>
      {children}
    </ZoomContext.Provider>
  );
};

export const useZoom = () => {
  const context = useContext(ZoomContext);
  if (context === undefined) {
    throw new Error('useZoom must be used within a ZoomProvider');
  }
  return context;
};