import { extendTheme } from '@chakra-ui/react';
import { buttonStyles as Button } from './components/buttonStyles';

export const myNewTheme = extendTheme({
	colors: {
		brand: {
			primary: '#184E81',
			lightPrimary: '#56ACE0',
			secondary: '#FFC10D',
			highlight: '#FB8500',
			wrong: '#d00000',
			correct: '#80b918',
		},
	},

	fonts: {
		body: `'Josefin Sans', sans-serif`,
		heading: `'Bungee', sans-serif`,
		link: `'bungee-hairline'`,
	},

	components: {
		Button,
	},
});
