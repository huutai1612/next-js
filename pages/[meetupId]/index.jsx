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
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
		],
	};
};

export const getStaticProps = async (context) => {
	const meetupId = context.params.meetupId;
	return {
		props: {
			meetupData: {
				id: meetupId,
				image:
					'https://www.travel688.com/wp-content/uploads/2018/01/San_Francisco_780x520px.jpg',
				description: 'Meet up description',
				address: 'Some address 5, Some City',
				title: 'A First Meet up',
			},
		},
		revalidate: 1,
	};
};

export default MeetupDetailPage;
