import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

export default ({ app }) => {
  // Set the i18n instance on app
  // This way we can use it globally in our components through this.$i18n
  app.i18n = new VueI18n({
    // Set the initial locale
    locale: 'fr',

    // Set the fallback locale in case the current locale can't be found
    fallbackLocale: 'fr',

    // Associate each locale to a content file
    messages: {
      fr: require('@/plugins/locales/fr.json')
    }
  })
}
