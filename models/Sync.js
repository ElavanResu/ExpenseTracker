import { createNewExpense } from './expenseHelper'

const modelCreatorMapper = {
  expenses: createNewExpense
}

const deleteRecords = async (db, tableName) => {
  try {
    const tableRecords = await db.collections.get(tableName).query().fetch()
    if (tableRecords !== undefined && tableRecords.length > 0) {
      await db.action(async () => {
        for (let index = 0; index < tableRecords.length; index++) {
          await tableRecords[index].destroyPermanently()
        }
      })
    }
  } catch (error) {
    console.log('error in deleteRecords: ', error)
  }
}

const clearEveryTable = async (db) => {
  try {
    const arrayOfTables = [
      'expenses'
    ]
    for (let index = 0; index < arrayOfTables.length; index++) {
      await deleteRecords(db, arrayOfTables[index])
    }
    console.log('All records deleted')
  } catch (error) {
    console.error('error in clearing tables: ', error)
  }
}

const syncData = async (database, data) => {
  try {
    await clearEveryTable(database)
    Object.keys(data).forEach(ele => {
      data[ele].forEach(record => {
        console.log('ele: ', ele)
        modelCreatorMapper[ele](database, record)
      })
    })
  } catch (error) {
    console.error('error in syncData: ', error)
  }
}

export {
  syncData
}
