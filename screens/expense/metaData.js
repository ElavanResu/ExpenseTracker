const expenseSchema = {
  id: 'addExpenseForm',
  type: 'object',
  title: '',
  properties: {
    item: {
      id: 'item',
      title: 'Item',
      type: 'string'
    },
    cost: {
      id: 'cost',
      title: 'Cost',
      type: 'number'
    },
    category: {
      id: 'category',
      title: 'Category',
      tytpe: 'string',
      enum: [
        'food',
        'rent',
        'travel',
        'other'
      ],
      enumNames: [
        'Food',
        'Rent',
        'Travel',
        'Other'
      ]
    },
    purchaseDate: {
      id: 'purchaseDate',
      title: 'Purchased On',
      type: 'string'
    },
    transactionType: {
      id: 'transactionType',
      title: 'Transaction Type',
      type: 'string',
      // default: 'cash',
      enum: [
        'cash',
        'upi',
        'netBanking'
      ],
      enumNames: [
        'Cash',
        'UPI',
        'Net Banking'
      ]
    },
    note: {
      id: 'note',
      title: 'Note',
      type: 'string'
    }
  },
  required: [
    'item',
    'cost',
    'category',
    'purchaseDate'
  ]
}

const expenseUiSchema = {
  item: {
    'ui:widget': 'TextWidget'
  },
  cost: {
    'ui:widget': 'TextWidget',
    'ui:options': {
      inputType: 'number'
    }
  },
  category: {
    'ui:widget': 'SelectWidget'
  },
  purchaseDate: {
    'ui:widget': 'DateWidget',
    'ui:options': {
      min: 10,
      max: 0,
      type: 'year'
    }
  },
  transactionType: {
    'ui:widget': 'SelectWidget'
  },
  note: {
    'ui:widget': 'TextWidget'
  }
}

export {
  expenseSchema,
  expenseUiSchema
}