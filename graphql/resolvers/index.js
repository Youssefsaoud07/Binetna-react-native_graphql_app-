const PostResolvers = require('./post')
const UserResolvers = require('./user')
module.exports={
    Query: {
        ...PostResolvers.Query
    },
    Mutation: {
        ...UserResolvers.Mutation,
        ...PostResolvers.Mutation

    }

}