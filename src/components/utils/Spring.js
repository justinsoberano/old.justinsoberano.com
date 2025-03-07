import { useSpring, a } from "@react-spring/web";

const Spring = ({ 
  fromTransform, 
  toTransform, 
  fromOpacity = 1, 
  toOpacity = 1, 
  children, 
  config = { mass: 1, tension: 200, friction: 50 } 
}) => {
  const styles = useSpring({
    from: { opacity: fromOpacity, transform: fromTransform },
    to: { opacity: toOpacity, transform: toTransform },
    delay: 0,
    config,
  });
  
  return <a.div style={styles}>{children}</a.div>;
};

export default Spring;