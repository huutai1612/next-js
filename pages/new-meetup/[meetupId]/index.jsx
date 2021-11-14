import { useRouter } from 'next/router';
import { Fragment } from 'react';

const MeetUpDetail = (props) => {
	const router = useRouter();

	return (
		<Fragment>
			<h1>Meet up details</h1>
			<h2>{router.query.meetupId}</h2>
		</Fragment>
	);
};

export default MeetUpDetail;
