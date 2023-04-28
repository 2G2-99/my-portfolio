import { ButtonGroup, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';

const ContactCard = () => {
	const generateButtonOf = (site, icon, iconSize) => {
		console.log(site);

		return site ? (
			<Link href={site} isExternal={true}>
				<Icon as={icon} display={'block'} boxSize={iconSize} />
			</Link>
		) : null;
	};

	return (
		<>
			<Flex direction={'column'} gap={2}>
				<Heading as={'h2'}>Hello there!</Heading>
				<Text textAlign={'match-parent'}>
					Feel free to send me a message to get in touch, or if you rather look
					around, here are another links to reach me.
				</Text>
				<ButtonGroup spacing={2}>
					{generateButtonOf(
						'https://www.linkedin.com/in/santiago-gomez-837297215/',
						BsLinkedin,
						6
					)}
					{generateButtonOf('https://github.com/2G2-99', AiFillGithub, 6)}
					{generateButtonOf('mailto:sagos0919@gmail.com', IoIosMail, 6)}
				</ButtonGroup>
			</Flex>
		</>
	);
};

export default ContactCard;
