import { Button, Center, Image, useMultiStyleConfig } from '@chakra-ui/react';

export default function Framed({ id, image, size, variant }) {
	const styles = useMultiStyleConfig('framedStyles', { size, variant });

	return (
		<Center id="frame" __css={styles.frame}>
			<Image
				id={id ? id : undefined}
				src={image}
				__css={styles.image}
				loading="lazy"
			/>
		</Center>
	);
}
