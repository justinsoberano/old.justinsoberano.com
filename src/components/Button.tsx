import { useTransition, a } from "@react-spring/web";

type ButtonProps = {
  toggle: boolean;
  delay: number;
  className: string;
  onClick: () => void,
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ toggle, delay, className, onClick, text, }) => {
	const transitions = useTransition(toggle, {
		from: { opacity: 0, transform: "translateY(200px)" },
		enter: { opacity: 1, transform: "translateY(0px)" },
		leave: { opacity: 0, transform: "translateY(200px)" },
    config: { mass: 7, tension: 500, friction: 100 },
		delay,
	});
	return transitions(
		(style, item) =>
			item && (
				<a.div className={className} onClick={onClick} style={style}>
					<span className="button-text">{text}</span>
				</a.div>
			)
	);
};

export default Button;