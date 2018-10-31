import { combineReducers } from "redux"
import authReducer from "app/reducers/authReducer"
import birdsEyeReducer from "app/reducers/birdsEyeReducer"
import footerReducer from "app/reducers/footerReducer"
import navbarReducer from "app/reducers/navbarReducer"

// root reducer created to be used in store by combining all individual reducers

const rootReducer = combineReducers({
  auth: authReducer,
  birdseye: birdsEyeReducer,
  footer: footerReducer,
  navbar: navbarReducer,
})

export default rootReducer
