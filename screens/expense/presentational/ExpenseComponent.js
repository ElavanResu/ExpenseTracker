import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  TextInput
} from 'react-native'
import {
  FAB,
  Appbar,
  Title,
  Headline
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from '../../../constants'

const ExpenseComponent = (props) => {
  // Declare states
  const [addExpense, setAddExpense] = useState(false)

  // This function opens the add expense modal
  const handleOnAddExpense = () => {
    setAddExpense(true)
  }

  const closeAddExpenseModal = () => {
    setAddExpense(false)
  }

  const addExpenseModal = () => {
    return (
      <Modal
        animationType='slide'
        visible={true}
        onRequestClose={() => setAddExpense(false)}
      >
        <Appbar
          style={styles.appbar}
        >
          <Icon
            size={38}
            name={'keyboard-arrow-left'}
            onPress={() => setAddExpense(false)}
          />
          <Title>Add Expense</Title>
        </Appbar>
      </Modal>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <FAB
          style={styles.fab}
          icon='plus'
          color={colors.white}
          onPress={() => handleOnAddExpense()}
        />
      </View>
      {addExpense && addExpenseModal()}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: colors.slateGrey,
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: colors.slateGrey
  },
  modifiedCancelIcon: {
    color: colors.slateGrey,
    textShadowColor: colors.slateGrey,
    shadowOpacity: 2,
    textShadowRadius: 10,
    textShadowOffset:{width: 1,height: 1}
  },
  iconStyles: {
    color: colors.white
  }
})

export default ExpenseComponent
