import { readFileSync } from 'fs'

// If the user supplied a file instead of a string, let's load it up
function getCSSForComponent(component) {
  if (!component.content && component.contentFile) {
    component.content = readFileSync(component.contentFile, "utf8")
  }

  return { ...component }
}
export { getCSSForComponent }
