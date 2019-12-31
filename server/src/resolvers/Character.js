function player(parent, args, context) {
  return context.prisma.character({ id: parent.id }).player()
}

function games(parent, args, context) {
  return context.prisma.characters({id: parent.id }).games()
}

module.exports = {
  player,
  games
}