import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Songs from './screen/Songs'


const stackNavigator = createStackNavigator({
  Songs: Songs
})

const App = createAppContainer(stackNavigator)
export default App;