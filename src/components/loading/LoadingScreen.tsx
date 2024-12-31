import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { preloadAssets } from '../../utils/preloadAssets';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await preloadAssets();
        setProgress(100);
      } catch (error) {
        console.error('Failed to preload some assets:', error);
        setProgress(100); // Continue anyway
      }
    };

    // Start loading immediately
    loadAssets();

    // Update progress more frequently
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev; // Don't update if we're waiting for final load
        return prev + 2; // Faster progress
      });
    }, 10);

    return () => clearInterval(progressInterval);
  }, []);

  // Hide loading screen when complete
  if (progress === 100) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 1, repeat: Infinity, ease: "linear" }
        }}
        className="mb-8"
      >
        <Wrench className="w-16 h-16 text-teal-600" />
      </motion.div>

      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-teal-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <p className="mt-4 text-gray-600">Laden...</p>
    </motion.div>
  );
}