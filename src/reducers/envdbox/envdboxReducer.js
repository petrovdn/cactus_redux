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
const InitialState = require('./envdboxInitialState').default
const fieldValidation = require('../../lib/fieldValidation').default
const formValidation = require('./envdboxFormValidation').default

/**
 * ## Auth actions
 */
const {
  ENVDLIST,
  STEP1,
  STEP2,
  STEP3,
  STEP4,
  STEP5,
  STEP6,
  STEP7,
  STEP8,

  ADD_STEP1_DATA,
  ADD_STEP2_DATA,
  ADD_STEP3_DATA,
  ADD_STEP4_DATA,
  ADD_STEP5_DATA,
  ADD_STEP6_DATA,
  ADD_STEP7_DATA,

  ENVDLIST_REQUEST,
  ENVDLIST_SUCCESS,
  ENVDLIST_FAILURE,

  ADDENVD_REQUEST,
  ADDENVD_SUCCESS,
  ADDENVD_FAILURE,

  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAILURE

 } = require('../../lib/constants').default

const initialState = new InitialState()
/**
 * ## authReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */

export default function envdboxReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {

    case ENVDLIST:
    case STEP1:
    case STEP2:
    case STEP3:
    case STEP4:
    case STEP5:
    case STEP6:
    case STEP7:
    case STEP8:
      return state.setIn(['form', 'state'], action.type)
        .setIn(['form', 'error'], null)

    case ADD_STEP1_DATA:
      return state.setIn(['form', 'fields', 'inn'], action.payload.inn)
      .setIn(['form', 'fields', 'lastName'], action.payload.lastName)
      .setIn(['form', 'fields', 'name'], action.payload.name)
      .setIn(['form', 'fields', 'patronymic'], action.payload.patronymic)
      .setIn(['form', 'fields', 'okved'], action.payload.okved)
        .setIn(['form', 'error'], null)
    case ADD_STEP3_DATA:
      return state.setIn(['form', 'fields', 'activityType'], action.payload.activityType)
      .setIn(['form', 'fields', 'taxBase'], action.payload.taxBase)
        .setIn(['form', 'error'], null)

    case ADD_STEP4_DATA:
      return state.setIn(['form', 'fields', 'address', 'city'], action.payload.city)
      .setIn(['form', 'fields', 'address', 'street'], action.payload.street)
      .setIn(['form', 'fields', 'address', 'house'], action.payload.house)
      .setIn(['form', 'fields', 'address', 'building'], action.payload.building)
      .setIn(['form', 'fields', 'address', 'flat'], action.payload.flat)
        .setIn(['form', 'error'], null)

    case ADD_STEP5_DATA:
      var factors = [action.payload.factor1, action.payload.factor2, action.payload.factor3]
      return state.setIn(['form', 'fields', 'factors'], factors)
          .setIn(['form', 'fields', 'k2'], action.payload.k2)
          .setIn(['form', 'fields', 'taxRate'], action.payload.taxRate)
          .setIn(['form', 'error'], null)

    case ENVDLIST_REQUEST:
      let nextState = state.setIn(['form', 'isFetching'], true)
      .setIn(['form', 'error'], null)
      return nextState

    case ENVDLIST_SUCCESS:
      return state.setIn(['form', 'envdlist'], action.payload)
        .setIn(['form', 'isFetching'], false)
    case ENVDLIST_FAILURE:
      return state.setIn(['form', 'isFetching'], false)
      .setIn(['form', 'error'], action.payload)

    case ACTIVITY_LIST_REQUEST:
      return state.setIn(['form', 'isFetching'], true)
        .setIn(['form', 'error'], null)

    case ACTIVITY_LIST_SUCCESS:
      return state.setIn(['form', 'Activitylist'], action.payload)
          .setIn(['form', 'isFetching'], false)

    case ACTIVITY_LIST_FAILURE:
      return state.setIn(['form', 'isFetching'], false)
      .setIn(['form', 'error'], action.payload)
  }// switch
  /**
  * # Default
  */
  return state
}
