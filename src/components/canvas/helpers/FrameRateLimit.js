import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export default function FrameRateLimit({ fps = 60 }) {
  const { invalidate } = useThree();
  
  useEffect(() => {
    const interval = 1000 / fps;
    const timer = setInterval(() => {
      invalidate();
    }, interval);
    
    return () => clearInterval(timer);
  }, [fps, invalidate]);
  
  return null;
}