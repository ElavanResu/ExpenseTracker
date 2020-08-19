import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import TodaysExpense from '../container/TodaysExpense'
import SortExpenses from '../container/SortExpenses'
import { colors } from '../../../constants'

const ListExpense = (props) => {
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator
      initialRoute='Today'
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: colors.brightBlue,
          height: 3,
          borderRadius: 1
        }
      }}
    >
      <Tab.Screen name={'Today'} component={TodaysExpense} />
      <Tab.Screen name={'Sort'} component={SortExpenses} />
    </Tab.Navigator>
  )
}

export default ListExpense
