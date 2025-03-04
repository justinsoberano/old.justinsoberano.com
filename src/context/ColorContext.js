import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState(null);
  const [hoverColor, setHoverColor] = useState(null);

  return (
    <ColorContext.Provider value={{ 
      activeColor, 
      setActiveColor,
      hoverColor,
      setHoverColor
    }}>
      {children}
    </ColorContext.Provider>
  );
}; 