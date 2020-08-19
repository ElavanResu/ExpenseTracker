import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
// import RNFS from 'react-native-fs'
import RNFetchBlob from 'rn-fetch-blob'

import styles from '../settingsStyles'
import { syncData } from '../../../models/Sync'

const SettingsComponent = (props) => {
  const filePath = RNFetchBlob.fs.dirs.DownloadDir + '/ExpenseTrackerBackups'
  const importDatabase = async () => {
    try {
      RNFetchBlob.fs.readFile(filePath + '/backup.txt')
      .then(response => {
        console.log('syncData called')
        syncData(props.database, JSON.parse(response))
      })
      .catch(error => {
        console.log('error in reading the file: ', error)
      })
    } catch (error) {
      console.log('error in import database: ', error)
    }
  }

  const createBackUpData = () => {
    const { allExpenses } = props
    const expenses = []
    allExpenses.forEach(ele => {
      expenses.push({
        item: ele.item,
        cost: ele.cost,
        category: ele.category,
        purchaseDate: ele.purchaseDate,
        transactionType: ele.transactionType,
        note: ele.note
      })
    })
    return {expenses}
  }
  const exportDatabase = async () => {
    try {
      RNFetchBlob.fs.mkdir(filePath)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        console.log('error in creating directory: ', error)
      })

      const data = createBackUpData()
      console.log('data: ', data)
      RNFetchBlob.fs.createFile(filePath + '/backup.txt', JSON.stringify(data), 'utf8')
      .then(response => {
        console.log('response of create file: ', response)
      })
      .catch(error => {
        console.log('error in creating file: ', error)
      })
    } catch (error) {
      console.log('Error in exportDatabase: ', error)
    }
  }
  return (
    <View>
      <Button mode='contained' onPress={exportDatabase}>Export</Button>
      <Button onPress={importDatabase}>Import</Button>
    </View>
  )
}

export default SettingsComponent
