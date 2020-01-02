import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store'
import { User } from '@/store/users'

export type Character = {
  id: string,
  name: string,
  player: User,
  isNonPlayable: boolean,
  status: string,
  games: Array<{}>
}

export const state = () => ({
  list: [] as Array<Character>
})

export type CharactersState = ReturnType<typeof state>

export const getter: GetterTree<CharactersState, RootState> = {
  character: (state, id) => state.list.find(character => character.id === id)
}

export const mutations: MutationTree<CharactersState> = {
  ADD_ALL: (state, characters) => (state.list = characters)
}

export const actions: ActionTree<CharactersState, RootState> = {
  async fetchAll({ commit }) {
    try {
      const result = await this.$axios.$post('', {
        query: `{
          characters {
            id
            name
            player {
              name
            }
            games {
              title
            }
          }
        }`
      })

      commit('ADD_ALL', result.data.characters)
    } catch (e) {
      console.error(e)
    }
  }
}
