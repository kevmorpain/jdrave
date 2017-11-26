import players from '@/api/players'

export default {
  namespaced: true,
  state: {
    list: []
  },

  actions: {
    fetch (context, cached = true) {
      // const { list } = context.state
      // if (cached && list.length) {
      //   return Promise.resolve(list)
      // }

      return players.fetch()
        .then(response => {
          console.log(response)
          context.commit('fetch', response.data)
        })
    }
  },

  mutations: {
    fetch (state, data) {
      console.log(data)
      state.list = data
    }
  }
}
