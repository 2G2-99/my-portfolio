import React, { useState } from 'react';
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Validation with Yup
const formSchema = Yup.object().shape({
	username: Yup.string()
		.required('Please, enter your name')
		.min(2, 'The shortest name in the world has 2 characters'),
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please, enter your email'),
	message: Yup.string()
		.required(`Don't forget your message`)
		.min(3, `Don't be shy and at least say Hi!`),
});

const Form = () => {
	// Server State Handling
	const [serverState, setServerState] = useState();
	const handleServerResponse = (ok, msg) => {
		setServerState({ ok, msg });
	};
	const handleOnSubmit = (values, actions) => {
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/xoqzwbpn',
			data: values,
		})
			.then(response => {
				actions.setSubmitting(false);
				actions.resetForm();
				handleServerResponse(
					true,
					"Thanks for your message! I'll be in touch with you soon."
				);
			})
			.catch(error => {
				actions.setSubmitting(false);
				handleServerResponse(false, error.response.data.error);
			});
	};

	return (
		<Formik
			initialValues={{
				username: '',
				email: '',
				messageSubject: '',
				message: '',
			}}
			validationSchema={formSchema}
			onSubmit={handleOnSubmit}
		>
			{formik => (
				<VStack
					as={'form'}
					onSubmit={formik.handleSubmit}
				>
					<FormControl
						isInvalid={formik.errors.username && formik.touched.username}
					>
						<FormLabel>Name</FormLabel>
						<Field
							as={Input}
							variant={'filled'}
							name="username"
							placeholder="Santiago Gomez"
							// To replace onChange, value and onBlur we use the "getFieldProps" property
							{...formik.getFieldProps('username')}
						/>
						<FormErrorMessage>{formik.errors.username}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={formik.errors.email && formik.touched.email}>
						<FormLabel>Email</FormLabel>
						<Field
							as={Input}
							variant={'filled'}
							name="email"
							placeholder="sagos0919@gmail.com"
							{...formik.getFieldProps('email')}
						/>
						<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
					</FormControl>

					<FormControl
						isInvalid={formik.errors.message && formik.touched.message}
					>
						<FormLabel>Message</FormLabel>
						<Field
							as={Textarea}
							variant={'filled'}
							name="message"
							value={formik.values.message}
							{...formik.getFieldProps('message')}
						/>
						<FormErrorMessage>{formik.errors.message}</FormErrorMessage>
					</FormControl>

					<Button type="submit">submit</Button>
					{serverState && (
						<p className={serverState.ok ? '' : 'errorMsg'}>
							{serverState.msg}
						</p>
					)}
				</VStack>
			)}
		</Formik>
	);
};

export default Form;
