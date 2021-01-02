const { MongoClient } = require('mongodb'),
       mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI);

const client = new MongoClient(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
client.connect().then(() => console.log('Mongo connection successful'))
                .catch(err => console.error(err));

module.exports = client;