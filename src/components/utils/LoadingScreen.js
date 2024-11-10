
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
			<ReadyText onClick={onStarted}>{">"} INSERT COIN {"<"}</ReadyText>
			<Version>
				<Link href={repoLink} target="_blank" rel="noreferrer">v2.5</Link>
			</Version>
		</LoadingScreenContainer>
	);
};
