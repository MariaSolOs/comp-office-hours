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
       Appointments = require('./datasources/appointments'),
       Students = require('./datasources/students');

// User authentication
const jwt = require('jsonwebtoken');
const getUser = (token) => {
    jwt.verify(token, process.env.JWT_SECRET, { issuer: 'COMP202-OHBA' }, 
    (err, decoded) => {
        if(err) { 
            return null;
        }
        return { ...decoded };
    });
}

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        const token = req.headers && req.headers.authorization || '';
        const user = await getUser(token);
        return { user };
    },
    dataSources: () => ({
        instructorAPI: new Instructors(mongoClient.db().collection('instructors')),
        appointmentAPI: new Appointments(mongoClient.db().collection('appointments')),
        studentAPI: new Students(mongoClient.db().collection('students'))
    })
});

server.listen().then(() => {
    console.log('Server running on port 4000');
});

  
