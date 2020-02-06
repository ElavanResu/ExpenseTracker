import React from 'react'
import {
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Dashboard from '../screens/dashboard/container/Dashboard'
import Expense from '../screens/expense/container/Expense'
import SplitBill from '../screens/splitBill/container/SplitBill'
import Settings from '../screens/settings/container/Settings'
import { colors } from '../constants'

export default DrawerNavigator = (props) => {
  const navigationData = {
    Dashboard: {
      component: Dashboard,
      iconName: 'dashboard'
    },
    Expense: {
      component: Expense,
      iconName: 'account-balance-wallet'
    },
    SplitBill: {
      component: SplitBill,
      iconName: 'call-split'
    },
    Settings: {
      component: Settings,
      iconName: 'settings'
    }
  }
  const Drawer = createDrawerNavigator()
  return (
    <DrawerNavigator
      initialRouteName='Dashboard'
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name={navigationData[route.name].iconName}
              size={24}
              style={styles.icon}
            />
          )
        }
      })}
    >
      {
        Object.keys(navigationData).map(ele => {
          return (
            <Drawer.Screen
              name={ele}
              component={navigationData[ele].component}
              options={navigationData[ele].options}
            />
          )
        })
      }
    </DrawerNavigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: colors.white
  }
})