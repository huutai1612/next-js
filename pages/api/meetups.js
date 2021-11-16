import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method === 'GET') {
		try {
			const client = await MongoClient.connect(
				'mongodb+srv://huutai1612:Kieutrang0711@cluster0.rdo2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
			);
			const db = client.db();
			const meetupsCollection = db.collection('meetups');
			const data = await meetupsCollection.find().toArray();
			const meetups = data.map((meetup) => {
				return {
					title: meetup.title,
					address: meetup.address,
					description: meetup.description,
					image: meetup.image,
					id: meetup._id.toString(),
				};
			});

			client.close();

			res.status(200).json(meetups);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
};

export default handler;
