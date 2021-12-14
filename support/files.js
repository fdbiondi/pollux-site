import { filename, getToolLink } from "~/support/strings"

export const getFromContext = (r, extension) => {
  const files = []

  r.keys().forEach((path) =>
    files.push({
      src: r(path),
      link: getToolLink(path, extension),
      name: filename(path, extension).replace("-", " "),
    })
  )

  return files
}
