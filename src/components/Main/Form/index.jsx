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

const Form = () => {
	return (
		<Formik
			initialValues={{
				username: '',
				email: '',
				messageSubject: '',
				message: '',
			}}
			validationSchema={Yup.object({
				username: Yup.string()
					.required('Please, enter your username')
					.min(2, 'The shortest username in the world has 2 characters'),
				email: Yup.string()
					.email('Please enter a valid email')
					.required('Please, enter your email'),
				message: Yup.string()
					.required(`Don't forget your message`)
					.min(3, `Don't be shy and at least say Hi!`),
			})}
			onSubmit={(values, actions) => {
				alert(JSON.stringify(values, null, 2));
				actions.resetForm();
			}}
		>
			{formik => (
				<VStack as={'form'} onSubmit={formik.handleSubmit}>
					<FormControl
						isRequired
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

					<FormControl
						isRequired
						isInvalid={formik.errors.email && formik.touched.email}
					>
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

					<FormControl>
						<FormLabel>Subject</FormLabel>
						<Field
							as={Input}
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
				</VStack>
			)}
		</Formik>
	);
};

export default Form;
