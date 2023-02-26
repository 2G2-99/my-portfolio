import { Container, Flex, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import { Hero } from '../components/export';

const Home = () => {
	return (
		<Flex
			id="home"
			wrap={'wrap'}
			direction={'column'}
			justify={'center'}
			position={'relative'}
			h={'100%'}
		>
			<Container>
				<Hero />
			</Container>
			<Text display={'block'} position={'absolute'} right={'0'} bottom={'0'}>
				Background by:
				<Link
					id="attribution-link"
					href="https://svgbackgrounds.com"
					target={'_blank'}
					rel="noreferrer noopener"
				>
					SVGBackgrounds.com
				</Link>
			</Text>
		</Flex>
	);
};

export default Home;
