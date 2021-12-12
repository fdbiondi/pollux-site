import { TOOLS_LINKS } from "./constants"

export const filename = (path, extension) => path.replace(/(.+)\/(.+)$/, "$2").replace(extension, "")

export const getToolLink = (path, extension) => TOOLS_LINKS[filename(path, extension)]
