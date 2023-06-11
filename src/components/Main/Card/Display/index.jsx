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
} from '@chakra-ui/react';

import Framed from '../../Framed';
import FramedModal from '../../FramedModal';
// * import CustomButton from '../../CustomButton';

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
			borderRadius={'lg'}
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
					fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
					color={'white'}
				>
					{title}
				</Heading>
			</CardHeader>
			<CardBody p={{ base: 0, sm: 1.5, md: 2 }}>
				<AspectRatio ratio={1.85 / 1}>
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
