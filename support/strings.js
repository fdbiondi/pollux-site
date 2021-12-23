import { TOOLS } from "./constants"

export const filename = (path, extension) =>
  path.replace(/(.+)\/(.+)$/, "$2").replace(extension, "")

export const getToolLink = (path, extension) =>
  TOOLS[filename(path, extension)].link

export const getToolClass = (path, extension) =>
  TOOLS[filename(path, extension)]?.class || ""
