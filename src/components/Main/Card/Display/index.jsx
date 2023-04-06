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
	Icon,
} from '@chakra-ui/react';

import Framed from '../../Framed';
import CustomButton from '../../CustomButton';

import { AiFillGithub, AiFillHome } from '../../../../assets/export';

const Display = ({
	id,
	title,
	picture,
	technologies,
	repository,
	deployed,
}) => {
	const generateButtonOf = (site, icon) => {
		return site ? (
			<Link href={site} rel="noreferrer" isExternal={true} padding={'0.5'}>
				<Icon as={icon} display={'block'} boxSize={8} />
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
			<CardBody p={{ base: 0, sm: 1.5, md: 2 }}>
				<AspectRatio ratio={1.85 / 1}>
					<Framed
						image={picture}
						className="project-image"
						alt={`Screenshot of ${title}`}
						variant={{ sm: 'display' }}
					/>
				</AspectRatio>
				<HStack className="technologies" px={1} py={1.5}>
					{technologies}
				</HStack>
			</CardBody>
			<Divider color={'brand.100'} />
			<CardFooter>
				<ButtonGroup>
					{generateButtonOf(repository, AiFillGithub)}
					{generateButtonOf(deployed, AiFillHome)}
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export default Display;
