import {
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoHtml5,
} from 'react-icons/io';
import { BsGit, BsBootstrapFill } from 'react-icons/bs';
import { SiJquery } from 'react-icons/si';

const listOfProjects = [
	{
		id: '01',
		title: 'Password Generator',
		picture: '../images/password_generator.png',
		description:
			'An easy tool to generate random passwords with the parameters given by the user through a series of prompts.',
		technologies: [
			{
				id: '01',
				technology: 'JavaScript',
				icon: IoLogoJavascript,
			},
		],
		repository: 'https://github.com/2G2-99/password-generator',
		deployed: 'https://2g2-99.github.io/password-generator/',
	},

	{
		id: '02',
		title: 'README file generator',
		picture: '../images/markdown_generator.png',
		description:
			'An application on the CLI with the intention to help the developers save time when creating a quality README, by entering information about the project and then generating a markdown with a template.',
		technologies: [
			{
				id: '01',
				technology: 'JavaScript',
				icon: IoLogoJavascript,
			},
			{
				id: '02',
				technology: 'Git',
				icon: BsGit,
			},
			{
				id: '03',
				technology: 'Node.js',
				icon: IoLogoNodejs,
			},
		],
		repository: 'https://github.com/2G2-99/README-generator',
		deployed: '',
	},
	{
		id: '03',
		title: 'Weather Dashboard',
		picture: '../images/weather_dashboard.png',
		description:
			'Basic application that shows the forecast information of a given location of the current day and the next 4 days. It also keeps track of the searched locations using the local storage for an easy access.',
		technologies: [
			{
				id: '01',
				technology: 'Bootstrap',
				icon: BsBootstrapFill,
			},
			{
				id: '02',
				technology: 'CSS 3',
				icon: IoLogoCss3,
			},
			{
				id: '03',
				technology: 'JavaScript',
				icon: IoLogoJavascript,
			},
			{
				id: '04',
				technology: 'JQuery',
				icon: SiJquery,
			},
		],
		repository: 'https://github.com/2G2-99/weather-dashboard',
		deployed: 'https://2g2-99.github.io/weather-dashboard/',
	},
	{
		id: '04',
		title: 'Team Profile',
		picture: '../images/team_builder.png',
		description:
			'An inquirer application that generates a web page rendering cards with the gathered information from a manager and the development team.',
		technologies: [
			{
				id: '01',
				technology: 'Bootstrap',
				icon: BsBootstrapFill,
			},
			{
				id: '02',
				technology: 'JavaScript',
				icon: IoLogoJavascript,
			},
			{
				id: '03',
				technology: 'Git',
				icon: BsGit,
			},
			{
				id: '04',
				technology: 'Node.js',
				icon: IoLogoNodejs,
			},
		],
		repository: 'https://github.com/2G2-99/team-profile-app',
		deployed: '',
	},
	{
		id: '05',
		title: 'Day Scheduler',
		picture: '../images/scheduler.png',
		description:
			'Schedule app to organise the day of a busy developer using the local storage. In this application I focused on the implementation of local storage while working with the current time to verify if the task is overdue, ongoing, or ahead on time.',
		technologies: [
			{
				id: '01',
				technology: 'JavaScript',
				icon: IoLogoJavascript,
			},
			{
				id: '02',
				technology: 'JQuery',
				icon: SiJquery,
			},
		],
		repository: 'https://github.com/2G2-99/day-scheduler-challenge',
		deployed: 'https://2g2-99.github.io/day-scheduler-challenge/',
	},
	{
		id: '06',
		title: 'Bucket List',
		picture: '../images/bucket_list.png',
		description:
			'A website developed in a team, where I was given the task to carry with part of the back end, more exactly processing information by a query request of a certain location and work with the Google Geocoding API to convert a location name into coordinates to be used on the Google Maps API, and the dynamically render a map centred at the searched place.',
		technologies: [
			{
				id: '01',
				technology: 'HTML5',
				icon: IoLogoHtml5,
			},
			{
				id: '02',
				technology: 'Bootstrap',
				icon: BsBootstrapFill,
			},
			{
				id: '03',
				technology: 'JavaScript',
				icon: IoLogoJavascript,
			},
			{
				id: '04',
				technology: 'JQuery',
				icon: SiJquery,
			},
		],
		repository: 'https://github.com/h-fikri/Travel-List-Jan2023',
		deployed: 'https://h-fikri.github.io/Travel-List-Jan2023/',
	},
];
export default listOfProjects;
