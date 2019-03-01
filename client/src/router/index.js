import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/home'
import gamePage from '@/pages/game'
import playerPage from '@/pages/players'
import singlePlayerPage from '@/pages/player'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/connexion',
      name: 'login'
    },
    {
      path: '/game',
      name: 'game',
      component: gamePage
    },
    {
      path: '/players',
      name: 'players',
      component: playerPage
    },
    {
      path: '/player/:playerId',
      name: 'player',
      component: singlePlayerPage,
      props: true
    },
    {
      path: '*',
      redirect: {
        name: '/'
      }
    }
  ]
})
