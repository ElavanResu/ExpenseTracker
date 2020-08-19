import React, { useState } from 'react'
import {
  View
} from 'react-native'
import {
  FAB
} from 'react-native-paper'

import { colors } from '../../../constants'
import AddExpenseModal from './AddExpenseModal'
import ListExpense from './ListExpense'
import styles from '../expenseStyles'

const MainScreen = (props) => {
  // Declare states
  const [addExpense, setAddExpense] = useState(false)

  // This function opens the add expense modal
  const handleOnAddExpense = () => {
    setAddExpense(true)
  }

  const closeAddExpenseModal = () => {
    setAddExpense(false)
  }

  const onAddExpenseSubmit = async (submittedData) => {
    try {
      const { addNewExpense } = props
      await addNewExpense(submittedData.formData)
      closeAddExpenseModal()
    } catch (error) {
      console.error('error in onAddExpenseSumit:expense/MainScreen.js - ', error)
    }
  }

  return (
    <>
      <View style={styles.viewContainer}>
        <ListExpense
        />
        <FAB
          style={styles.fab}
          icon='plus'
          color={colors.white}
          onPress={() => handleOnAddExpense()}
        />
      </View>
      <AddExpenseModal
        addExpense={addExpense}
        setAddExpense={setAddExpense}
        onAddExpenseSubmit={onAddExpenseSubmit}
        closeAddExpenseModal={closeAddExpenseModal}
      />
    </>
  )
}

export default MainScreen
