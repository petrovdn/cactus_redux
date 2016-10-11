/**
 * # taskboxActions.js
 *
 * All the request actions have 3 variations, the request, a success
 * and a failure. They all follow the pattern that the request will
 * set the ```isFetching``` to true and the whether it's successful or
 * fails, setting it back to false.
 *
 */
'use strict'

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

const BackendFactory = require('../../lib/BackendFactory').default
import {appAuthToken} from '../../lib/AppAuthToken'

/**
 * ## State actions
 * controls which form is displayed to the user
 * as in replist, repedit
 */

export function replistState () {
  return {
    type: REPLIST
  }
}
export function repeditState () {
  return {
    type: REPEDIT
  }
}

/**
 * ## tasklist actions
 */
export function getReplistRequest () {
  return {
    type: REPLIST_REQUEST
  }
}

export function getReplistSuccess (replist) {
  return {
    type: REPLIST_SUCCESS,
    payload: replist
  }
}
export function getReplistFailure (error) {
  return {
    type: REPLIST_FAILURE,
    payload: error
  }
}
/**
 * ## replist
 * hz
 */
// export function getReplist (sessionToken) {
//   return dispatch => {
//     dispatch(getReplistRequest())
//    // store or get a sessionToken
//     return appAuthToken.getSessionToken(sessionToken)
//      .then((token) => {
//        return BackendFactory(token).getReplist()
//      })
//      .then((json) => {
//        dispatch(getReplistSuccess(json))
//      })
//      .catch((error) => {
//        dispatch(getReplistFailure(error))
//      })
//   }
// }

export function getReplist (sessionToken) {
  var listViewData = [
      [1, 2015, 'Отчет в налоговую и оплана ЕНВД I квартал', 'c 1 по 20 апреля', 'Завершено'],
      [2, 2015, 'Отчет в налоговую и оплана ЕНВД II квартал', 'c 1 по 20 июля', 'Завершено'],
      [3, 2015, 'Отчет в налоговую и оплана ЕНВД III квартал', 'c 1 по 20 октября', 'Завершено'],
      [4, 2015, 'Отчет в налоговую и оплана ЕНВД IV квартал', 'c 1 по 20 января 2016', 'Завершено'],
      [1, 2016, 'Отчет в налоговую и оплана ЕНВД I квартал', 'c 1 по 20 апреля', 'Завершено'],
      [2, 2016, 'Отчет в налоговую и оплана ЕНВД II квартал', 'c 1 по 20 июля', 'Просрочено'],
      [3, 2016, 'Отчет в налоговую и оплана ЕНВД III квартал', 'c 1 по 20 октября', 'Сдать и оплатить'],
      [4, 2016, 'Отчет в налоговую и оплана ЕНВД IV квартал', 'c 1 по 20 января 2017', 'Ожиается оформление']
  ]
  return dispatch => {
    dispatch(getReplistRequest())

    setTimeout(() => {
      dispatch(getReplistSuccess(listViewData))
    }, 1000)
  }
}

/**
 * ## addTask actions
 */
export function addRepRequest () {
  return {
    type: ADDREP_REQUEST
  }
}

export function addRepSuccess () {
  return {
    type: ADDREP_SUCCESS
  }
}
export function addRepFailure (error) {
  return {
    type: ADDREP_FAILURE,
    payload: error
  }
}
/**
 * ## addReport
 * hz
 */
export function addReport (sessionToken, title) {
  return dispatch => {
    dispatch(addRepRequest())
   // store or get a sessionToken
    return appAuthToken.getSessionToken(sessionToken)
     .then((token) => {
       return BackendFactory(token).addReport(title)
     })
     .then((json) => {
       dispatch(addRepSuccess(json))
     })
     .catch((error) => {
       dispatch(addRepFailure(error))
     })
  }
}
