export default function(context) {
  console.log('Nuxt middleware')
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
