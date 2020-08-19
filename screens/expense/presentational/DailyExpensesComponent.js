import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'
import { Subheading, Headline } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from '../expenseStyles'
import { rupeeFormatter } from '../../../genericComponents/specialFunctions'

const DailyExpensesComponent = (props) => {
  const [selectedDate, setSelectedDate] = useState('')
  const { expenses } = props
  const calculateTotalExpense = () => {
    let totalExpense = 0
    if (expenses === undefined || expenses.length === 0) {
      return totalExpense
    }
    expenses.forEach(ele => {
      totalExpense = totalExpense + ele.cost
    })
    return rupeeFormatter(totalExpense)
  }
  return (
    <View style={{ flex: 1 }}>
      <View elevation={10} style={[styles.upperSection]}>
        <Subheading style={styles.content}>{'Daily Expense'}</Subheading>
        <Headline style={styles.content}>{`\u20B9 ${calculateTotalExpense()}`}</Headline>
      </View>
      <View style={{ flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
        
      </View>
    </View>
  )
}

export default DailyExpensesComponent
