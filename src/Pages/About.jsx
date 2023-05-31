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
	IoLogoNodejs,
	IoLogoHtml5,
} from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { BsBootstrapFill } from 'react-icons/bs';
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
					image={'/images/me.jpeg'}
					text={
						<>
							<Text className="card-text">
								As a Junior Front-End Developer, I have a solid understanding of
								HTML, CSS, and Javascript. But I'm always looking for ways to
								improve my skills and knowledge. So, I joined a bootcamp program
								where I was able to deepen my understanding of the fundamentals
								and work with a team using different libraries and frameworks.
								My ultimate goal is to create visually appealing and responsive
								websites with efficient and effective code. I know the industry
								is constantly changing, and I'm excited to stay up-to-date with
								the latest technologies.
							</Text>
						</>
					}
					resume={
						'https://drive.google.com/file/d/1nA0VF23Q0BkiqtmtNfKUoyccICE2Zxzu/view?usp=sharing'
					}
					button={'Resume'}
				/>
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
						<Icon
							as={IoLogoHtml5}
							aria-label="HTML5 logo"
							display={'block'}
							role="presentation"
							boxSize={8}
							m={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'CSS3'} shouldWrapChildren>
						<Icon
							as={IoLogoCss3}
							aria-label="CSS3 logo"
							display={'block'}
							role="presentation"
							boxSize={8}
							m={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'JavaScript'} shouldWrapChildren>
						<Icon
							as={IoLogoJavascript}
							aria-label="JavaScript logo"
							display={'block'}
							role="presentation"
							boxSize={8}
							m={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'Bootstrap'} shouldWrapChildren>
						<Icon
							as={BsBootstrapFill}
							aria-label="Bootstrap logo"
							display={'block'}
							role="presentation"
							boxSize={8}
							m={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'Node.js'} shouldWrapChildren>
						<Icon
							as={IoLogoNodejs}
							aria-label="Node.js logo"
							display={'block'}
							role="presentation"
							boxSize={8}
							m={{ base: '2' }}
						/>
					</Tooltip>
					<Tooltip label={'React'} shouldWrapChildren>
						<Icon
							as={IoLogoReact}
							aria-label="React logo"
							display={'block'}
							role="presentation"
							boxSize={8}
							m={{ base: '2' }}
						/>
					</Tooltip>
				</Flex>
			</VStack>
		</Flex>
	);
};

export default About;
