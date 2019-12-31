function users(root, args, context, info) {
  const users = context.prisma.users()

  return users
}

async function characters(root, args, context, info) {
  const where = args ? {
    player: {
      id: args.playerId
    },
    status: args.statusFilter
  } : {}

  const characters = await context.prisma.characters({
    where
  })

  return characters
}

async function games(root, args, context, info) {
  const games = await context.prisma.games()
  return games
}

module.exports = {
  users,
  characters,
  games
}