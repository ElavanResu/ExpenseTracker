import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import { Headline, Subheading, List, Title, Caption, Paragraph } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from '../expenseStyles'
import { rupeeFormatter } from '../../../genericComponents/specialFunctions'
import dayjs from 'dayjs'

const TodaysExpenseComponent = (props) => {
  const { todaysExpenses } = props
  const calculateTotalExpense = () => {
    let totalExpense = 0
    todaysExpenses.forEach(ele => {
      totalExpense = totalExpense + ele.cost
    })
    return rupeeFormatter(totalExpense)
  }
  console.log('')
  const transactionTypeMapper = {
    cash: {
      icon: 'account-balance-wallet',
      styles: styles.cashColor
    },
    upi: {
      icon: 'phonelink-ring',
      styles: styles.upiColor
    },
    netBanking: {
      icon: 'tv',
      styles: styles.netbankingColor
    }
  }
  const totalExpense = calculateTotalExpense()
  return (
    <View style={styles.viewContainer}>
      <View elevation={10} style={[styles.upperSection]}>
        <Subheading style={styles.content}>{dayjs().format('DD, MMM YYYY')}</Subheading>
        <Headline style={styles.content}>{`\u20B9 ${totalExpense}`}</Headline>
      </View>
      <ScrollView>
        {
          todaysExpenses.map((ele, index) => {
            return (
              <List.Item
                key={`expenseList${index}`}
                style={styles.listItem}
                title={<Caption style={styles.itemName}>{ele.item}</Caption>}
                description={<Headline>{`\u20B9 ${rupeeFormatter(ele.cost)}`}</Headline>}
                left={props => <Icon
                  size={32}
                  {...props}
                  style={[styles.transactionTypeIcon, transactionTypeMapper[ele.transactionType].styles]}
                  name={transactionTypeMapper[ele.transactionType].icon}
                  />
                }
                // right={props => <Subheading
                //   style={styles.rightListItem}
                //   >
                //     {ele.purchasedBy}
                //   </Subheading>}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default TodaysExpenseComponent
