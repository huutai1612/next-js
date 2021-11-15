import { useRouter } from 'next/router';
import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const DUMMY_DETAIL = {
	url: 'https://www.travel688.com/wp-content/uploads/2018/01/San_Francisco_780x520px.jpg',
	description: 'Meet up description',
	address: 'Some address 5, Some City',
	title: 'A First Meet up',
};

const MeetupDetailPage = (props) => {
	const router = useRouter();

	return (
		<MeetupDetail
			image={DUMMY_DETAIL.url}
			title={DUMMY_DETAIL.title}
			description={DUMMY_DETAIL.description}
			address={DUMMY_DETAIL.address}
		/>
	);
};

export default MeetupDetailPage;
