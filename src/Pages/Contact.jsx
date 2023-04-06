import {
	Box,
	HStack,
	VStack,
	Heading,
	Text,
	ButtonGroup,
	Link,
	Icon,
	Container,
	Flex,
	Divider,
} from '@chakra-ui/react';
import Form from '../components/Main/Form';
import ContactCard from '../components/Main/Card/Contact';

const Contact = (linkedin, github, email) => {
	return (
		<Box py={'1rem'}>
			<Flex direction={'column'} gap={5}>
				<Container>
					<ContactCard />
				</Container>
				<Divider />
				<Container>
					<Form />
				</Container>
			</Flex>
		</Box>
	);
};

export default Contact;
