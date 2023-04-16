import login from './login'
import layout from './layout'
import todos from './todos'
import errors from './errors'
import profile from './profile'

export default {
  ...login,
  ...layout,
  ...todos,
  ...errors, 
  ...profile
}