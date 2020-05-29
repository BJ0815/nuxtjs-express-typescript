/* server/index.ts */
import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import config from '../nuxt.config'
import { router } from './routes'

// Import and Set Nuxt.js options
const app: express.Application = express()
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.get('/health_check', (_req, res) => res.status(200).send('OK'))

  // load router
  for (const route of router) {
    app.use(route.getRouter())
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)
  // eslint-disable-next-line no-console
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
