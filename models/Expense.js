import { Model } from '@nozbe/watermelondb'
import { field, readonly, date } from '@nozbe/watermelondb/decorators'

export default class Expense extends Model {
  static table = 'expenses'

  @field('item') item
  @field('cost') cost
  @field('category') category
  @field('purchase_date') purchaseDate
  @field('transaction_type') transactionType
  @field('note') note
  @readonly @date('created_at') createdAt
  @readonly @date('updated_at') updatedAt
}

const expenseSchema = {
  name: 'expenses',
  columns: [
    { name: 'item', type: 'string' },
    { name: 'cost', type: 'number' },
    { name: 'category', type: 'string' },
    { name: 'purchase_date', type: 'string' },
    { name: 'transaction_type', type: 'string' },
    { name: 'note', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' }
  ]
}

export {
  expenseSchema
}