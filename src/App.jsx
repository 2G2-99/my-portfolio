import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/export';

import { Home, About, Projects, Contact } from './pages/export';

function App() {
	return (
		<Router>
			<Box id="root-body" h="100vh">
				<Navbar />
				<Container as="main" h={'90%'} maxW={'full'}>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Container>
			</Box>
		</Router>
	);
}

export default App;
