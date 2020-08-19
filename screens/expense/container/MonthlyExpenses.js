import React, { useEffect } from 'react'
import MonthlyExpensesComponent from '../presentational/MonthlyExpensesComponent'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'

const MonthlyExpenses = (props) => {
  const preProcessing = () => {
    
  }
  useEffect(() => {
    preProcessing()
    return function cleanup () {
      preProcessing()
    }
  }, [])
  return (
    <MonthlyExpensesComponent
      {...props}
    />
  )
}

// export default MonthlyExpenses

export default withDatabase(withObservables([], ({ database }) => {
  return ({
    expeneses: database.collections.get('expenses').query().observe()
  })
})(MonthlyExpenses))
