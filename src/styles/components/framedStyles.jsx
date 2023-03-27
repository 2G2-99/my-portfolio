import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['frame', 'image']);

const framedStyles = helpers.defineMultiStyleConfig({
	// The base styles for each part
	baseStyle: {
		frame: {
			width: 'fit-content',
			margin: 'auto',
		},
		image: {
			objectFit: 'cover',
			boxSize: 'xs',
			margin: 'auto',
			borderTopRadius: 'md',
			boxShadow: 'md',
		},
	},
	// The size styles for each part
	sizes: {
		sm: {
			frame: {
				borderRight: '3px solid',
				borderBottom: '3px solid',
				borderColor: 'brand.400',
				borderRadius: 'md',
				margin: '1rem auto',
				boxShadow: 'base',
			},
			image: {
				borderRadius: 'md',
				marginRight: '.25em',
				marginBottom: '.25em',
			},
		},
	},
	// The variant styles for each part
	variants: {},
	// The default `size` or `variant` values
	defaultProps: {},
});

export default framedStyles;
