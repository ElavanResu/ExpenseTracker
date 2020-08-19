import React from 'react'
import DashboardComponent from '../presentational/DashboardComponent'
import withObservables from '@nozbe/with-observables'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'

const Dashboard = (props) => {
  console.log('dashboardProps: ', props)
  return (
    <DashboardComponent
      {...props}
    />
  )
}

// export default Dashboard

export default withDatabase(withObservables([], ({ database }) => {
  return ({
    expenses: database.collections.get('expenses').query().observe()
  })
})(Dashboard))
