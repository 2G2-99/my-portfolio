import { Box, Link } from '@chakra-ui/react';

const CustomButton = ({ linkContent, buttonContent }) => {
	return (
		<Link href={linkContent} target="_blank" rel="noreferrer">
			<Box as="button">{buttonContent}</Box>
		</Link>
	);
};

export default CustomButton;
