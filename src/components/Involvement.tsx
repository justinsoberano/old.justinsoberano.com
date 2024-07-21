import { useSpring, a } from "@react-spring/web";
import "./styles/involvement_stylesheet.css";
import "./styles/global_stylesheet.css";

interface InvolvementData {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

type InvolvementProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowInvolvement: (show: boolean) => void;
  data: InvolvementData[];
};

export const Involvement: React.FC<InvolvementProps> = ({s, changeShow, changeTimer, changeShowInvolvement, data}) => {
  const styles = useSpring({
    from: s
      ? { opacity: 1, transform: "translateY(200px)" }
      : { opacity: 1, transform: "translateY(0px)" },
    to: s
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 1, transform: "translateY(200px)" },
    delay: 0,
    config: { mass: 1, tension: 200, friction: 50 },
  });
  const cards = data.map((item) => (
    <div className="card-design-involvement" key={item.id}>
      <img className="involvement-image" src={item.image} alt="involvement-image" />
      <p className="involvement-title">{item.title}</p>
      <p className="involvement-description">
        {item.description}
        {item.link && (
          <a href={item.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {item.linkText}
          </a>
        )}
      </p>
    </div>
  ));
  return (
    <a.div className="noselect involvement-container" style={styles}>
      {cards}
      <div className="project-back-button"
        onClick={() => {
          changeShow(true);
          changeTimer(100);
          changeShowInvolvement(false);
        }}>
        <p> back </p>
      </div>
    </a.div>
  );
};