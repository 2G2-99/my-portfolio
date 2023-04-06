import { Container, Flex, Divider } from '@chakra-ui/react';
import Form from '../components/Main/Form';
import ContactCard from '../components/Main/Card/Contact';

const Contact = () => (
	<Flex
		direction={'column'}
		py={4}
		mx={{ sm: 4 }}
		gap={6}
		borderRadius={{ base: 'none', sm: 'lg' }}
		boxShadow={'dark-lg'}
		backdropFilter={'auto'}
		backdropBlur={'2rem'}
		backdropContrast={'70%'}
		bg={'transparent'}
	>
		<Container>
			<ContactCard />
		</Container>
		<Divider borderColor={'brand.900'} />
		<Container>
			<Form />
		</Container>
	</Flex>
);

export default Contact;
