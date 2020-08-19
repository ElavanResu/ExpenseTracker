import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import Expense from './Expense'

import schema from './schema'

let database
export default function generateDb (customDbName) {
  const dbName = customDbName || 'newDb'

  if (database === undefined || database === null) {
    const adapter = new SQLiteAdapter({
      dbName,
      schema
    })
    database = new Database({
      adapter,
      modelClasses: [
        Expense
      ],
      actionsEnabled: true,
    })
  }

  return database
}