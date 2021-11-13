import Link from 'next/link';
import { Fragment } from 'react';

const HomePage = (props) => {
	return (
		<Fragment>
			<h1>This is a HomePage</h1>
			<ul>
				<li>
					{' '}
					<Link href='./news/next-js-is-great'>
						Next js is a great framework
					</Link>{' '}
				</li>
				<li>Something ...</li>
			</ul>
		</Fragment>
	);
};

export default HomePage;
