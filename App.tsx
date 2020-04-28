import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/SearchScreen'

export enum NavigatorScreens {
  HOME = 'Home',
  SEARCH = 'Search'
}

export type RootStackParamList = {
  [NavigatorScreens.HOME]: {}
  [NavigatorScreens.SEARCH]: {}
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen component={SearchScreen} name={NavigatorScreens.SEARCH} />
      </Navigator>
    </NavigationContainer>
  )
}

export default App