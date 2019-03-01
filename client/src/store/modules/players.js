import players from '@/api/players'
import updateElement from '@/lib/update-element'

export default {
  namespaced: true,
  state: {
    list: []
  },

  actions: {
    add: (context, player) =>
      players.add(player)
        .then(response => context.commit('add', response.data)),

    delete: (context, id) =>
      players.delete(id)
        .then(() => context.commit('delete', id)),

    fetch: (context) =>
      players.fetch()
        .then(response => context.commit('fetch', response.data)),

    fetchPlayer: (context, id) =>
      players.fetchOne(id)
        .then(response => context.commit('update', response.data)),

    update: (context, params) =>
      players.update(params.id, params)
        .then(response => context.commit('update', response.data))
  },

  mutations: {
    add (state, data) {
      state.list.push(data)
    },
    delete (state, id) {
      state.list = state.list.filter(player => player.id !== id)
    },
    fetch (state, data) {
      state.list = data
    },
    update ({ list }, data) {
      updateElement(list, data)
    }
  },

  getters: {
    getPlayerById: ({list}) => (id) => list.find(player => player.id === id),

    getThis: () => {}
  }
}
