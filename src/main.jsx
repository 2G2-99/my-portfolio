import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

import App from './App';
import { myNewTheme } from './styles/theme';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={myNewTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);

//  TODO: Add a nice button to the display card for the external links
