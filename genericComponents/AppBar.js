import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from '../constants'

const AppBar = (props) => {
  const { title, handleOnPress, iconName, iconStyles } = props
    return (
      <View style={(iconName) ? [styles.container, styles.extraContainerPad] : styles.container}>
        {
          iconName && <Icon
            size={32}
            name={iconName}
            style={[iconStyles, styles.customIcon]}
            onPress={handleOnPress}
          />
        }
        <Text style={(iconName) ? [styles.titleText, styles.extraPad] : styles.titleText}>{title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.brightBlue,
    paddingRight: 12,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    height: 48
  },
  extraContainerPad: {
    paddingLeft: 16
  },
  titleText: {
    color: colors.white,
    fontSize: 20,
  },
  extraPad: {
    paddingLeft: 8
  },
  customIcon: {}
})

export default AppBar
