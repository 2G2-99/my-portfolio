import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';

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
					.required('Please, enter your name')
					.min(2, 'The shortest name in the world has 2 characters'),
				email: Yup.string()
					.email('Please enter a valid email')
					.required('Please, enter your email'),
				messageSubject: Yup.string(),
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
						label={'Subject'}
						as={Input}
						name="messageSubject"
						type="text"
						placeholder="Greeting"
					/>
					<TextField
						label="Message"
						as={Textarea}
						name="message"
						type="text"
						placeholder="Hi!"
					/>

					<Button type="submit">submit</Button>
				</VStack>
			)}
		</Formik>
	);
};

export default Form;
