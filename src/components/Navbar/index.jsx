import {
	Box,
	Text,
	Button,
	ButtonGroup,
	Container,
	Flex,
	HStack,
	IconButton,
	useBreakpointValue,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Center,
} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
	const isDesktop = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box as="nav" h={'100%'} boxShadow="sm" bg={'brand.100'}>
			<Center h={'100%'}>
				<Container maxW="full">
					<HStack spacing="10" justify="space-between">
						<Text
							as="span"
							fontSize={{ base: '1.25rem', sm: '1.75rem', md: '2.5rem' }}
							fontFamily={'Bungee'}
							userSelect={'none'}
						>
							Santiago Gomez
						</Text>
						{isDesktop ? (
							<Flex justify="space-between">
								<ButtonGroup
									variant="navLink"
									spacing="8"
									fontFamily={'Bungee'}
								>
									{['Home', 'About', 'Projects', 'Contact'].map((item) => (
										<Button
											as={RouterLink}
											to={item === 'Home' ? '/' : item.toLowerCase()}
											key={item}
											className={({ isActive }) =>
												isActive ? 'nav-link active' : 'nav-link'
											}
										>
											{item}
										</Button>
									))}
								</ButtonGroup>
							</Flex>
						) : (
							<Box>
								<Menu placement="auto-end">
									<MenuButton
										as={IconButton}
										aria-label="Open Menu"
										bg={'transparent'}
										icon={<FiMenu />}
										fontSize={{ base: '1.25rem', sm: '1.75rem' }}
										_hover={{ bg: 'transparent', color: 'brand.300' }}
										_active={{ color: 'brand.400' }}
									/>
									<MenuList>
										{['Home', 'About', 'Projects', 'Contact'].map((item) => (
											<MenuItem
												as={RouterLink}
												to={item === 'Home' ? '/' : item.toLowerCase()}
												key={item}
												className={({ isActive }) =>
													isActive ? 'nav-link active' : 'nav-link'
												}
											>
												{item}
											</MenuItem>
										))}
									</MenuList>
								</Menu>
							</Box>
						)}
					</HStack>
				</Container>
			</Center>
		</Box>
	);
};

export default Navbar;
