import nav_button from "./nav-button"
import title from "./title"
import button from "./text-button"
import text from "./text"

const components = [
  button,
  nav_button,
  title,
  text,
]

export const install = (Vue) => {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
