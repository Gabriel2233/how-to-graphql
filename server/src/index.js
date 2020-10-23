const { GraphQLServer, PubSub } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");

const Query = require("../src/graphql/resolvers/Query");
const Mutation = require("../src/graphql/resolvers/Mutation");
const User = require("../src/graphql/resolvers/User");
const Link = require("../src/graphql/resolvers/Link");
const Subscription = require('../src/graphql/resolvers/Subscription')
const Vote = require('../src/graphql/resolvers/Vote')

const prisma = new PrismaClient();
const pubsub = new PubSub()

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote
};

const server = new GraphQLServer({
  typeDefs: "src/graphql/schema/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
      pubsub
    };
  },
});

server.start(() => console.log("Server started"));
