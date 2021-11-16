import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = (props) => {
	const handleAddMeetup = async (meetupInfo) => {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(meetupInfo),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const meetup = await response.json();
	};

	return (
		<Fragment>
			<Head>
				<title>New meetup</title>
			</Head>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</Fragment>
	);
};

export default NewMeetupPage;
