
'use strict'

import {Record} from 'immutable'
const {
  TASKLIST
} = require('../../lib/constants').default

const Form = Record({
  state: TASKLIST,
  tasklist: [
    [1097, 'Передать данные в Сов.налоговую', 'В работе', '08.09.2016']
  ],
  disabled: false,
  error: null,
  isValid: false,
  isFetching: false,
  fields: new (Record({
    taskId: '',
    taskTitle: '',
    taskStatus: '',
    taskDa: ''
  }))
})

/**
 * ## InitialState
 * The form is set
 */
var InitialState = Record({
  form: new Form()
})

export default InitialState
