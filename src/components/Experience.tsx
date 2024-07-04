import { useEffect, useState } from "react";
import { useSpring, animated as a } from "@react-spring/web";
import "./styles/card_stylesheet.css";
import "./styles/global_stylesheet.css";

interface ExperienceData {
	id: number;
	image: string;
	techStackImage: string;
	employerImage: string;
	dates: string;
	title: string;
	description: string;
}

export const Experience = ({
	s,
	changeShow,
	changeTimer,
	changeShowExperience,
}: {
	s: any;
	changeShow: (arg0: boolean) => void;
	changeTimer: (arg0: number) => void;
	changeShowExperience: (arg0: boolean) => void;
}) => {
	const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
	const styles = useSpring({
		from: !s
			? { opacity: 1, transform: "translateY(450px)" }
			: { opacity: 0, transform: "translateY(0px)" },
		to: !s
			? { opacity: 1, transform: "translateY(0px)" }
			: { opacity: 0, transform: "translateY(450px)" },
		delay: 0,
		config: { mass: 1, tension: 200, friction: 50 },
	});
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/justinsoberano/portfolio-data/main/card_data/experiences_data.json"
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch");
				}
				return response.json();
			})
			.then((data) => {
				setExperienceData(data as ExperienceData[]);
			});
	}, [experienceData]);

	const cards = experienceData.map((exp) => (
		<div className="card-design" key={exp.id}>
			<div
				style={{
					borderRadius: "10px 10px 0 0",
					width: "325px",
					height: "150px",
					backgroundImage: `url('${exp.image}')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					WebkitMaskImage:
						"linear-gradient(to right, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
					maskImage:
						"linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
				}}
			/>
			<img className="tech-stack" src={exp.techStackImage} alt={"techstack"} />
			<img className="employer" src={exp.employerImage} alt={"employer"} />
			<p className="job-dates">{exp.dates}</p>
			<p className="job-title">{exp.title}</p>
			<p className="job-description">{exp.description}</p>
		</div>
	));

	return (
		<a.div className="noselect experience-container" style={styles} key={s}>
			{cards}
			<div
				className="card-back-button"
				onClick={() => {
					changeShow(true);
					changeTimer(100);
					changeShowExperience(true);
				}}
			>
				<p> back </p>
			</div>
		</a.div>
	);
};
