#!/usr/bin/env node

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const routes = [
  '/',
  '/eco-conception/',
  '/eco-conception/la-consommation-energetique-du-numerique/',
  '/portfolio/',
  '/contact/',
  '/mentions-legales/',
]

const fetchRoute = async (route) => {
  const url = new URL(route, baseUrl).toString()
  const res = await fetch(url, { redirect: 'manual' })
  const status = res.status
  const location = res.headers.get('location')

  if (status >= 300 && status < 400 && location) {
    const nextUrl = new URL(location, url).toString()
    const nextRes = await fetch(nextUrl, { redirect: 'manual' })
    return {
      route,
      status,
      location: nextUrl,
      followStatus: nextRes.status,
    }
  }

  return { route, status }
}

const run = async () => {
  const results = await Promise.all(routes.map(fetchRoute))
  let hasServerError = false

  for (const result of results) {
    const extra = result.location
      ? ` → ${result.location} (${result.followStatus})`
      : ''
    console.log(`${result.status} ${result.route}${extra}`)
    if (result.status >= 500 || result.followStatus >= 500) {
      hasServerError = true
    }
  }

  if (hasServerError) {
    console.error('\nERROR: One or more routes returned 5xx responses.')
    process.exit(1)
  }
}

run().catch((error) => {
  console.error('ERROR: Route check failed:', error)
  process.exit(1)
})
