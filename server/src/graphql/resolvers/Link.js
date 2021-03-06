async function postedBy(parent, args, context) {
  const postedBy = await context.prisma.link
    .findOne({ where: { id: parent.id } })
    .postedBy();

  return postedBy;
}

async function votes(parent, args, context) {
  return await context.prisma.link.findOne({ where: { id: parent.id } }).votes()
}

module.exports = {
  postedBy,
  votes
};
