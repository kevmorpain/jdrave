<template>
  <div class="container">
    <h1>Homepage</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.role }}
      </li>
    </ul>

    <ul>
      <li v-for="character in characters" :key="character.id">
        {{ character.name }} - {{ character.player }} - {{ character.games }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  setup (_, { root }) {
    root.$store.dispatch('users/fetchAll')
    root.$store.dispatch('characters/fetchAll')

    const users = computed(() => root.$store.state.users.list)
    const characters = computed(() => root.$store.state.characters.list)

    return {
      users,
      characters
    }
  }
})
</script>

<style></style>
