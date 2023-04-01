import { Box, Link, useStyleConfig } from '@chakra-ui/react';

const CustomButton = ({ linkTo, buttonContent, size, variant }) => {
	const styles = useStyleConfig('customButtonStyles', { size, variant });

	return (
		<Link href={linkTo} isExternal>
			<Box as="button" __css={styles}>
				{buttonContent}
			</Box>
		</Link>
	);
};

export default CustomButton;
