import { readFileSync } from 'fs'
import csso from 'csso'

// If the user supplied a file instead of a string, let's load it up
function getCSSForComponent(component, minify) {
  if (!component.content && component.contentFile) {
    component.content = readFileSync(component.contentFile, "utf8")
  }

  if (minify) component.content = minifyCSS(component.content)

  return { ...component }
}

function minifyCSS(css) {
  return csso.minify(css).css
}

export { getCSSForComponent }
