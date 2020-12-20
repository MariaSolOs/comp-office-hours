const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
client.connect().then(() => console.log('Mongo connection successful'))
                .catch(err => console.error(err));

module.exports = client;