import { IMAGES } from "../constants/images";

// List of critical assets to preload
const criticalAssets = [
  // Hero slider first image (others can load later)
  IMAGES.HERO_SLIDES[0],

  // Logos
  IMAGES.FAVICON,
  IMAGES.LOGO,
  IMAGES.LOGO_NO_TEXT,

  // First images from each project category
  IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE1.BEFORE,
  IMAGES.PROJECTS.BATHROOM.BEFORE_AFTER.DUSCHE1.AFTER,
  IMAGES.PROJECTS.BATHROOM.COMPLETE.GALLERY[0],
  IMAGES.PROJECTS.HEATING.SYSTEM[0],
  IMAGES.PROJECTS.PIPES.INSTALLATION[0],
];

export const preloadAssets = () => {
  const promises = criticalAssets.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  // Add a small timeout to ensure minimum visual feedback
  const minTimeout = new Promise((resolve) => setTimeout(resolve, 300));

  return Promise.all([...promises, minTimeout]);
};
