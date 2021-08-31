import './dotenv.config';
import './mongodb.config';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import express from 'express';
import cors from 'cors';
import path from 'path';
import logger from './utils/logger';

// Database seeding
// const seedDB = require('./seeds');
// seedDB();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client', 'build')));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const userEmail = req.headers && (req.headers.authorization || '');
        logger(req, userEmail);
        return { userEmail }
    }   
});

(async () => {
    await server.start();
    server.applyMiddleware({ app, path: '/server' });
})();

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server ready at ${server.graphqlPath}`);
});

  
