import {useEffect, useState} from "react";
import "./styles/involvement_stylesheet.css";
import { useSpring, a } from "@react-spring/web";
import "./styles/global_stylesheet.css"

// Defining the structure of InvolvementData using a TypeScript interface
interface InvolvementData {
	id: number; // Unique identifier for the involvement item
	image: string; // URL of the involvement image
	title: string; // Title of the involvement
	description: string; // Description of the involvement
	link: string; // URL to the involvement or related resource
	linkText: string; // Text for the involvement link
}

// Involvement component
export const Involvement = ({s, changeShow, changeTimer, changeShowInvolvement}: { 

    s: any; // State variable for determining if the cards should be in focus
    changeShow: (arg0: boolean) => void;  // Function to change visibility state
    changeTimer: (arg0: number) => void;  // Function to change timer state
    changeShowInvolvement: (arg0: boolean) => void; /* Shows visibility state */ }) => {

    // State to hold the fetched involvement data, initially an empty array
    const [involvementData, setInvolvementData] = useState<InvolvementData[]>([]);


    // Defining animation styles using useSpring hook
    const styles = useSpring({
        // Animation starting point when 's' is false
        from: !s 
            ? { opacity: 1, transform: "translateY(200px)" } // Fully opaque and shifted down
            : { opacity: 0, transform: "translateY(0px)" }, // Transparent and at original position
        // Animation ending point when 's' is false
        to: !s
            ? { opacity: 1, transform: "translateY(0px)" } // Fully opaque and at original position
            : { opacity: 0, transform: "translateY(200px)" }, // Transparent and shifted down
        delay: 0, // No delay before animation starts
        config: { mass: 1, tension: 200, friction: 50 }, // Physics-based animation configuration
    });

    // useEffect hook to fetch involvement data once the component mounts
    useEffect(() => {
        // Fetching involvement data from a given URL
        fetch('https://raw.githubusercontent.com/justinsoberano/portfolio-data/main/card_data/involvement_data.json')
            .then((response) => {
                // Checking if the response is okay
                if (!response.ok) {
                    throw new Error('Failed to fetch'); // Throw error if fetch fails
                }
                return response.json(); // Parsing response data as JSON
            })
            .then((data) => {
                // Setting the fetched data to involvementData state
                setInvolvementData(data as InvolvementData[]);
            });
    }, []); // Empty dependency array ensures this runs only once after the initial render

    // Mapping through the involvementData array to generate involvement cards
    const cards = involvementData.map((item) => (
        <div className="card-design-involvement" key={item.id}>
            <img className="involvement-image" src={item.image} alt="image" />
            <p className="involvement-title">
                {item.title}
            </p>
            <p className="involvement-description">
                {item.description}
                {item.link && (
                    <a href={item.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }}>
                        {item.linkText}
                    </a>
                )}
            </p>
        </div>
    ));

    return (
        <>
            <a.div className="noselect involvement-container" style={styles} key={s}>
                {cards}
                <div className="project-back-button" onClick={() => {
                    changeShow(true);
                    changeTimer(100);
                    changeShowInvolvement(true);
                }}>
                    <p> back </p>
                </div>
            </a.div>
        </>
    );
};