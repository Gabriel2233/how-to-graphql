async function postedBy(parent, args, context) {
  const postedBy = await context.prisma.link
    .findOne({ where: { id: parent.id } })
    .postedBy();

  return postedBy;
}

module.exports = {
  postedBy,
};
