import React, { useState } from 'react';
import { useColorContext } from '../../context/ColorContext';

export const withHoverColor = (WrappedComponent) => {
  return ({ color, ...props }) => {
    const { setHoverColor } = useColorContext();
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseEnter = () => {
      setIsHovering(true);
      setHoverColor(color);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      setHoverColor(null);
    };
    
    return (
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        <WrappedComponent {...props} isHovering={isHovering} />
      </div>
    );
  };
}; 