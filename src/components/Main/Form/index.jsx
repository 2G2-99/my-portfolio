import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useState } from 'react';

const Form = () => {
	// ? Use STATE
	// const [email, setEmail] = useState('');
	// const [subject, setSubject] = useState('');
	// const [message, setMessage] = useState('');

	// const handleEmail = e => {
	// 	setEmail(e.target.value);
	// };
	// const handleSubject = e => {
	// 	setSubject(e.target.value);
	// };
	// const handleMessage = e => {
	// 	setMessage(e.target.value);
	// };
	// const handleSubmit = e => {
	// 	e.preventDefault();
	// };

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			messageSubject: '',
			message: '',
		},

		validationSchema: Yup.object({
			name: Yup.string()
				.required('Please, enter your name')
				.min(2, 'The shortest name in the world has 2 characters'),
			email: Yup.string()
				.email('Please enter a valid email')
				.required('Please, enter your email'),
			message: Yup.string()
				.required(`Don't forget your message`)
				.min(2, `Don't be shy`),
		}),

		onSubmit: (values, actions) => {
			alert(JSON.stringify(values, null, 2));
			actions.resetForm();
		},
	});

	return (
		<VStack as={'form'} onSubmit={formik.handleSubmit}>
			<FormControl
				isRequired
				isInvalid={formik.errors.name && formik.touched.name}
			>
				<FormLabel>Name</FormLabel>
				<Input
					variant={'filled'}
					name="name"
					placeholder="Santiago Gomez"
					{...formik.getFieldProps('name')}
				/>
				<FormErrorMessage>{formik.errors.name}</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={formik.errors.email && formik.touched.email}
			>
				<FormLabel>Email</FormLabel>
				<Input
					variant={'filled'}
					name="email"
					placeholder="sagos0919@gmail.com"
					{...formik.getFieldProps('email')}
				/>
				<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
			</FormControl>

			<FormControl>
				<FormLabel>Subject</FormLabel>
				<Input
					variant={'filled'}
					name="messageSubject"
					placeholder="Greeting"
				/>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={formik.errors.message && formik.touched.message}
			>
				<FormLabel>Message</FormLabel>
				<Textarea
					variant={'filled'}
					name="message"
					value={formik.values.message}
					{...formik.getFieldProps('message')}
				/>
				<FormErrorMessage>{formik.errors.message}</FormErrorMessage>
			</FormControl>

			<Button type="submit">submit</Button>
		</VStack>
	);
};

export default Form;
