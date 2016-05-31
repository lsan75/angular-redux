// imports libs
import { bootstrap } from '@angular/platform-browser-dynamic/index'

// redux imports
import { store } from './helpers/redux.helper'

// import the main container
import MainContainer from './containers/main.container'

// bootstrap angular with the main container
bootstrap(MainContainer, [
  store()
])
