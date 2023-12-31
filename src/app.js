require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');


const { typeDefs } = require('./typeDefs/typeDefs');
const { resolvers } = require('./resolvers/resolvers');


const { connectDB } = require('./db/connection');


const app = express();
connectDB();

app.set('port', process.env.PORT || 4000);

app.get('/', (req,res) => {
    res.status(200).json({'msg': 'Welcome to my API !!!'});
})

const serverGraphqlInit = async(typeDefs, resolvers) => {

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    await server.start();
    
    server.applyMiddleware({ app });
    
    app.listen(process.env.PORT, () => {
        console.log(`Server on port ${process.env.PORT}`);
    });
}

serverGraphqlInit(typeDefs, resolvers);

module.exports = app;