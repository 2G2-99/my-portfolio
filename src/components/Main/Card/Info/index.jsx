import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react';
import CustomButton from '../../CustomButton';
import Framed from '../../Framed';

const Info = ({ image, text, resume, button }) => {
	return (
		<Card id="about-card" boxShadow={'dark-lg'}>
			<CardHeader padding={'0'}>
				{/* <Image
					id="selfie"
					alt="That's me"
					src={image}
					objectFit={'cover'}
					boxSize={{ sm: 'xs' }}
					margin={{ base: 'auto', sm: '1rem auto' }}
					borderRadius={'md'}
					boxShadow={'md'}
				/> */}
				<Framed id={'selfie'} image={image} size={{ sm: 'sm' }} />
			</CardHeader>
			<CardBody>{text}</CardBody>
			<CardFooter>
				<CustomButton
					linkTo={resume}
					buttonContent={button}
					variant={'outline.400'}
				/>
			</CardFooter>
		</Card>
	);
};

export default Info;
