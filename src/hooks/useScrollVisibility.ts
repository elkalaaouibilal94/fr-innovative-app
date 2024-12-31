import { useState, useEffect } from 'react';

interface ScrollVisibilityOptions {
  threshold?: number;
  hideOnScroll?: boolean;
  initialVisibility?: boolean;
}

/**
 * Scroll visibility hook:
 * - If `hideOnScroll` is true, the element is hidden only when scrolling down,
 *   and shown when scrolling up or if the scroll position is above `threshold`.
 * - If `hideOnScroll` is false, the element is shown only after crossing `threshold`.
 */
export const useScrollVisibility = (options: ScrollVisibilityOptions = {}) => {
  const {
    threshold = 100,
    hideOnScroll = true,
    initialVisibility = false,
  } = options;

  const [isVisible, setIsVisible] = useState(initialVisibility);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (hideOnScroll) {
        // Hide when scrolling down, show when scrolling up or if below threshold
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY || currentScrollY < threshold) {
          // Scrolling up or still above top threshold
          setIsVisible(true);
        }
      } else {
        // If hideOnScroll is false, we show the element only after crossing threshold
        setIsVisible(currentScrollY > threshold);
      }

      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideOnScroll, threshold, lastScrollY]);

  return isVisible;
};
