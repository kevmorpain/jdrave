import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store'

export type User = {
  id: string,
  name: string,
  email: string,
  role: Array<string>
}

export const state = () => ({
  list: [] as Array<User>
})

export type UsersState = ReturnType<typeof state>

export const getter: GetterTree<UsersState, RootState> = {
  user: (state, id) => state.list.find(user => user.id === id)
}

export const mutations: MutationTree<UsersState> = {
  ADD_ALL: (state, users) => (state.list = users)
}

export const actions: ActionTree<UsersState, RootState> = {
  async fetchAll({ commit }) {
    try {
      const result = await this.$axios.$post('', {
        query: `{
          users {
            id
            name
            role
          }
        }`
      })

      commit('ADD_ALL', result.data.users)
    } catch (e) {
      console.error(e)
    }
  }
}
