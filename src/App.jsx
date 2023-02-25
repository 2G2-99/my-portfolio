import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import { Home, About, Projects, Contact } from './pages/export';

function App() {
	return (
		<Router>
			<Box id="root-body" h="100vh">
				<Navbar />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Box>
		</Router>
	);
}

export default App;
