import players from '@/api/players'

export default {
  namespaced: true,
  state: {
    list: []
  },

  actions: {
    fetch (context) {
      return players.fetch()
        .then(response => context.commit('fetch', response.data))
    },

    add (context, player) {
      return players.add(player)
        .then(response => context.commit('add', response.data))
    },

    delete (context, id) {
      return players.delete(id)
        .then(() => context.commit('delete', id))
    }
  },

  mutations: {
    fetch (state, data) {
      state.list = data
    },
    add (state, data) {
      state.list.push(data)
    },
    delete (state, id) {
      state.list = state.list.filter(player => player.id !== id)
    }
  }
}
