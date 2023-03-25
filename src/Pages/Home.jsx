import { Container, Link, Text } from '@chakra-ui/react';
import { Hero } from '../components/export';

const Home = () => {
	return (
		<Container id="home">
			<Hero />
			<Text position={'absolute'} right={'1'} bottom={'0'}>
				Background by: {/* */}
				<Link
					id="attribution-link"
					href="https://svgbackgrounds.com"
					target={'_blank'}
					rel="noreferrer noopener"
				>
					SVGBackgrounds.com
				</Link>
			</Text>
		</Container>
	);
};

export default Home;
