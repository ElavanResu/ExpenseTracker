import React from 'react'
import {
  View,
  Modal
} from 'react-native'
import {
  Appbar,
  Title,
  Button
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

// import Form from '../../../genericComponents/jsonSchemaForm'
import Form from 'react-native-paper-jsonschema-form'
import { colors } from '../../../constants'
import { expenseSchema, expenseUiSchema } from '../metaData'
import styles from '../expenseStyles'

const AddExpenseModal = (props) => {
  let expenseFormRef
  const { addExpense, setAddExpense, closeAddExpenseModal, onAddExpenseSubmit } = props
  return (
    <Modal
      animationType='slide'
      visible={addExpense}
      onRequestClose={() => setAddExpense(false)}
    >
      <Appbar
        style={styles.appbar}
      >
        <Icon
          style={styles.whiteColor}
          size={38}
          name={'keyboard-arrow-left'}
          onPress={() => setAddExpense(false)}
        />
        <Title style={styles.whiteColor}>Add Expense</Title>
      </Appbar>
      <View style={styles.formContainer}>
        <Form
          ref={form => {
            expenseFormRef = form
          }}
          schema={expenseSchema}
          uiSchema={expenseUiSchema}
          onSubmit={onAddExpenseSubmit}
          showErrorList={false}
          formData={{}}
          formContext={{
            colorTheme: {
              primary: colors.brightBlue
            }
          }}
        >
          <View style={styles.buttonsContainer}>
            <View style={styles.secondaryButtonView}>
              <Button
                id='addExpenseExitButton'
                onPress={closeAddExpenseModal}
                mode={'outlined'}
                color={colors.brightBlue}
                style={styles.secondaryButton}
              >
                exit
              </Button>
            </View>
            <View style={styles.primaryButtonView}>
              <Button
                labelStyle={{ color: colors.white }}
                id='addExpenseAddButton'
                onPress={() => expenseFormRef.onSubmit()}
                color={colors.brightBlue}
                mode='contained'
                style={styles.primaryButton}
              >
                Add
              </Button>
            </View>
          </View>
        </Form>
      </View>
    </Modal>
  )
}

export default AddExpenseModal
