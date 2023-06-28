import { Container, Flex, Heading, Text, HStack } from '@chakra-ui/react';
import {
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoHtml5,
} from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiChakraui, SiFigma } from 'react-icons/si';
import Info from '../components/Main/Card/Info';
import SkillIcon from '../components/Main/SkillIcon';
import listOfSkills from '../data/listOfSkills.json';

export default function About() {
	const listOfIcons = {
		IoLogoCss3,
		IoLogoJavascript,
		IoLogoNodejs,
		IoLogoHtml5,
		IoLogoReact,
		BsBootstrapFill,
		SiChakraui,
		SiFigma,
	};

	const getSkillInfo = (skill) => {
		const IconComponent = listOfIcons[skill.icon];
		return (
			<SkillIcon
				key={skill.id}
				tooltipText={skill.tooltipText}
				icon={IconComponent}
				iconLabel={skill.iconLabel}
			/>
		);
	};

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
						<Text className="card-text">
							As a Junior Front-End Developer, I have a solid understanding of
							HTML, CSS, and Javascript. But I'm always looking for ways to
							improve my skills and knowledge. So, I joined a bootcamp program
							where I was able to deepen my understanding of the fundamentals
							and work with a team using different libraries and frameworks. My
							ultimate goal is to create visually appealing and responsive
							websites with efficient and effective code. I know the industry is
							constantly changing, and I'm excited to stay up-to-date with the
							latest technologies.
						</Text>
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
					<HStack justify={'center'} spacing={0.5} wrap={'wrap'} mt={2}>
						{listOfSkills.map(getSkillInfo)}
					</HStack>
				</Flex>
			</Container>
		</Flex>
	);
}
