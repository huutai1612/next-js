import { useRouter } from 'next/router';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { Fragment } from 'react';

const MeetupDetailPage = (props) => {
	const router = useRouter();

	return (
		<Fragment>
			<Head>
				<title>{props.meetupData.title}</title>
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				description={props.meetupData.description}
				address={props.meetupData.address}
				title={props.meetupData.title}
			/>
		</Fragment>
	);
};

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://huutai1612:Kieutrang0711@cluster0.rdo2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetupIdList = await meetupsCollection.find({}, { _id: 1 }).toArray();
	client.close();

	return {
		paths: meetupIdList.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		'mongodb+srv://huutai1612:Kieutrang0711@cluster0.rdo2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetupDetail = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});

	return {
		revalidate: 1,
		props: {
			meetupData: {
				id: meetupDetail._id.toString(),
				title: meetupDetail.title,
				address: meetupDetail.address,
				description: meetupDetail.description,
				image: meetupDetail.image,
			},
		},
	};
};

export default MeetupDetailPage;
