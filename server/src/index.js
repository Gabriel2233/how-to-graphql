const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");

const Query = require("../src/graphql/resolvers/Query");
const Mutation = require("../src/graphql/resolvers/Mutation");
const User = require("../src/graphql/resolvers/User");
const Link = require("../src/graphql/resolvers/Link");

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start(() => console.log("Server started"));
