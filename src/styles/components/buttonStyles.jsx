export const buttonStyles = {
	baseStyle: {},
	sizes: {},
	variants: {
		navLink: props => ({
			fontSize: 'lg',

			bg: 'primary',
			color: 'white',
			_hover: {
				color: 'brand.300',
				transform: 'scale(1.125)',
			},
			_active: {
				color: 'brand.400',
				textDecoration: 'none',
				transform: 'scale(1)',
			},
		}),
	},
	defaultProps: {},
};
