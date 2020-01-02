import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store'

export const state = () => ({})

export type AuthState = ReturnType<typeof state>

export const mutations: MutationTree<AuthState> = {}

export const actions: ActionTree<AuthState, RootState> = {}
