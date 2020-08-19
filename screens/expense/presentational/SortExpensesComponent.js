import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MonthlyExpenses from '../container/MonthlyExpenses'
import DailyExpenses from '../container/DailyExpenses'
import YearlyExpenses from '../container/YearlyExpenses'

const SortExpensesComponent = (props) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      headerMode='none'
    >
      <Stack.Screen name='Daily' component={DailyExpenses} />
      <Stack.Screen name='Monthly' component={MonthlyExpenses} />
      <Stack.Screen name='Yearly' component={YearlyExpenses} />
    </Stack.Navigator>
  )
}

export default SortExpensesComponent
