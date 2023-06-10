import {
	Box,
	Container,
	Flex,
	Icon,
	Progress,
	Tooltip,
} from '@chakra-ui/react';

export default function SkillProgress({
	tooltipText,
	icon,
	iconLabel,
	progressOnSkill,
}) {
	return (
		<Flex justify={'center'} align={'center'} wrap={'nowrap'}>
			<Tooltip label={tooltipText} placement={'right'} shouldWrapChildren>
				<Icon
					as={icon}
					aria-label={iconLabel}
					display={'block'}
					role="presentation"
					boxSize={8}
					m={{ base: '2' }}
				/>
			</Tooltip>
			<Container>
				<Progress
					value={progressOnSkill}
					colorScheme={'orange'}
					size={'sm'}
					rounded={'sm'}
				/>
			</Container>
		</Flex>
	);
}
