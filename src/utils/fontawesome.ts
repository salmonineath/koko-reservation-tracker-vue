// Central Font Awesome setup — only the icons actually used get bundled.
// Add new icons to both the import list and `library.add(...)` below.
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faHouse,
  faCalendarDays,
  faPenToSquare,
  faGear,
  faChevronDown,
  faXmark,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faMagnifyingGlass,
  faRotateLeft,
  faTrash,
  faPlus,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

// We import the CSS ourselves above, so FA shouldn't inject its own <style> tag.
config.autoAddCss = false

library.add(
  faHouse,
  faCalendarDays,
  faPenToSquare,
  faGear,
  faChevronDown,
  faXmark,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faMagnifyingGlass,
  faRotateLeft,
  faTrash,
  faPlus,
  faArrowLeft,
)
