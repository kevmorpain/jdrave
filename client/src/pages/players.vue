<template>
  <section>
    <ul>
      <li v-for='player in players' :key='player.id'>
        <router-link :to='{ name: "player", params: { playerId: player.id } }'><strong>{{ player.username }}</strong> - {{ player.email }}</router-link>
        <button @click='deletePlayer(player.id)'>x</button>
      </li>
    </ul>

    <form @submit.prevent='submit'>
      <input
        type='text'
        name='username'
        v-model='username'
        placeholder='name' />
        <input
          type='email'
          name='email'
          v-model='email'
          placeholder='email' />
        <button type='submit'>Valider</button>
    </form>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'players',

    data () {
      return {
        username: '',
        email: ''
      }
    },

    created () {
      this.fetchPlayers()
    },

    computed: {
      ...mapState('players', {
        players: ({ list }) => list
      })
    },

    methods: {
      ...mapActions({
        fetchPlayers: 'players/fetch',
        addPlayer: 'players/add',
        deletePlayer: 'players/delete'
      }),

      submit () {
        const { username, email } = this
        this.addPlayer({username, email})
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
