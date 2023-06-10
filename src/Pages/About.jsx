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
import SkillProgress from '../components/Main/SkillProgress';

const About = () => {
	return (
		<Flex
			py={4}
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
						'https://drive.google.com/file/d/1UUgXIvDEwrmKPSQ2T1jJWpljLJeTf8tV/view?usp=sharing'
					}
					button={'Resume'}
				/>
			</Container>
			<Container my={'10'} px={'2'}>
				<VStack
					id="display-skills"
					borderRadius={'md'}
					backdropFilter="auto"
					backdropContrast={'70%'}
					boxShadow={'inner'}
				>
					<Heading as={'h3'} mt={2}>
						Skills
					</Heading>
					<Text>I'm well experienced in this technologies...</Text>
					<Flex id="skills-set" wrap={'wrap'} justify={'center'}>
						<SkillProgress
							tooltipText={'HTML5'}
							icon={IoLogoHtml5}
							iconLabel={'HTML5 logo'}
							progressOnSkill={80}
						/>
						<SkillProgress
							tooltipText={'CSS3'}
							icon={IoLogoCss3}
							iconLabel={'CSS3 logo'}
							progressOnSkill={50}
						/>
						<SkillProgress
							tooltipText={'JavaScript'}
							icon={IoLogoJavascript}
							iconLabel={'JavaScript logo'}
						/>
						<SkillProgress
							tooltipText={'Bootstrap'}
							icon={BsBootstrapFill}
							iconLabel={'Bootstrap logo'}
						/>
						<SkillProgress
							tooltipText={'Node.js'}
							icon={IoLogoNodejs}
							iconLabel={'Node.js logo'}
						/>
						<SkillProgress
							tooltipText={'React'}
							icon={IoLogoReact}
							iconLabel={'React logo'}
						/>
					</Flex>
				</VStack>
			</Container>
		</Flex>
	);
};

export default About;
