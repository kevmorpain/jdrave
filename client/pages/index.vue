<template lang="pug">
  section.hero
    ul.hero__slider
      li(
        v-for="game in games"
        :key="game.id"
        class="hero__item"
        :style="`background-image: url(${require('@/assets/images/hero-bg.jpg')})`"
      )
        .hero__item__title {{ game.title }}
        .hero__item__description {{ game.description }}
        .hero__item__infos
          .hero__item__game-master {{ game.gameMaster.name }}
          .hero__item__characters
            .character(v-for="character in game.characters" :key="character.id") {{ character.name }}
          .hero__item__last-game {{ game.lastGameAt }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  async fetch ({ store }) {
    await store.dispatch('games/fetchAll')
  },

  setup (_, { root }) {
    const games = computed(() => root.$store.state.games.list)

    return {
      games
    }
  }
})
</script>

<style lang="scss" scoped>
.hero {
  &__item {
    position: relative;
    min-height: 50rem;

    &__title {
      font-size: 2rem;
    }

    &__infos {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
      border: solid grey;
      border-width: 1px 0 0 1px;
      background-color: rgba(white, 0.5);
    }

    &__game-master {
      border-right: 1px solid grey;
      padding: 5px 10px;
    }

    &__characters {
      display: flex;
      border-right: 1px solid grey;
      padding: 5px;

      .character {
        padding: 0 5px;
      }
    }

    &__last-game {
      padding: 5px 10px;
    }
  }
}
</style>
