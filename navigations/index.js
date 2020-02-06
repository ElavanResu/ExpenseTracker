import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import BottomNavigator from './BottomNavigator'
import DrawerNavigator from './DrawerNavigator'

export default Navigations = (props) => {
  return (
    <NavigationContainer>
      <BottomNavigator
        {...props}
      />
      {/* <DrawerNavigator
        {...props}
      /> */}
    </NavigationContainer>
  )
}