import MeetupList from '../components/meetups/MeetupList';

const DUMMY_LIST = [
	{
		id: 'm1',
		image:
			'https://www.travel688.com/wp-content/uploads/2018/01/San_Francisco_780x520px.jpg',
		title: 'San Francisco',
		address: 'Some address',
	},
];

const HomePage = (props) => {
	return <MeetupList meetups={DUMMY_LIST} />;
};

export default HomePage;
