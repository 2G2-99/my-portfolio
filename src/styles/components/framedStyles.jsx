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
			rounded: 'sm',
			objectFit: 'cover',
		},
	},
	// The size styles for each part
	sizes: {
		sm: {
			frame: {
				margin: '0',
			},
			image: {
				margin: '0',
			},
		},
	},
	// The variant styles for each part
	variants: {
		selfie: {
			frame: {
				borderRight: 'thick solid',
				borderBottom: 'thick  solid',
				borderColor: 'brand.400',
				rounded: 'lg',
				margin: '1rem auto',
				boxShadow: 'base',
			},
			image: {
				margin: 'auto',
				rounded: 'md',
				marginRight: '.25em',
				marginBottom: '.25em',
				boxShadow: 'md',
				boxSize: 'xs',
			},
		},
		display: {
			frame: {},
			image: {
				boxShadow: 'md',
			},
		},
	},
	// The default `size` or `variant` values
	defaultProps: {},
});

export default framedStyles;
