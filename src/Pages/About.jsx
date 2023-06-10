import { Container, Flex, Heading, Text } from '@chakra-ui/react';

import { BsBootstrapFill } from 'react-icons/bs';
import {
	SiChakraui,
	SiJavascript,
	SiNodedotjs,
	SiReact,
	SiHtml5,
	SiCss3,
} from 'react-icons/si';
import Info from '../components/Main/Card/Info';
import SkillProgress from '../components/Main/SkillProgress';

export default function About() {
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
			<Container mt={6}>
				<Flex
					id="display-skills"
					w={'100%'}
					direction={'column'}
					justify={'center'}
					borderRadius={'md'}
					backdropFilter="auto"
					backdropContrast={'60%'}
					boxShadow={'inner'}
				>
					<Heading as={'h3'} mt={2} textAlign={'center'}>
						Skills
					</Heading>
					<Text textAlign={'center'}>
						Here is my stack of most used technologies.
					</Text>
					<SkillProgress
						tooltipText={'HTML5'}
						icon={SiHtml5}
						iconLabel={'HTML5 logo'}
						progressOnSkill={90}
					/>
					<SkillProgress
						tooltipText={'CSS3'}
						icon={SiCss3}
						iconLabel={'CSS3 logo'}
						progressOnSkill={80}
					/>
					<SkillProgress
						tooltipText={'JavaScript'}
						icon={SiJavascript}
						iconLabel={'JavaScript logo'}
						progressOnSkill={80}
					/>
					<SkillProgress
						tooltipText={'Bootstrap 4'}
						icon={BsBootstrapFill}
						iconLabel={'Bootstrap 4 logo'}
						progressOnSkill={60}
					/>
					<SkillProgress
						tooltipText={'Chakra UI'}
						icon={SiChakraui}
						iconLabel={'Chakra UI logo'}
						progressOnSkill={90}
					/>
					<SkillProgress
						tooltipText={'Node.js'}
						icon={SiNodedotjs}
						iconLabel={'Node.js logo'}
						progressOnSkill={40}
					/>
					<SkillProgress
						tooltipText={'React'}
						icon={SiReact}
						iconLabel={'React logo'}
						progressOnSkill={70}
					/>
				</Flex>
			</Container>
		</Flex>
	);
}
