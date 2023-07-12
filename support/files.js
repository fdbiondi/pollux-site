import { filename } from '~/support/strings'

export const cleanFilename = (filename) =>
  filename
    .replace(/\.[^/.]+$/, '')
    .replace(/\.[/]+/, '')
    .trim()

export const getFromContext = (r, extension, fn = null) => {
  const files = []

  r.keys().forEach((path) =>
    files.push({
      src: r(path),
      name: filename(path, extension).replace('-', ' '),
      ...(fn ? fn(path, extension) : {}),
    }),
  )

  return files
}

export const filenameFromPath = (path, split = '_') =>
  cleanFilename(path?.split(split)[0]).trim()

export const filenameGetHref = (filename) => {
  if (filename.split('_').length <= 1) {
    return null
  }

  const link = cleanFilename(filename.split('_')[1]).trim()

  return `https://${link}/`
}

export const loadPartners = () => {
  return getFromContext(
    require.context('~/assets/images/partners/', true, /\.*$/),
    '.*',
  )
}
