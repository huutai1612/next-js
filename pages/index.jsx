import MeetupList from '../components/meetups/MeetupList';
const HomePage = (props) => {
	console.log(props);
	return <MeetupList meetups={props.meetups} />;
};

/* // this is the server side rendering method of next js
export async function getServerSideProps(context) {
	const req = context.req;
	const res = context.res;

	return {
		props: {
			meetups: DUMMY_LIST,
		},
	};
} */

// this is the static site generation method of next js
export const getStaticProps = async (context) => {
	// In here we can fetching any data
	// And after fetching data we can pass it to this component via props
	// But we can only use this method to approach to static site rendering of next only in this pages folder
	// Example :fetching some data and this fetch need await the data to return
	// This function must return an object have key props
	// And this props must be an object. This object will pass data into component via props

	// const client = await MongoClient.connect(
	// 	'mongodb+srv://huutai1612:Kieutrang0711@cluster0.rdo2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	// );
	// const db = client.db();
	// const meetupsCollection = db.collection('meetups');
	// const meetups = await meetupsCollection.find().toArray();

	// client.close();

	const response = await fetch('http://localhost:3000/api/meetups');
	const data = await response.json();

	return {
		props: {
			meetups: data,
		},
		// revalidate will help us update data to the latest state
		revalidate: 1,
	};
};

export default HomePage;
