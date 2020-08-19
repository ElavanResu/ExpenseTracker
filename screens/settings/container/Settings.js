import React from 'react'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'

import SettingsComponent from '../presentational/SettingsComponent'

const Settings = (props) => {
  return (
    <SettingsComponent
      {...props}
    />
  )
}

// export default Settings

export default withDatabase(withObservables([], ({ database }) => {
  return ({
    allExpenses: database.collections.get('expenses').query().observe()
  })
})(Settings))
