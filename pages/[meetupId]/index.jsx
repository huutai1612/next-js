import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = (props) => {
	const router = useRouter();

	return (
		<MeetupDetail
			image={props.meetupData.image}
			description={props.meetupData.description}
			address={props.meetupData.address}
			title={props.meetupData.title}
		/>
	);
};

export const getStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
		],
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const meetUpId = context.params.meetupId;

	return {
		revalidate: 1,
		props: {
			meetupData: {
				id: meetUpId,
				image:
					'https://www.travel688.com/wp-content/uploads/2018/01/San_Francisco_780x520px.jpg',
				title: 'San Francisco',
				address: 'Some address',
				description: 'Some Description',
			},
		},
	};
};

export default MeetupDetailPage;
