import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	Spacer,
	Heading,
	useBreakpointValue,
} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

export const Navbar = () => {
	// Check on viewport for breakpoint
	const isDesktop = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box
			as="section"
			pb={{
				base: '12',
				md: '24',
			}}
		>
			<Box
				as="nav"
				bg="bg-surface"
				boxShadow="sm"
				py={{
					base: '4',
					lg: '5',
				}}
			>
				<Flex justify="space-between">
					{isDesktop ? (
						<>
							<Flex justify="space-between" flex="1">
								<Heading as="h1">Santiago Gomez</Heading>
								<Spacer />
								<ButtonGroup variant="link" spacing="8">
									{['Home', 'About', 'Projects', 'Contact'].map(item => (
										<Button
											as={RouterLink}
											to={item.toLowerCase()}
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
						</>
					) : (
						<Flex justify="center" flex="1" wrap={'wrap'}>
							<Heading as="h1">Santiago Gomez</Heading>
							<ButtonGroup variant="link" spacing="8">
								{['Home', 'About', 'Projects', 'Contact'].map(item => (
									<Button
										as={RouterLink}
										to={item.toLowerCase()}
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
					)}
				</Flex>
			</Box>
		</Box>
	);
};

export default Navbar;

/**
 * {isDesktop ? (
							<Flex justify="space-between" flex="1">
								<ButtonGroup variant="link" spacing="8">
									{['Home', 'About', 'Projects', 'Contact'].map(item => (
										<Button
											as={RouterLink}
											to={item.toLowerCase()}
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
							<Flex justify="center" flex="1" wrap={'wrap'}>
								<Heading as="h1">Santiago Gomez</Heading>
								<ButtonGroup variant="link" spacing="8">
									{['Home', 'About', 'Projects', 'Contact'].map(item => (
										<Button
											as={RouterLink}
											to={item.toLowerCase()}
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
						)}
 */
