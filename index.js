const { ApolloServer} =require('apollo-server')
const mongoose = require ('mongoose')
const typeDefs= require('./graphql/typeDefs')
const resolvers =require('./graphql/resolvers')

require("dotenv").config({ path: "./config/.env" });


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) => ({req})

})
mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
        console.log('database connected')
        return server.listen({port:5000})
    
})
    .then((res) => {
        console.log(`server is running on ${res.url}`)
    })
