import { useState, useCallback } from "react";

export function useTestimonialSlider(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalItems - 1,
  };
}
