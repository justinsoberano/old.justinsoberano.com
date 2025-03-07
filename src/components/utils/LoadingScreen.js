import { LoadingScreenContainer,
				 TopText, 
				 ReadyText, 
				 Version, 
				 Link 
} from "./styles/LoadingScreenStyles";

const repoLink = "https://github.com/justinsoberano/justinsoberano.com";

export const LoadingScreen = ({ started, onStarted }) => {
	return ( 
		<LoadingScreenContainer className={started ? "start" : ""}>
			<TopText> Ready Player One? </TopText>
			<ReadyText onClick={onStarted}>
				<span className="blink-bold">{">"}</span> PRESS START <span className="blink-bold">{"<"}</span>
			</ReadyText>
			<Version>
				<Link href={repoLink} target="_blank" rel="noreferrer">v2.6.1</Link>
			</Version>
		</LoadingScreenContainer>
	);
};
