import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
} from '@chakra-ui/form-control';
import { Field, useField } from 'formik';

const TextField = ({ label, formField, helpMessage, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel>{label}</FormLabel>
			{/* Replace the chakra UI "Input" component for the formik "Field" component */}
			<Field
				as={formField}
				variant={'filled'}
				// To replace "getFieldProps" we use "...field" and "...props"
				{...field}
				{...props}
			/>
			<FormHelperText>{helpMessage}</FormHelperText>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};
export default TextField;
