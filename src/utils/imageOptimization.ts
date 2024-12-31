export const getOptimizedImageUrl = (url: string, options: {
  width?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif';
} = {}) => {
  const { width = 800, quality = 80, format = 'auto' } = options;
  
  // Add Cloudinary transformations
  if (url.includes('cloudinary')) {
    return url.replace('/upload/', `/upload/w_${width},q_${quality},f_${format}/`);
  }
  
  return url;
};
