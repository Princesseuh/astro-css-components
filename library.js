const componentLibrary = {
  global: [],
}

function addComponentForURL(url, component) {
  if (!(url in componentLibrary)) {
    componentLibrary[url] = []
  }

  // First look if we already have that specific component in our library, if that's the case, we'll update it instead
  // of creating a new one
  const oldComponent = componentLibrary[url].findIndex((comp) => comp.name === component.name)

  if (oldComponent === -1) {
    componentLibrary[url].push(component)
  } else {
    componentLibrary[url][oldComponent] = component
  }
}

function getComponentsForURL(url) {
  return componentLibrary[url] || []
}

function getComponentByName(name, url) {
  return (
    componentLibrary.global.find((component) => component.name === name) ||
    componentLibrary[url].find((component) => component.name === name)
  )
}

function addGlobalComponent(component) {
  const oldComponent = componentLibrary.global.findIndex((comp) => comp.name === component.name)

  if (oldComponent === -1) {
    componentLibrary.global.push(component)
  } else {
    componentLibrary.global[oldComponent] = component
  }
}

export { addComponentForURL, getComponentsForURL, getComponentByName, addGlobalComponent }
