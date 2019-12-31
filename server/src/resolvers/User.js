function manage(parent, args, context) {
  return context.prisma.user({ id: parent.id }).manage()
}
function play(parent, args, context) {
  return context.prisma.user({ id: parent.id }).play()
}

module.exports = {
  manage,
  play
}