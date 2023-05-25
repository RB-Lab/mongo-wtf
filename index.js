const { MongoClient } = require('mongodb');

async function run() {
    console.log('---------------------------------------')
    console.log('Running MongoDB with NodeJS')
    console.log('---------------------------------------')
    const client = new MongoClient(process.env['MONGO_URL'], { useUnifiedTopology: true });
    await client.connect();
    console.log('---------------------------------------')
    console.log('Connected to MongoDB')
    console.log('---------------------------------------')
    const db = client.db('test');
    const collection = db.collection('documents');
    const docCount = await collection.countDocuments();
    console.log('---------------------------------------')
    console.log('Document count: ' + docCount)
    console.log('---------------------------------------')
    client.close();
}

run().catch(console.dir);