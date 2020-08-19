import React from 'react'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'

import DailyExpensesComponent from '../presentational/DailyExpensesComponent'

const DailyExpenses = (props) => {
  return (
    <DailyExpensesComponent
      {...props}
    />
  )
}

export default DailyExpenses

// export default withDatabase(withObservables([], ({ database }) => {
//   return ({
//     expenses: database.collections.get('expenses').query().observe()
//   })
// })(DailyExpenses))
