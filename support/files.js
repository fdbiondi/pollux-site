import { filename } from "~/support/strings"

export const getFromContext = (r, extension, fn = null) => {
  const files = []

  r.keys().forEach((path) =>
    files.push({
      src: r(path),
      name: filename(path, extension).replace("-", " "),
      ...(fn ? fn(path, extension) : {}),
    })
  )

  return files
}
