const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { APP_SECRET, getUserId } = require("../../utils/utils");

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.user.create({
    data: { ...args, password },
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findOne({
    where: {
      email: args.email,
    },
  });

  if (!user)
    throw new Error("There is no such user registered with this email.");

  const isValid = await bcrypt.compare(args.password, user.password);

  if (!isValid) throw new Error("Invalid password.");

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function post(parent, args, context, info) {
  const userId = getUserId(context);

  const newLink = await  context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    },
  });

  context.pubsub.publish('NEW_LINK', newLink)
  return newLink
}

async function vote(parent, args, context, info) {
  const userId = getUserId(context)

  const vote = await context.prisma.vote.findOne({
    where: {
      linkId_userId: {
        linkId: Number(args.linkId),
        userId
      }
    }
  })

   if(Boolean(vote)) {
     throw new Error('This Link has already been upvoted.')
   }

   const newVote = await context.prisma.vote.create({
     data: {
       user: { connect: { id: userId }},
       link: { connect: { id: Number(args.linkId) }},
     }
   })

  context.pubsub.publish('NEW_VOTE', newVote)
}


module.exports = {
  login,
  signup,
  post,
  vote
};
