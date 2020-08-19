import React from 'react'
import SortExpensesComponent from '../presentational/SortExpensesComponent'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'

const SortExpenses = (props) => {
  return (
    <SortExpensesComponent
      {...props}
    />
  )
}

// export default SelectExpenses

export default withDatabase(withObservables([], ({database}) => {
  return ({
    expenses: database.collections.get('expenses').query().observe()
  })
})(SortExpenses))
