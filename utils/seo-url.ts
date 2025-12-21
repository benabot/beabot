const FILE_EXTENSIONS = new Set(['.pdf', '.png', '.jpg', '.jpeg', '.svg', '.webp'])

const stripTrailingSlash = (value: string) => value.replace(/\/+$/, '')

export const ensureLeadingSlash = (path = ''): string => {
  const trimmed = String(path).trim()
  if (!trimmed) return '/'
  if (trimmed.startsWith('/')) return trimmed
  return `/${trimmed}`
}

export const withTrailingSlash = (path = ''): string => {
  const normalized = ensureLeadingSlash(path)
  if (normalized === '/') return '/'
  return normalized.endsWith('/') ? normalized : `${normalized}/`
}

export const canonicalUrl = (siteUrl: string, path = '/'): string => {
  const base = stripTrailingSlash(String(siteUrl || '').trim())
  const normalizedPath = withTrailingSlash(path)
  if (normalizedPath === '/') return base || '/'
  return `${base}${normalizedPath}`
}

const isExternalHref = (href: string): boolean => {
  if (!href) return false
  if (href.startsWith('//')) return true
  return /^[a-z][a-z0-9+.-]*:/i.test(href)
}

export const normalizeInternalHref = (href = ''): string => {
  const value = String(href).trim()
  if (!value) return value
  if (value.startsWith('#') || value.startsWith('?')) return value
  if (!value.startsWith('/')) return value
  if (isExternalHref(value)) return value

  const match = value.match(/^([^?#]*)(.*)$/)
  if (!match) return value

  const pathPart = match[1]
  const suffix = match[2] || ''
  const lowerPath = pathPart.toLowerCase()

  for (const ext of FILE_EXTENSIONS) {
    if (lowerPath.endsWith(ext)) {
      return value
    }
  }

  return `${withTrailingSlash(pathPart)}${suffix}`
}
