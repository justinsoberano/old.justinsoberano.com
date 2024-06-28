import { useEffect, useState } from "react";
import "./styles/involvement_stylesheet.css";
import { useSpring, a } from "@react-spring/web";
import "./styles/global_stylesheet.css";

interface InvolvementData {
	id: number;
	image: string;
	title: string;
	description: string;
	link: string;
	linkText: string;
}

export const Involvement = ({
	s,
	changeShow,
	changeTimer,
	changeShowInvolvement,
}: {
	s: any;
	changeShow: (arg0: boolean) => void;
	changeTimer: (arg0: number) => void;
	changeShowInvolvement: (arg0: boolean) => void;
}) => {
	const [involvementData, setInvolvementData] = useState<InvolvementData[]>([]);
	const styles = useSpring({
		from: !s
			? { opacity: 1, transform: "translateY(200px)" }
			: { opacity: 0, transform: "translateY(0px)" },
		to: !s
			? { opacity: 1, transform: "translateY(0px)" }
			: { opacity: 0, transform: "translateY(200px)" },
		delay: 0,
		config: { mass: 1, tension: 200, friction: 50 },
	});
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/justinsoberano/portfolio-data/main/card_data/involvement_data.json"
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch");
				}
				return response.json();
			})
			.then((data) => {
				setInvolvementData(data as InvolvementData[]);
			});
	}, [involvementData]);

	const cards = involvementData.map((item) => (
		<div className="card-design-involvement" key={item.id}>
			<img className="involvement-image" src={item.image} alt="image" />
			<p className="involvement-title">{item.title}</p>
			<p className="involvement-description">
				{item.description}
				{item.link && (
					<a
						href={item.link}
						target="_blank"
						style={{ color: "lightblue", fontWeight: "800" }}
					>
						{item.linkText}
					</a>
				)}
			</p>
		</div>
	));

	return (
		<a.div className="noselect involvement-container" style={styles} key={s}>
			{cards}
			<div
				className="project-back-button"
				onClick={() => {
					changeShow(true);
					changeTimer(100);
					changeShowInvolvement(true);
				}}
			>
				<p> back </p>
			</div>
		</a.div>
	);
};
