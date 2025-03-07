import React, { useState, useRef, useEffect } from "react";
import Spring from "../utils/Spring";
import { 
  InvolvementCard, 
  InvolvementContainer, 
  InvolvementDesc, 
  InvolvementImg, 
  InvolvementTitle,
  InvolvementBackButton 
} from "./styles/InvolvementStyles";
import { useHorizontalScroll } from "../utils/useHorizontalScroll";
import { useColorContext } from "../../context/ColorContext";

export const Involvement = ({ s, changeShow, changeTimer, changeShowInvolvement, data }) => {
  const scrollRef = useHorizontalScroll();
  const { setActiveColor } = useColorContext();
  const [isExiting, setIsExiting] = useState(false);
  
  const timeoutsRef = useRef([]);

  const fromTransform = s ? "translateY(200px)" : "translateY(0px)";
  const toTransform = isExiting ? "translateY(300px)" : (s ? "translateY(0px)" : "translateY(300px)");
  
  const fromOpacity = 1;
  const toOpacity = isExiting ? 0 : 1;

  const handleBack = () => {
    setIsExiting(true);
    
    const timeout1 = setTimeout(() => {
      changeShow(true);
      changeTimer(0);
    }, 200);
    timeoutsRef.current.push(timeout1);
    
    const timeout2 = setTimeout(() => {
      changeShowInvolvement(false);
      setActiveColor(null);
    }, 300);
    timeoutsRef.current.push(timeout2);
  };

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timerId) => clearTimeout(timerId));
      timeoutsRef.current = [];
    };
  }, []);

  const cards = data.map((inv) => (
    <InvolvementCard key={inv.id}>
      <InvolvementImg src={inv.image}/>
      <InvolvementTitle>{inv.title}</InvolvementTitle>
      <InvolvementDesc>
        {inv.description}
        {inv.link && (
          <a href={inv.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {inv.linkText}
          </a>
        )}
      </InvolvementDesc>
    </InvolvementCard>
  ));

  return (
    <Spring 
      fromTransform={fromTransform} 
      toTransform={toTransform}
      fromOpacity={fromOpacity}
      toOpacity={toOpacity}
      config={{ mass: 1, tension: 200, friction: isExiting ? 20 : 50 }}
    >
      <InvolvementContainer ref={scrollRef}>{cards}
        <InvolvementBackButton onClick={handleBack}>back</InvolvementBackButton>
      </InvolvementContainer>
    </Spring>
  );
};