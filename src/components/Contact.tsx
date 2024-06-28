import { useSpring, a } from "@react-spring/web";
import "./styles/button_stylesheet.css";
import "./styles/contact_stylesheet.css";
import "./styles/global_stylesheet.css";

export const Contact = (props: {
	s: any;
	changeShow: (arg0: boolean) => void;
	changeTimer: (arg0: number) => void;
	changeShowContact: (arg0: boolean) => void;
}) => {
	let toggle = props.s;
	function ContactSpring(delay: number) {
		return useSpring({
			from: !toggle
				? { opacity: 1, transform: "translateY(450px)" }
				: { opacity: 0, transform: "translateY(0px)" },
			to: !toggle
				? { opacity: 1, transform: "translateY(0px)" }
				: { opacity: 0, transform: "translateY(450px)" },
			delay: delay,
			config: { mass: 3.5, tension: 220, friction: 45 },
		});
	}

	function openInNewTab(url: string) {
		window.open(url, "_blank");
	}

	return (
		<a.div
			className="noselect button-container"
			style={{ ...ContactSpring(0) }}
		>
			<a.div
				className="button-design linkedin-blue"
				onClick={() =>
					openInNewTab("https://www.linkedin.com/in/justinsoberano/")
				}
				style={{ ...ContactSpring(0) }}
			>
				<span className="button-text">linkedin</span>
			</a.div>
			<a.div
				className="button-design github-gray"
				onClick={() => openInNewTab("https://github.com/justinsoberano")}
				style={{ ...ContactSpring(50) }}
			>
				<span className="button-text">github</span>
			</a.div>
			<a.div
				className="button-design light-purple"
				onClick={() =>
					openInNewTab(
						"https://docs.google.com/viewer?url=https://github.com/justinsoberano/portfolio-data/raw/main/resume/resume.pdf"
					)
				}
				style={{ ...ContactSpring(100) }}
			>
				<span className="button-text">resume</span>
			</a.div>
			<a.div
				className="button-design rainbow"
				onClick={() => openInNewTab("mailto:me@justinsoberano.com")}
				style={{ ...ContactSpring(150) }}
			>
				<span className="button-text">email me!</span>
			</a.div>
			<a.div
				className="contact-back-button"
				onClick={() => {
					props.changeShow(true);
					props.changeTimer(100);
					props.changeShowContact(true);
				}}
				style={{ ...ContactSpring(175) }}
			>
				<span className="button-text">back</span>
			</a.div>
		</a.div>
	);
};
