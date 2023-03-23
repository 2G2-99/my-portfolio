export const buttonStyles = {
	baseStyle: {},
	sizes: {},
	variants: {
		navLink: props => ({
			fontSize: 'lg',

			bg: 'primary',
			color: 'white',
			_hover: {
				color: 'brand.secondary',
				transform: 'scale(1.125)',
			},
			_active: {
				color: 'brand.highlight',
				textDecoration: 'none',
				transform: 'scale(1)',
			},
		}),
	},
	defaultProps: {},
};
