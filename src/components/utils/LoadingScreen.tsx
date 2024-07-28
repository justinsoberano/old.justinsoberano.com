import React from "react";
import { LoadingScreenContainer,
				 TopText, 
				 ReadyText, 
				 Version, 
				 Link 
} from "./styles/LoadingScreenStyles";

type LoadingScreenProps = {
	started: boolean;
	onStarted: () => void;
}

const repoLink = "https://github.com/justinsoberano/justinsoberano.com";

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ started, onStarted }) => {
	return ( 
		<LoadingScreenContainer className={started ? "start" : ""}>
			<TopText> Ready Player One? </TopText>
			<ReadyText onClick={onStarted}>{">"} INSERT COIN {"<"}</ReadyText>
			<Version>
				<Link href={repoLink} target="_blank" rel="noreferrer">v2.4.4</Link>
			</Version>
		</LoadingScreenContainer>
	);
};
