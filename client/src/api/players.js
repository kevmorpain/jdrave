import api from '@/api'

export default {
  create (credentials) {
    return api.post('/add-player', {user: credentials})
  },

  fetch () {
    return api.get('/players')
  }
}
