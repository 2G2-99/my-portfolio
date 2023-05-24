import { Box, Center } from '@chakra-ui/react';
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
			<Box
				as="header"
				h={'10vh'}
				color={'white'}
			>
				<Navbar />
			</Box>
			<Center
				as="main"
				minH={'90vh'}
				maxW={'full'}
				bgImage={'url(/svg/liquid-cheese.svg)'}
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				bgPosition={'center'}
			>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/projects"
						element={<Projects />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Routes>
			</Center>
		</Router>
	);
}

export default App;
