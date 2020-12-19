require('dotenv').config({ path: './.env' });

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

// Mongoose connection
require('./config/mongoose');

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
    console.log('Server running on port 4000');
});

  
