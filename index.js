require('dotenv').config({ path: './.env' });

// Database seeding
// const seedDB = require('./seeds');
// seedDB();

// User authentication
const jwt = require('jsonwebtoken');
const getUser = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, { issuer: 'COMP202-OHBA' }, 
    (err, decoded) => {
        if(err) { return null; }
        return { ...decoded };
    });
}

// Server setup
const { ApolloServer } = require('apollo-server-express'),
       typeDefs = require('./schema'),
       resolvers = require('./resolvers'),
       mongoClient = require('./config/mongoDB'),
      { Instructors, Students, Appointments } = require('./datasources'),
       express = require('express'),
       cors = require('cors');

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers && (req.headers.authorization || '');
        const user = getUser(token);
        return { user };
    },
    dataSources: () => ({
        instructorAPI: new Instructors(mongoClient.db().collection('instructors')),
        appointmentAPI: new Appointments(mongoClient.db().collection('appointments')),
        studentAPI: new Students(mongoClient.db().collection('students'))
    })
});
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server ready at ${server.graphqlPath}`);
});

// TODO: Add a logging system
  
