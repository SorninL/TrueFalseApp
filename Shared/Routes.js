import React from "react";
import {Router, Scene} from 'react-native-router-flux'
import Home from './Components/Home'
import Game from './Components/Game'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key = "home" component = {Home} title = "Home" initial = {true}/>
      <Scene key = "game" component = {Game} title = "Game"/>
    </Scene>
  </Router>
)
export default Router
