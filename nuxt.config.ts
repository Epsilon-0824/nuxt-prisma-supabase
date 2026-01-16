// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    githubToken: '123456',
    githubUsername: 'no_name',
    githubRepo: 'no_repo'
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
