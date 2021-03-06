import Card from '../ui/Card';
import styles from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
	return (
		<div className={styles.detail}>
			<img src={props.image} alt='meet up' />
			<Card>
				<h1>{props.title}</h1>
				<address>{props.address}</address>
				<p>{props.description}</p>
			</Card>
		</div>
	);
};

export default MeetupDetail;
