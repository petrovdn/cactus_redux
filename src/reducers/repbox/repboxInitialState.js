
'use strict'

import {Record} from 'immutable'
const {
  REPLIST
} = require('../../lib/constants').default

const Form = Record({
  state: REPLIST,
  replist: [],
  disabled: false,
  error: null,
  isValid: false,
  isFetching: false,
  fields: new (Record({
    repId: '',
    repTitle: '',
    repStatus: ''
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
