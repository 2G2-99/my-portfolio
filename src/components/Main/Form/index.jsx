import React, { useState } from 'react';
import { Button, Input, Textarea, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';

// Validation with Yup
const formSchema = Yup.object().shape({
	username: Yup.string()
		.required('Please, enter your name')
		.min(2, 'The shortest name in the world has 2 characters'),
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please, enter your email'),
	messageSubject: Yup.string(),
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
					"Thanks for your message! We'll be in touch soon."
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
			{({ isSubmitting }) => (
				<VStack as={'form'}>
					<TextField
						label={'Name'}
						as={Input}
						name="username"
						type="text"
						placeholder="Someone"
					/>
					<TextField
						label={'Email'}
						as={Input}
						name="email"
						type="email"
						placeholder="random@email.com"
					/>
					<TextField
						label="Message"
						as={Textarea}
						name="message"
						type="text"
						placeholder="Hi!"
					/>

					<Button type="submit" disabled={isSubmitting}>
						submit
					</Button>
					{serverState && (
						<p className={!serverState.ok ? 'errorMsg' : ''}>
							{serverState.msg}
						</p>
					)}
				</VStack>
			)}
		</Formik>
	);
};

export default Form;
