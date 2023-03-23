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
} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
	const isDesktop = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box as="nav" boxShadow="sm" bg={'brand.primary'}>
			<Container
				py={{
					base: '4',
					lg: '5',
				}}
				maxW="full"
			>
				<HStack spacing="10" justify="space-between">
					<Text
						as="span"
						fontSize={{ base: '1.25rem', sm: '1.75rem', md: '2.5rem' }}
						fontFamily={'Bungee'}
					>
						Santiago Gomez
					</Text>
					{isDesktop ? (
						<Flex justify="space-between">
							<ButtonGroup variant="navLink" spacing="8" fontFamily={'Bungee'}>
								{['Home', 'About', 'Projects', 'Contact'].map(item => (
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
							<Menu placement="bottom-start">
								<MenuButton
									as={IconButton}
									aria-label="Open Menu"
									variant="ghost"
									icon={<FiMenu />}
									fontSize="1.5rem"
								/>
								<MenuList>
									{['Home', 'About', 'Projects', 'Contact'].map(item => (
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
		</Box>
	);
};

export default Navbar;
