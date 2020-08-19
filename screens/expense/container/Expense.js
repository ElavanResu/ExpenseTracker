import React from 'react'
import MainScreen from '../presentational/MainScreen'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'

import { createNewExpense } from '../../../models/expenseHelper'

const Expense = (props) => {
  const { expenses, database } = props
  const addNewExpense = async (expenseData) => {
    try {
      await createNewExpense(database, expenseData)
    } catch(error) {
      console.error('Error in addNewExpense:expense/Expense - ', error)
    }
  }
  return (
    <MainScreen
      addNewExpense={addNewExpense}
      {...props}
    />
  )
}

// export default Expense

export default withDatabase(withObservables([], ({database}) => {
  return ({
    expenses: database.collections.get('expenses').query().observe()
  })
})(Expense))
