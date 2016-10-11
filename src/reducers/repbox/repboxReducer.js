/**
 * # authReducer.js
 *
 * The reducer for all the actions from the various log states
 */
'use strict'
/**
 * ## Imports
 * The InitialState for auth
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */
const InitialState = require('./repboxInitialState').default
const fieldValidation = require('../../lib/fieldValidation').default
const formValidation = require('./repboxFormValidation').default

/**
 * ## Auth actions
 */
const {
  REPLIST,
  REPEDIT,

  REPLIST_REQUEST,
  REPLIST_SUCCESS,
  REPLIST_FAILURE,

  ADDREP_REQUEST,
  ADDREP_SUCCESS,
  ADDREP_FAILURE

 } = require('../../lib/constants').default

const initialState = new InitialState()
/**
 * ## authReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */

export default function repboxReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {

    case REPLIST:
    case REPEDIT:
      return formValidation(
        state.setIn(['form', 'state'], action.type)
        .setIn(['form', 'error'], null)
      )

    case REPLIST_REQUEST:
      let nextState = state.setIn(['form', 'isFetching'], true)
      .setIn(['form', 'error'], null)
      return nextState

    case REPLIST_SUCCESS:
      return state.setIn(['form', 'replist'], action.payload)
        .setIn(['form', 'isFetching'], false)
    case REPLIST_FAILURE:
      return state.setIn(['form', 'isFetching'], false)
      .setIn(['form', 'error'], action.payload)
  }// switch
  /**
  * # Default
  */
  return state
}
