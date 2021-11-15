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
	return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
	// In here we can fetching any data
	// And after fetching data we can pass it to this component via props
	// But we can only use this method to approach to static site rendering of next only in this pages folder
	// Example :fetching some data and this fetch need await the data to return
	// This function must return an object have key props
	// And this props must be an object. This object will pass data into component via props
	return {
		props: {
			meetups: DUMMY_LIST,
		},
	};
}

export default HomePage;
