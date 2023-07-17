import React from 'react';
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';

export default function FramedModal({
	showModalButtonText,
	modalHeader,
	modalBody,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button
				p={0}
				bg={'brand.900'}
				onClick={onOpen}
				borderRadius={{ base: 'none', md: 'base' }}
			>
				{showModalButtonText}
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				motionPreset="slideInBottom"
				size={{ base: 'sm', md: '4xl' }}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader borderBottom={'2px'} color={'brand.100'}>
						{modalHeader}
					</ModalHeader>
					{/* <ModalCloseButton /> */}
					<ModalBody>{modalBody}</ModalBody>
					<ModalFooter>
						<Button
							variant="ghost"
							mr={3}
							onClick={onClose}
							_hover={{ bg: 'brand.250', color: 'brand.100' }}
						>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
