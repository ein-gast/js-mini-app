import './index.html' // толко для того чтобы rollup делал watch на файл
import { render } from './render.js'

window.requestAnimationFrame(render)
