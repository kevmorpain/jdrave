<template>
  <section>
    <ul>
      <li>
        <strong>{{ player.username }}</strong> - {{ player.email }}
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
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'player',
    props: {
      playerId: {
        type: [String, Number]
      }
    },

    data () {
      return {
        username: null,
        email: null
      }
    },

    computed: {
      ...mapGetters({
        getPlayerById: 'players/getPlayerById'
      }),

      player () {
        return this.getPlayerById(this.playerId)
      }
    },

    methods: {
      ...mapActions({
        update: 'players/update'
      }),

      submit () {
        const { username, email } = this
        const params = { username, email }
        this.update(params)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
