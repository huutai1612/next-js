import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = (props) => {
	const handleAddMeetup = (meetup) => {
		console.log(meetup);
	};

	return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
