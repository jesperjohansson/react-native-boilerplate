import { createAppContainer, createStackNavigator } from 'react-navigation'
import StartScreen from '../screens/StartScreen'

const AppNavigator = createStackNavigator({
  start: {
    screen: StartScreen,
  },
})

export default createAppContainer(AppNavigator)
