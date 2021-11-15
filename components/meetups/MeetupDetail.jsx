import { Fragment } from 'react';
import Card from '../ui/Card';
import styles from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
	return (
		<Fragment>
			<div className={styles.detail}>
				<img src={props.image} alt='meet up' />
				<Card>
					<h1>{props.title}</h1>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</Card>
			</div>
		</Fragment>
	);
};

export default MeetupDetail;
