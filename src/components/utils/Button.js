import { useTransition, a } from "@react-spring/web";
import { ButtonText } from "./styles/ButtonStyles";

export const Button = ({ toggle, delay, className, onClick, text, }) => {
	const transitions = useTransition(toggle, {
		from: { opacity: 0, transform: "translateY(200px)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(200px)" },
    config: { mass: 10, tension: 450, friction: 80 },
		delay,
	});
	return transitions(
		(style, item) =>
			item && (
				<a.div className={className} onClick={onClick} style={style}>
					<ButtonText>{text}</ButtonText>
				</a.div>
			)
	);
};

export default Button;