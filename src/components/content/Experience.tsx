import { useSpring, animated as a } from "@react-spring/web";
import "../styles/card_stylesheet.css";
import "../styles/global_stylesheet.css";

interface ExperienceData {
  id: number;
  image: string;
  techStackImage: string;
  employerImage: string;
  dates: string;
  title: string;
  description: string;
}

type ExperienceProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowExperience: (show: boolean) => void;
  data: ExperienceData[];
};

export const Experience: React.FC<ExperienceProps> = ({s, changeShow, changeTimer, changeShowExperience, data,}) => {
  const styles = useSpring({
    from: s
      ? { opacity: 1, transform: "translateY(450px)" }
      : { opacity: 1, transform: "translateY(0px)" },
    to: s
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 1, transform: "translateY(450px)" },
    delay: 0,
    config: { mass: 1, tension: 200, friction: 50 },
  });
  const cards = data.map((exp) => (
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
          WebkitMaskImage:"linear-gradient(to right, rgba(0,0,0,1) 80%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
          maskImage:"linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
        }}/>
      <img className="tech-stack" src={exp.techStackImage} alt={"techstack"} />
      <img className="employer" src={exp.employerImage} alt={"employer"} />
      <p className="job-dates">{exp.dates}</p>
      <p className="job-title">{exp.title}</p>
      <p className="job-description">{exp.description}</p>
    </div>
  ));
  return (
    <a.div className="noselect experience-container" style={styles}>
      {cards}
      <div className="card-back-button"
        onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowExperience(false);
        }}>
        <p> back </p>
      </div>
    </a.div>
  );
};