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

  return context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    },
  });
}

module.exports = {
  login,
  signup,
  post,
};
