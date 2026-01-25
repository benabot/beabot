export const baseURL = () =>
  process.env.NUXT_APP_BASE_URL ||
  process.env.NUXT_PUBLIC_BASE_URL ||
  '/'
