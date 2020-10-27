async function feed(parent, args, context, info) {
  const where = args.filter
  ? {
    OR: [
      { description: {contains: args.filter }},
      { url: { contains: args.filter }}
    ]
  } : {}

  const data = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  })

  const links = data.map(link => { 
    return {
      ...link,
      createdAt: link.createdAt.toISOString() 
    }
  })

  const count = await context.prisma.link.count({ where })

  return {
    links,
    count
  }
}

module.exports = {
  feed,
};
