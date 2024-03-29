import { Container, Icon, SimpleGrid, Tooltip } from '@chakra-ui/react';
import Display from '../components/Main/Card/Display';

import listOfProjects from '../data/listOfProjects.js';

const Projects = () => {
	return (
		<Container maxW={'container.xl'} py={4}>
			<SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={'1.5rem'}>
				{listOfProjects.map((project) => {
					return (
						<Display
							key={project.id}
							title={project.title}
							picture={`${project.picture}`}
							description={project.description}
							technologies={project.technologies.map((technology) => {
								return technology ? (
									<Tooltip
										key={technology.id}
										className="technology"
										label={`${technology.technology}`}
										shouldWrapChildren
									>
										<Icon
											as={technology.icon}
											display={'block'}
											role="presentation"
											boxSize={{ base: 6, md: 8 }}
											mx={{ base: 0.5, md: 1.5, lg: 2 }}
										/>
									</Tooltip>
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
