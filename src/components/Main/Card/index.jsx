import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Image,
	ButtonGroup,
	Divider,
	Flex,
	Button,
} from '@chakra-ui/react';

import { GitHubLogo, GoTo } from '../../../assets/export';

const Display = ({
	id,
	title,
	picture,
	technologies,
	repository,
	deployed,
}) => {
	// # Functions
	// Generate link buttons
	const generateButtonOf = (site, svg) => {
		return site ? (
			<button className="link-btn-pushable">
				<span className="link-btn-shadow"></span>
				<span className="link-btn-edge"></span>
				<a
					className="link-btn-front text"
					href={site}
					role="button"
					target="_blank"
					rel="noreferrer"
				>
					<img className="icon-btn" src={svg} alt={`Link to ${site}	`} />
				</a>
			</button>
		) : null;
	};

	return (
		<Card className="project-card" key={id}>
			<CardHeader>
				<Heading className="project-title">{title}</Heading>
			</CardHeader>
			<CardBody>
				<Image
					src={picture}
					className="project-image"
					alt={`Screenshot of ${title}`}
				/>
				<Flex className="technologies">{technologies}</Flex>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup>
					<Button>
						{generateButtonOf(repository, GitHubLogo)}
						{generateButtonOf(deployed, GoTo)}
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};
export default Display;
