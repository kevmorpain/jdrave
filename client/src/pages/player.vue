<template>
  <section>
    <ul>
      <li v-for='player in players' :key='player.id'>
        <strong>{{ player.username }}</strong> - {{ player.email }}
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'players',

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
        fetchPlayers: 'players/fetch'
      })
    }
  }
</script>

<style scoped lang="scss">
</style>
