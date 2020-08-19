const createNewExpense = async (db, expense) => {
  try {
    console.log('')
    const expenseCollection = db.collections.get('expenses')
    const dbResponse = await db.action(async () => {
      const newExpense = await expenseCollection.create(exp => {
        exp.item = expense.item
        exp.cost = expense.cost
        exp.category = expense.category
        exp.purchaseDate = expense.purchaseDate
        exp.transactionType = expense.transactionType
        exp.note = expense.note
        return exp
      })
      return newExpense
    })
    return dbResponse
  } catch (error) {
    console.log('error in createNewExpense: ', error)
  }
}

export {
  createNewExpense
}