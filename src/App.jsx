import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

// Font
import '@fontsource/josefin-sans';
import '@fontsource/bungee';
import '@fontsource/bungee-hairline';

function App() {
	return (
		<Router>
			<Box id="root-body" h="100vh" fontFamily={'Josefin Sans'}>
				<Box as="header" h={'10%'} color={'white'}>
					<Navbar />
				</Box>
				<Container as="main" h={'90%'} maxW={'full'} bg={'brand.200'}>
					<Routes>
						<Route path="/" element={<Home />} />
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
