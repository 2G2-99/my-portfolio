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

export const Navbar = () => {
	const isDesktop = useBreakpointValue({
		base: false,
		lg: true,
	});
	return (
		<Box as="header" h={'10%'}>
			<Box as="nav" bg="bg-surface" boxShadow="sm">
				<Container
					py={{
						base: '4',
						lg: '5',
					}}
					maxW="full"
				>
					<HStack spacing="10" justify="space-between">
						<Text as="span">Santiago Gomez</Text>
						{isDesktop ? (
							<Flex justify="space-between" flex="1">
								<ButtonGroup variant="link" spacing="8">
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
												to={item.toLowerCase()}
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
		</Box>
	);
};

export default Navbar;
