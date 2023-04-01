import {
	Container,
	Flex,
	Heading,
	VStack,
	Text,
	Tooltip,
	Icon,
} from '@chakra-ui/react';

import {
	IoLogoCss3,
	IoLogoJavascript,
	BsBootstrapFill,
	IoLogoNodejs,
	IoLogoReact,
	IoLogoHtml5,
	selfie,
} from '../assets/export';
import Info from '../components/Main/Card/Info';

const About = () => {
	return (
		<Flex
			py={'1rem'}
			id="about"
			direction={'column'}
			justify={'space-evenly'}
			align={'center'}
		>
			<Container maxW={'container.xl'}>
				<Info
					image={selfie}
					text={
						<>
							<Text className="card-text">
								<Text as={'span'} id="greeting">
									Hello again!{' '}
								</Text>
								I am part of that generation that started to have access to
								internet and not only a computer but different devices (of
								which, several went to the technician.), and there has been a
								huge gap between use and knowledge about technology.
							</Text>
							<Text className="card-text">
								What captured my attention and started to make many questions,
								leading me into more and more doubts. And thus, in search for
								those answers I started to feel some attraction to discover the
								huge amount of things to do and why not, create.
							</Text>
							<Text className="card-text">
								So, feel free to check on anything you find!
							</Text>
						</>
					}
					resume={
						'https://drive.google.com/file/d/14zVZNyQ0QBGysXjM8gUDDK0jVwBovqiE/view?usp=sharing'
					}
					button={'Resume'}
				></Info>
			</Container>
			<VStack
				id="display-skills"
				borderRadius={'md'}
				backdropFilter="auto"
				backdropContrast={'70%'}
				boxShadow={'inner'}
				m={'10'}
				px={'2'}
			>
				<Heading as={'h3'}>Skills</Heading>
				<Text>I'm well experienced in this technologies...</Text>
				<Flex id="skills-set" wrap={'wrap'} justify={'center'}>

					<Tooltip label={'HTML5'} shouldWrapChildren>
						<Icon as={IoLogoHtml5} aria-label="HTML5 logo"
							display={'block'}
							role='presentation'
							boxSize={8}
							m={{ base: '2' }} />
					</Tooltip>
					<Tooltip label={'CSS3'} shouldWrapChildren>
						<Icon as={IoLogoCss3} aria-label="CSS3 logo"
							display={'block'}
							role='presentation'
							boxSize={8}
							m={{ base: '2' }} />
					</Tooltip>
					<Tooltip label={'JavaScript'} shouldWrapChildren>
						<Icon as={IoLogoJavascript} aria-label="JavaScript logo"
							display={'block'}
							role='presentation'
							boxSize={8}
							m={{ base: '2' }} />
					</Tooltip>
					<Tooltip label={'Bootstrap'} shouldWrapChildren>
						<Icon as={BsBootstrapFill} aria-label="Bootstrap logo"
							display={'block'}
							role='presentation'
							boxSize={8}
							m={{ base: '2' }} />
					</Tooltip>
					<Tooltip label={'Node.js'} shouldWrapChildren>
						<Icon as={IoLogoNodejs} aria-label="Node.js logo"
							display={'block'}
							role='presentation'
							boxSize={8}
							m={{ base: '2' }} />
					</Tooltip>
					<Tooltip label={'React'} shouldWrapChildren>
						<Icon as={IoLogoReact} aria-label="React logo"
							display={'block'}
							role='presentation'
							boxSize={8}
							m={{ base: '2' }} />
					</Tooltip>
				</Flex>
			</VStack>
		</Flex>
	);
};

export default About;
