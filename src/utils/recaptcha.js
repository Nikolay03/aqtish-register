export function getRecaptchaSiteKey () {
  const isDev = process.env.NODE_ENV === 'development'
  if (isDev) return process.env.NEXT_PUBLIC_RECAPTCHA_DEV_KEY
  return process.env.NEXT_PUBLIC_RECAPTCHA_KEY
}
