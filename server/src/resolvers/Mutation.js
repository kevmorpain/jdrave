const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({
    ...args,
    password,
    role: {
      set: ["Player"] // Default role
    }
  })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

async function createCharacter(parent, args, context, info) {
  const playerId = getUserId(context)
  return context.prisma.createCharacter({
    name: args.name,
    isNonPlayable: args.isNonPlayable,
    status: "DRAFT",
    player: {
      connect: {
        id: playerId
      }
    }
  })
}

module.exports = {
  signup,
  login,
  createCharacter
}