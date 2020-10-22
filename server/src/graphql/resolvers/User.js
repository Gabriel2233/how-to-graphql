async function links(parent, args, context) {
  const link = await context.prisma.user
    .findOne({ where: { id: parent.id } })
    .links();

  return link;
}

module.exports = {
  links,
};
