const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Character = require('./resolvers/Character')
const Game = require('./resolvers/Game')
const Query = require('./resolvers/Query')

const resolvers = {
  Query,
  Mutation,
  User,
  Character,
  Game
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))