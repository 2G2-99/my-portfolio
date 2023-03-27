import { Center, Image, useMultiStyleConfig } from '@chakra-ui/react';

const Framed = ({ id, image, size }) => {
	const styles = useMultiStyleConfig('framedStyles', { size });

	return (
		<Center __css={styles.frame}>
			<Image id={id ? id : undefined} src={image} __css={styles.image} />
		</Center>
	);
};

export default Framed;
