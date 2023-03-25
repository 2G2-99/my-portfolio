import {
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from '@chakra-ui/react';
import CustomButton from '../../CustomButton';

const Info = ({ image, text, resume, button }) => {
	return (
		<Card id="about-card" boxShadow={'dark-lg'}>
			<CardHeader padding={'0'}>
				<Image
					id="selfie"
					alt="That's me"
					src={image}
					objectFit={'cover'}
					boxSize={{ sm: 'xs' }}
					margin={{ base: 'auto', sm: '1rem auto' }}
					borderRadius={{ base: 'sm', sm: 'full' }}
					boxShadow={'md'}
				/>
			</CardHeader>
			<CardBody>{text}</CardBody>
			<CardFooter>
				{/* <Link href={resume} target="_blank" rel="noreferrer">
					<Box as="button">Resume</Box>
				</Link> */}
				<CustomButton linkContent={resume} buttonContent={button} />
			</CardFooter>
		</Card>
	);
};

export default Info;
