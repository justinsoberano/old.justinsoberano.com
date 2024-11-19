import { useEffect, useRef } from 'react';

export const useHorizontalScroll = () => {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          element.scrollLeft += e.deltaY;
        }
      };
      
      element.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);
  
  return scrollRef;
};
