"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./dotenv.config");
require("./mongodb.config");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("./utils/logger"));
// Database seeding
// import script from './script';
// script();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../client', 'build')));
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    context: ({ req }) => {
        const userEmail = req.headers && (req.headers.authorization || '');
        (0, logger_1.default)(req, userEmail);
        return { userEmail };
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    server.applyMiddleware({ app });
}))();
app.get('*', (_, res) => {
    res.sendFile(path_1.default.join(__dirname, '../client', 'build', 'index.html'));
});
app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server ready at ${server.graphqlPath}`);
});
