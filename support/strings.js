import { tools } from './constants'

export const filename = (path, extension) =>
  path.replace(/(.+)\/(.+)$/, '$2').replace(extension, '')

export const getToolLink = (path, extension) =>
  tools[filename(path, extension)].link

export const getToolClass = (path, extension) =>
  tools[filename(path, extension)]?.class || ''
