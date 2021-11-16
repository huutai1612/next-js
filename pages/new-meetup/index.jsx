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

	return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
