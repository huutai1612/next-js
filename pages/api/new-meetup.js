import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	// req will contain data of incoming request
	// res will contain data of response
	if (req.method === 'POST') {
		try {
			const data = req.body;

			const client = await MongoClient.connect(
				'mongodb+srv://huutai1612:Kieutrang0711@cluster0.rdo2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
			);
			const db = client.db();
			const meetupsCollection = db.collection('meetups');
			const result = await meetupsCollection.insertOne(data);

			client.close();

			res.status(201).json({ message: `Successfully insert meet ups` });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
};

export default handler;
