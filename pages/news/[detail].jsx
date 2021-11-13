import { useRouter } from 'next/router';

const DetailPage = (props) => {
	const router = useRouter();

	// this is the query to the name in the [] file
	// this can use to get parameters from the router.query
	console.log(router.query);

	return (
		<div>
			<h1>The Detail page</h1>
			<h2>{router.query.detail}</h2>
		</div>
	);
};

export default DetailPage;
