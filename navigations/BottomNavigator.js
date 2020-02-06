import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Dashboard from '../screens/dashboard/container/Dashboard'
import Expense from '../screens/expense/container/Expense'
import SplitBill from '../screens/splitBill/container/SplitBill'
import Settings from '../screens/settings/container/Settings'
import { colors } from '../constants'

export default BottomNavigator = (props) => {
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
  const Tab = createMaterialBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'
      shifting={false}
      activeColor={colors.white}
      barStyle={{ backgroundColor: colors.slateGrey }}
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name={navigationData[route.name].iconName}
              size={24}
              style={focused ? styles.icon : [styles.icon, styles.fadedIcon]}
            />
          )
        }
      })}
    >
      {
        Object.keys(navigationData).map(ele => {
          return (
            <Tab.Screen
              name={ele}
              component={navigationData[ele].component}
              options={navigationData[ele].options}
            />
          )
        })
      }
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: colors.white
  },
  fadedIcon: {
    opacity: 0.5
  }
})