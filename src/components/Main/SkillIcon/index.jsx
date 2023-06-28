import { Flex, Icon, Tooltip } from '@chakra-ui/react';

export default function SkillIcon({ tooltipText, icon, iconLabel }) {
	return (
		<Flex justify={'center'} align={'center'} wrap={'nowrap'}>
			<Tooltip label={tooltipText} shouldWrapChildren>
				<Icon
					as={icon}
					aria-label={iconLabel}
					display={'block'}
					role="presentation"
					boxSize={8}
					m={{ base: '2' }}
				/>
			</Tooltip>
		</Flex>
	);
}
