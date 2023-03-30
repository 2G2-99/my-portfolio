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
	AspectRatio,
} from '@chakra-ui/react';

import Framed from '../../Framed';
import CustomButton from '../../CustomButton';

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
			backdropFilter={'auto'}
			backdropBlur={'2rem'}
			bg={'transparent'}
		>
			<CardHeader>
				<Heading
					className="project-title"
					textAlign={'center'}
					textShadow={'.175rem .175rem #1A202C'}
					fontSize={{ base: '1.125rem', sm: '1.25rem', md: '1.5rem' }}
					color={'white'}
				>
					{title}
				</Heading>
			</CardHeader>
			<CardBody p={'0.5em'}>
				<AspectRatio ratio={1.85 / 1}>
					<Framed
						image={picture}
						className="project-image"
						alt={`Screenshot of ${title}`}
						variant={{ sm: 'display' }}
					/>
				</AspectRatio>
				<HStack className="technologies" p={'.5em'} dropShadow={'dark-lg'}>
					{technologies}
				</HStack>
			</CardBody>
			<Divider color={'brand.100'} />
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
