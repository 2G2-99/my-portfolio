import { Box, Flex, Icon, Progress, Tooltip } from '@chakra-ui/react';

export default function SkillProgress({
	tooltipText,
	icon,
	iconLabel,
	progressOnSkill,
}) {
	return (
		<Tooltip label={tooltipText} shouldWrapChildren>
			<Flex justify={'center'} align={'center'} wrap={'nowrap'}>
				<Icon
					as={icon}
					aria-label={iconLabel}
					display={'block'}
					role="presentation"
					boxSize={8}
					m={{ base: '2' }}
				/>
				<Box w={'100%'}>
					<Progress value={progressOnSkill} size={{ base: 'sm', md: 'md' }} />
				</Box>
			</Flex>
		</Tooltip>
	);
}
