import { Container, Heading, Text, VStack } from '@chakra-ui/react';

const Hero = () => {
	return (
		<>
			<Container id="hero" textAlign={'center'}>
				<VStack className="container text-center">
					<Heading as="h1" className="display-4">
						Welcome to my website!
					</Heading>
					<Text>
						I'm a front-end developer based on London. Passionate about books,
						video games and music.
					</Text>
				</VStack>
			</Container>
		</>
	);
};

export default Hero;
