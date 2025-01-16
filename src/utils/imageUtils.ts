// Helper function to get image URL
export const getImageUrl = (path: string): string => {
  // If it's already a full URL (e.g. https://...), return as is
  if (path.startsWith("http")) {
    return path;
  }

  // For assets in src/assets folder
  try {
    // Import image directly - Vite will handle this during build
    const imageUrl = new URL(`/src/assets/${path}`, import.meta.url).href;
    return imageUrl;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.warn(`Failed to load image from assets: ${path}`);
    // Fallback to public folder if asset import fails
    return path.startsWith("/") ? path : `/${path}`;
  }
};

// Helper to preload images
export const preloadImages = (imagePaths: string[]): Promise<void[]> => {
  return Promise.all(
    imagePaths.map((path) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = (e) => {
          console.error(`Failed to load image: ${path}`, e);
          reject(e);
        };
        img.src = getImageUrl(path);
      });
    })
  );
};

// Helper to preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    "images/logo/logo.png",
    "images/logo/logo-no-text.png",
    "images/logo/favicon.png",
    "images/hero/slide1.jpg",
  ];

  return preloadImages(criticalImages);
};
