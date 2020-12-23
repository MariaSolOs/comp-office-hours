require('dotenv').config({ path: './.env' });

// MongoDB 
const mongoClient = require('./config/mongoDB');

// Database seeding
// const seedDB = require('./seeds');
// seedDB();

// Apollo Server
const { ApolloServer } = require('apollo-server'),
       typeDefs = require('./schema'),
       resolvers = require('./resolvers'),
       Instructors = require('./datasources/instructors'),
       Appointments = require('./datasources/appointments');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        instructorAPI: new Instructors(mongoClient.db().collection('instructors')),
        appointmentAPI: new Appointments(mongoClient.db().collection('appointments'))
    })
});

server.listen().then(() => {
    console.log('Server running on port 4000');
});

  
