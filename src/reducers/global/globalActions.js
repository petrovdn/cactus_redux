/**
 * # globalActions.js
 *
 * Actions that are global in nature
 */
'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
const {
  SET_THEME,
  SET_SESSION_TOKEN,
  SET_STORE,
  SET_STATE,
  GET_STATE
} = require('../../lib/constants').default

import CONFIG from '../../lib/config'
let Theme = CONFIG.COLOR_SCHEME

export function setTheme (themeNumber) {
  return {
    type: SET_SESSION_TOKEN,
    payload: themeNumber
  }
}
/**
 * ## set the sessionToken
 *
 */
export function setSessionToken (sessionToken) {
  return {
    type: SET_SESSION_TOKEN,
    payload: sessionToken
  }
}
/**
 * ## set the store
 *
 * this is the Redux store
 *
 * this is here to support Hot Loading
 *
 */
export function setStore (store) {
  return {
    type: SET_STORE,
    payload: store
  }
}
/**
 * ## set state
 *
 */
export function setState (newState) {
  return {
    type: SET_STATE,
    payload: newState
  }
}
/**
 * ## getState
 *
 */
export function getState (toggle) {
  return {
    type: GET_STATE,
    payload: toggle
  }
}

export function setCurrendTheme (themeNumber) {
  let currentTheme = null
  switch (themeNumber) {
    case 1:
      currentTheme = Theme.THEME1
      break
    
  }
  return dispatch => {
    dispatch(setTheme (themeNumber))
     .then((json) => {
       dispatch(addEnvdSuccess(json))
     })
     .catch((error) => {
       dispatch(addEnvdFailure(error))
     })
  }
}
