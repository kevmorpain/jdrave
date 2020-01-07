import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store'
import { User } from '@/store/users'
import { Character } from '@/store/characters'

export type Game = {
  id: string,
  title: string,
  description: string,
  players: Array<User>,
  gameMaster: User,
  characters: Array<Character>,
  lastGameAt: string,
  status: string
}

export const state = () => ({
  list: [] as Array<Game>
})

export type GamesState = ReturnType<typeof state>

export const getter: GetterTree<GamesState, RootState> = {
  game: (state, id) => state.list.find(game => game.id === id)
}

export const mutations: MutationTree<GamesState> = {
  ADD_ALL: (state, games) => (state.list = games)
}

export const actions: ActionTree<GamesState, RootState> = {
  async fetchAll({ commit }) {
    try {
      const result = await this.$axios.$post('', {
        query: `{
          games {
            id
            title
            description
            players {
              name
            }
            gameMaster {
              name
            }
            characters {
              name
            }
            lastGameAt
          }
        }`
      })

      commit('ADD_ALL', result.data.games)
    } catch (e) {
      console.error(e)
    }
  }
}
