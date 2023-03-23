import { extendTheme } from '@chakra-ui/react';
import { buttonStyles as Button } from './components/buttonStyles';
import { menuStyles as Menu } from './components/menuStyles';

export const myNewTheme = extendTheme({
	colors: {
		brand: {
			100: '#184E81',
			200: '#56ACE0',
			300: '#FFC10D',
			400: '#FB8500',
			500: '#d00000',
			600: '#80b918',
		},
	},

	fonts: {
		body: `'Josefin Sans', sans-serif`,
		heading: `'Bungee', sans-serif`,
		link: `'bungee-hairline'`,
	},

	components: {
		Button,
		Menu,
	},
});
