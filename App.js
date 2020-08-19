/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'

import Navigations from './navigations/index'
import generateDb from './models'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.db = generateDb('expenseTracker')
  }
  render () {
    return (
      <DatabaseProvider database={this.db}>
        <Navigations
          {...this.props}
        />
      </DatabaseProvider>
    )
  }
}
