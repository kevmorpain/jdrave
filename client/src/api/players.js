import api from '@/api'

export default {
  add (newPlayer) {
    return api.post('/players', newPlayer)
  },

  delete (id) {
    console.log(id)
    return api.delete(`/players/${id}`)
  },

  fetch () {
    return api.get('/players')
  }
}
