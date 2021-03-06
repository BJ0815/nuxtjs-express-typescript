import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal', // or spa
  router: {
    middleware: 'state'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ],
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: []
  /*
   ** Server middleware configuration
   */
  // serverMiddleware: [
  //   // added /api/author
  //   '~/api'
  // ]
  /*
   ** Build configuration
   */
  // build: {
  //   /*
  //    ** You can extend webpack config here
  //    */
  //   extend(config: Object, ctx: Object) {
  //     console.log(config, ctx)
  //   }
  // }
}

export default config
