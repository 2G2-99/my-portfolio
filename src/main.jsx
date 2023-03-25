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

//  TODO: Fix height of main, so it covers the total of the screen (except the header 10%)
