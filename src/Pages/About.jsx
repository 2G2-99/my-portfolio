import {
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Container,
	Flex,
	Heading,
	VStack,
	HStack,
	Image,
	Text,
	Tooltip,
	Spacer,
} from '@chakra-ui/react';

import {
	html_5_logo,
	css_logo,
	js_logo,
	bootstrap_logo,
	nodejs_logo,
	react_logo,
	selfie,
} from '../assets/export';

const About = () => {
	return (
		<Flex direction={'column'} justify={'space-evenly'} align={'center'}>
			<Container maxW={'container.xl'}>
				<Card id="about-card">
					<CardHeader>
						<Image id="selfie" alt="That's me" src={selfie} fit={'contain'} />
					</CardHeader>
					<CardBody>
						<Text className="card-text">
							<Text as={'span'} id="greeting">
								Hello again!{' '}
							</Text>
							I am part of that generation that started to have access to
							internet and not only a computer but different devices (of which,
							several went to the technician.), and there has been a huge gap
							between use and knowledge about technology.
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
					</CardBody>
					<CardFooter>
						<Box
							as="button"
							href="https://drive.google.com/file/d/1k5YBTciucnt3N5Dxceq2FNJp9iv7Y21l/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</Box>
					</CardFooter>
				</Card>
			</Container>
			<VStack id="display-skills">
				<Heading as={'h3'}>Skills</Heading>
				<Text>I'm well experienced in this technologies...</Text>
				<Flex id="skills-set" wrap={'wrap'} justify={'center'}>
					<Tooltip label={'HTML 5'}>
						<Image
							src={html_5_logo}
							alt="HTML5 logo"
							h={{ base: '3rem' }}
							margin={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'CSS3'}>
						<Image
							src={css_logo}
							alt="CSS logo"
							h={{ base: '3rem' }}
							margin={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'JavaScript'}>
						<Image
							src={js_logo}
							alt="JavaScript logo"
							h={{ base: '3rem' }}
							margin={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'Bootstrap'}>
						<Image
							src={bootstrap_logo}
							alt="Bootstrap logo"
							h={{ base: '3rem' }}
							margin={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'Node.js'}>
						<Image
							src={nodejs_logo}
							alt="Node.js logo"
							h={{ base: '3rem' }}
							margin={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'React'}>
						<Image
							src={react_logo}
							alt="React logo"
							h={{ base: '3rem' }}
							margin={{ base: '2' }}
						/>
					</Tooltip>
				</Flex>
			</VStack>
		</Flex>
	);
};

export default About;
