// List of critical assets to preload
const criticalAssets = [
  // Hero slider first image (others can load later)
  'https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734642985/IMG_4315_m1kmf4.jpg',
  
  // Logos
  'https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734643169/Favicon_mlxy0a.png',
  'https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734647725/transparent_Log_ggrs0m.png',
  'https://res.cloudinary.com/dyzvzlq7u/image/upload/v1734643159/transparent_Logo_Ohne_Schrift_qhvolc.png'
];

export const preloadAssets = () => {
  const promises = criticalAssets.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  // Add a small timeout to ensure minimum visual feedback
  const minTimeout = new Promise(resolve => setTimeout(resolve, 300));

  return Promise.all([...promises, minTimeout]);
};