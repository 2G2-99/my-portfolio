import { defineStyleConfig } from '@chakra-ui/react';

const customButtonStyles = defineStyleConfig({
	baseStyle: {
		letterSpacing: '.125em',
		fontFamily: 'heading',
		background: 'brand.300',
		rounded: 'md',
		p: '1',
	},
	sizes: {
		xs: {
			fontSize: '',
		},
		sm: {
			fontSize: '0.75rem',
			px: 2,
			py: 1,
		},
		md: {
			fontSize: '0.875rem',
			px: 3,
			py: 2,
		},
	},
	variants: {
		'outline.400': {
			background: 'transparent',
			border: '2px solid',
			borderColor: 'brand.400',
			color: 'brand.400',
			boxShadow: 'inner',
			_hover: {
				boxShadow: 'sm',
				transform: 'scale(1.02)',
				transition: '.025s',
				background: 'brand.450',
			},
		},
	},
	defaultProps: {
		size: 'md',
		colorScheme: 'gray',
	},
});

export default customButtonStyles;
