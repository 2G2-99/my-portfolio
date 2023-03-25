import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Image,
	ButtonGroup,
	Divider,
	Button,
	HStack,
	Link,
} from '@chakra-ui/react';

import { github_logo, goto } from '../../../../assets/export';

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
			<Link
				href={site}
				rel="noreferrer"
				isExternal={true}
				// Style
				width={'9'}
				padding={'0.5'}
			>
				<Image src={svg} alt={`Link to ${site}`} />
			</Link>
		) : null;
	};

	return (
		<Card
			className="project-card"
			key={id}
			borderRadius={'lg'}
			boxShadow={'dark-lg'}
		>
			<CardHeader p={'.5rem 0 0 .5rem'}>
				<Heading className="project-title" fontSize={'2rem'}>
					{title}
				</Heading>
			</CardHeader>
			<CardBody>
				<Image
					src={picture}
					className="project-image"
					alt={`Screenshot of ${title}`}
					borderRadius={'sm'}
					boxShadow={'base'}
				/>
				<HStack className="technologies" pt={'1rem'}>
					{technologies}
				</HStack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup>
					{generateButtonOf(repository, github_logo)}
					{generateButtonOf(deployed, goto)}
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export default Display;
