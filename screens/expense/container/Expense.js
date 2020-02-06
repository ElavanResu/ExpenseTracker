import React from 'react'
import ExpenseComponent from '../presentational/ExpenseComponent'

const Expense = (props) => {
  return (
    <ExpenseComponent
      {...props}
    />
  )
}

export default Expense
