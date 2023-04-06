import { Center, Heading, Text, VStack } from '@chakra-ui/react';

const Hero = () => {
	return (
		<>
			<Center
				id="hero"
				textAlign={'center'}
				backdropFilter="auto"
				backdropContrast={'40%'}
				boxShadow={'inner'}
				p={'4'}
				borderRadius={'md'}
			>
				<VStack className="container text-center">
					<Heading as="h1" className="display-4">
						Welcome to my website!
					</Heading>
					<Text>
						I'm a front-end developer based on London. Passionate about books,
						video games and music.
					</Text>
				</VStack>
			</Center>
		</>
	);
};

export default Hero;
