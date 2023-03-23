import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
	// define the part you're going to style
	button: {
		// this will style the MenuButton component
	},
	list: {
		// this will style the MenuList component
		py: '4',
		borderRadius: 'lg',
		border: 'none',
		bg: 'brand.200',
	},
	item: {
		// this will style the MenuItem and MenuItemOption components
		color: 'white',
		bg: 'brand.100',
		_hover: {
			bg: 'brand.250',
		},
		_focus: {
			color: 'brand.100',
			bg: 'brand.250',
		},
	},
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
