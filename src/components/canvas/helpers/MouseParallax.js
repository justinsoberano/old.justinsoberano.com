import { useRef, useEffect } from 'react';
import { useThree, useFrame } from "@react-three/fiber";

export default function MouseParallax() {
  const { camera, viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const windowSize = useRef({ width: 0, height: 0 });
  const isDesktop = viewport.width >= viewport.height;
  
  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e) => {
      mouse.current.x = (e.clientX - windowSize.current.width / 2) / (windowSize.current.width / 2);
      mouse.current.y = (e.clientY - windowSize.current.height / 2) / (windowSize.current.height / 2);
    };

    const updateWindowSize = () => {
      windowSize.current.width = window.innerWidth;
      windowSize.current.height = window.innerHeight;
    };

    updateWindowSize();
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [isDesktop]);

  useFrame(() => {
    if (!isDesktop) {
      camera.position.x = 0;
      camera.rotation.x = 0;
      camera.rotation.y = 0;
      return;
    }

    target.current.x += (mouse.current.x - target.current.x) * 0.03;
    target.current.y += (mouse.current.y - target.current.y) * 0.03;

    const finalZ = viewport.aspect > 1 ? 7 : 5;
    const currentZ = camera.position.z;
    const intensity = Math.min(1, Math.max(0, (currentZ - 2) / (finalZ - 2)));
    
    const parallaxX = target.current.x * 0.8 * intensity;
    const rotationX = -target.current.y * 0.05 * intensity;
    const rotationY = -target.current.x * 0.05 * intensity;

    camera.position.x = parallaxX;
    camera.rotation.x = rotationX;
    camera.rotation.y = rotationY;
  });

  return null;
}