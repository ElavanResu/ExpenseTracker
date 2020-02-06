/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import Navigations from './navigations/index'

const App: () => React$Node = (props) => {
  return (
    <Navigations
      {...props}
    />
  )
}

export default App
