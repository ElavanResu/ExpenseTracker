import React from 'react'
import TodaysExpenseComponent from '../presentational/TodaysExpenseComponent'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import { Q } from '@nozbe/watermelondb'
import dayjs from 'dayjs'

const TodaysExpense = (props) => {
  return (
    <TodaysExpenseComponent
      {...props}
    />
  )
}

// export default TodaysExpense

export default withDatabase(withObservables([], ({ database }) => {
  return ({
    todaysExpenses: database.collections.get('expenses').query(Q.where('purchase_date', dayjs().format('YYYY-MM-DD'))).observe()
  })
})(TodaysExpense))
