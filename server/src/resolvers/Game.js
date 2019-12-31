function gameMaster(parent, args, context) {
  return context.prisma.game({ id: parent.id }).gameMaster()
}

function players(parent, args, context) {
  return context.prisma.game({ id: parent.id }).players()
}

function characters(parent, args, context) {
  return context.prisma.game({ id: parent.id }).characters()
}

module.exports = {
  gameMaster,
  players,
  characters
}