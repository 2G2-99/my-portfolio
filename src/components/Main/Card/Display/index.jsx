import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	ButtonGroup,
	Divider,
	HStack,
	Link,
	AspectRatio,
	Icon,
	Flex,
} from '@chakra-ui/react';

import Framed from '../../Framed';
import FramedModal from '../../FramedModal';

import { AiFillGithub, AiFillHome } from 'react-icons/ai';

const Display = ({
	id,
	title,
	picture,
	description,
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
			borderRadius={'base'}
			boxShadow={'dark-lg'}
			backdropFilter={'auto'}
			backdropBlur={'2rem'}
			bg={'transparent'}
		>
			<CardHeader>
				<Heading
					className="project-title"
					textAlign={'left'}
					textShadow={'.125rem .125rem #1A202C'}
					fontSize={{ base: 'md', lg: '2xl' }}
					color={'white'}
				>
					{title}
				</Heading>
			</CardHeader>
			<CardBody p={{ base: 0, sm: 1.5, md: 2 }}>
				<Flex direction={'column'} justify={'space-between'} gap={4}>
					<AspectRatio ratio={2 / 1}>
						<FramedModal
							showModalButtonText={
								<Framed
									image={picture}
									className="project-image"
									alt={`Screenshot of ${title}`}
									variant={{ sm: 'display' }}
								/>
							}
							modalHeader={title}
							modalBody={description}
						/>
					</AspectRatio>
					<HStack className="technologies" px={{ base: 4, md: 2 }} py={1.5}>
						{technologies}
					</HStack>
				</Flex>
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
