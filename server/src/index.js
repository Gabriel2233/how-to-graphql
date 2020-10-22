const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    feed: async (parent, args, context) => {
return context.prisma.link.findMany()
    },  
  },

  Mutation: {
    post: async (parent, args, context) => {
      try {
        const data = {
          description: args.description,
          url: args.url
        } 

         const newLink = await context.prisma.link.create({
          data: {
            description: data.description,
            url: data.url
          }
        })

        return newLink
      } catch(err) {
        console.log(err)
      }
    },

    updateLink: async (parent, args, context) => {
      try {
        const linkInDB = await context.prisma.link.findOne({
          where: {
            id: args.id
          }
        })        

        const updatedLink = await context.prisma.link.updateOne({
          where: {
            id: args.id
          },
          data: linkInDB
        })

        return updatedLink
      } catch(err) {console.log(err)}
    },

    deleteLink: (parent, args, context) => {
    },
  },
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: prisma 
});

server.start(() => console.log("Server started"));
