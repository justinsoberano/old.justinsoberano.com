import React, { ReactNode } from "react";
import { useSpring, a } from "@react-spring/web";

interface SpringProps {
  fromTransform: string;
  toTransform: string;
  children: ReactNode;
}

const Spring: React.FC<SpringProps> = ({ fromTransform, toTransform, children }) => {
  const styles = useSpring({
    from: { opacity: 1, transform: fromTransform },
    to: { opacity: 1, transform: toTransform },
    delay: 0,
    config: { mass: 1, tension: 200, friction: 50 },
  });

  return <a.div style={styles}>{children}</a.div>;
};

export default Spring;