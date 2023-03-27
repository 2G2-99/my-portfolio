import { Box, Container, Image, SimpleGrid, Tooltip } from '@chakra-ui/react';
import Display from '../components/Main/Card/Display';

import listOfProjects from '../data/listOfProjects.json';

const Projects = () => {
	return (
		<Container maxW={'container.xl'} py={'1rem'}>
			<SimpleGrid columns={{ base: '1', sm: '2', md: '3' }} spacing={'1.5rem'}>
				{listOfProjects.map(project => {
					return (
						<Display
							key={project.id}
							title={project.title}
							picture={`${project.picture}`}
							description={project.description}
							technologies={project.technologies.map(technology => {
								return technology ? (
									<Box key={technology.id} className="technology">
										<Tooltip label={`${technology.technology}`}>
											<Image
												className="tech-icon"
												src={`${technology.path}`}
												alt={`Logo of ${technology.technology}`}
											/>
										</Tooltip>
									</Box>
								) : null;
							})}
							repository={project.repository}
							deployed={project.deployed}
						/>
					);
				})}
			</SimpleGrid>
		</Container>
	);
};

export default Projects;
