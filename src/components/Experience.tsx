import { useEffect, useState } from 'react';
import { useSpring, animated as a } from '@react-spring/web';
import './styles/card_stylesheet.css';
import './styles/global_stylesheet.css';

// Defining the structure of ExperienceData using a TypeScript interface
interface ExperienceData {
    id: number; // Unique identifier for the experience item
    image: string; // URL of the experience image
    techStackImage: string; // URL of the tech stack image
    employerImage: string; // URL of the employer image
    dates: string; // Dates of the experience
    title: string; // Title of the job or role
    description: string; // Description of the job or role
}

export const Experience = ({s, changeShow, changeTimer, changeShowExperience}: {
    s: any;
    changeShow: (arg0: boolean) => void;
    changeTimer: (arg0: number) => void;
    changeShowExperience: (arg0: boolean) => void; }) => {

    // State to hold the fetched experience data, initially an empty array
    const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);

    // Defining animation styles using useSpring hook
    const styles = useSpring({
        // Animation starting point when 's' is false
        from: !s 
            ? { opacity: 1, transform: "translateY(450px)" } // Fully opaque and shifted down
            : { opacity: 0, transform: "translateY(0px)" }, // Transparent and at original position
        // Animation ending point when 's' is false
        to: !s
            ? { opacity: 1, transform: "translateY(0px)" } // Fully opaque and at original position
            : { opacity: 0, transform: "translateY(450px)" }, // Transparent and shifted down
        delay: 0, // No delay before animation starts
        config: { mass: 1, tension: 200, friction: 50 }, // Physics-based animation configuration
    });

    // useEffect hook
    useEffect(() => {
        // Fetching experience data
        fetch('https://raw.githubusercontent.com/justinsoberano/portfolio-data/main/card_data/experiences_data.json')
            .then((response) => {
                // Checking if the response is ok
                if (!response.ok) {
                    throw new Error('Failed to fetch'); // Throw error if fetch fails
                }
                return response.json(); // Parsing response data as JSON
            })
            .then((data) => {
                setExperienceData(data as ExperienceData[]);
            })
    }, [experienceData]); // Empty dependency array

    // Map through the experienceData array
    const cards = experienceData.map((exp) => (
        <div className="card-design" key={exp.id}>
            <div style={{
                borderRadius: '10px 10px 0 0',
                width: '325px',
                height: '150px',
                backgroundImage: `url('${exp.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)' }} />
            <img className="tech-stack" src={exp.techStackImage} alt={"techstack"}/>
            <img className="employer" src={exp.employerImage} alt={"employer"}/>
            <p className="job-dates">{exp.dates}</p>
            <p className="job-title">{exp.title}</p>
            <p className="job-description">{exp.description}</p>
        </div>
    ));
    
    return (
        <>
            <a.div className="noselect experience-container" style={styles} key={s}>
                {cards}
                <div className="card-back-button" onClick={() => {
                    changeShow(true);
                    changeTimer(100);
                    changeShowExperience(true);
                }}>
                    <p> back </p>
                </div>
            </a.div>
        </>
    );
};
