import { Plugin } from '@nuxt/types'
import { camelizeKeys, decamelizeKeys } from 'humps'

const axiosPlugin: Plugin = function({ $axios }) {
  $axios.interceptors.request.use((config) => {
    return config
  })

  $axios.onRequest((config) => {
    config.data = decamelizeKeys(config.data)
    console.log('Making request to ' + config.url)
  })

  $axios.onResponse((response) => {
    response.data = camelizeKeys(response.data)
  })
}

export default axiosPlugin
