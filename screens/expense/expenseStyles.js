import {
  StyleSheet
} from 'react-native'

import { colors } from '../../constants'

export default StyleSheet.create({
  appbar: {
    backgroundColor: colors.brightBlue,
    alignItems: 'center'
  },
  whiteColor: {
    color: colors.white
  },
  formContainer: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingTop: 16,
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingTop: 12
  },
  secondaryButton: {
    marginRight: 4
  },
  primaryButton: {
    marginLeft: 4,
    color: 'red'
  },
  secondaryButtonView: {
    flexBasis: '50%'
  },
  primaryButtonView: {
    flexBasis: '50%',
  },
  viewContainer: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: colors.brightBlue
  },
  upperSection: {
    backgroundColor: colors.brightBlue,
    paddingTop: 16,
    paddingBottom: 16
  },
  content: {
    paddingLeft: 16,
    color: colors.white
  },
  transactionTypeIcon: {
    marginBottom: 'auto',
    marginTop: 'auto',
    paddingLeft: 8,
    paddingRight: 8
  },
  rightListItem: {
    marginBottom: 'auto',
    marginTop: 'auto',
    paddingRight: 16
  },
  itemName: {
    fontSize: 16
  },
  cashColor: {
    color: colors.currencyGreen
  },
  upiColor: {
    color: colors.upiOrange
  },
  netbankingColor: {
    color: colors.netbankingBlue
  },
  listItem: {
    padding: 4
  },
  surface: {
    margin: 16,
    // width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    height: 80,
    // width: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    // flex: 1, 
    flexDirection: 'row'
  },
  surfaceContainer: {
    flex: 1, 
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // // alignContent: 'center', 
    // justifyContent: 'center',
    // backgroundColor: 'yellow'
  }
})
