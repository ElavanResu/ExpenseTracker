import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { expenseSchema } from './Expense'

const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema(expenseSchema)
  ]
})

export default mySchema
