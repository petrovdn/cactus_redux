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

const BackendFactory = require('../../lib/BackendFactory').default
import {appAuthToken} from '../../lib/AppAuthToken'
import {Actions} from 'react-native-router-flux'

/**
 * ## State actions
 * controls which form is displayed to the user
 * as in envdlist, envdedit
 */

export function envdlistState () {
  return {
    type: ENVDLIST
  }
}

export function step1State () {
  return {
    type: STEP1
  }
}

export function addStep1Data (data) {
  return {
    type: ADD_STEP1_DATA,
    payload: data
  }
}

export function step2State () {
  return {
    type: STEP2
  }
}

export function addStep2Data (data) {
  return {
    type: ADD_STEP2_DATA,
    payload: data
  }
}

export function step3State () {
  return {
    type: STEP3
  }
}

export function addStep3Data (activityType, taxBase) {
  return {
    type: ADD_STEP3_DATA,
    payload: {
      activityType, taxBase
    }
  }
}

export function step4State () {
  return {
    type: STEP4
  }
}

export function addStep4Data (data) {
  return {
    type: ADD_STEP4_DATA,
    payload: data
  }
}

export function step5State () {
  return {
    type: STEP5
  }
}

export function addStep5Data (data) {
  return {
    type: ADD_STEP5_DATA,
    payload: data
  }
}

export function step6State () {
  return {
    type: STEP6
  }
}

export function step7State () {
  return {
    type: STEP7
  }
}

export function step8State () {
  return {
    type: STEP8
  }
}

/**
 * ## envdlist actions
 */
export function getEnvdListRequest () {
  return {
    type: ENVDLIST_REQUEST
  }
}

export function getEnvdListSuccess (envdlist) {
  return {
    type: ENVDLIST_SUCCESS,
    payload: envdlist
  }
}
export function getEnvdListFailure (error) {
  return {
    type: ENVDLIST_FAILURE,
    payload: error
  }
}
/**
 * ## envdlist
 * hz
 */
// export function getEnvdList (sessionToken) {
//   return dispatch => {
//     dispatch(getEnvdListRequest())
//    // store or get a sessionToken
//     return appAuthToken.getSessionToken(sessionToken)
//      .then((token) => {
//        return BackendFactory(token).getEnvdList()
//      })
//      .then((json) => {
//        dispatch(getEnvdListSuccess(json))
//      })
//      .catch((error) => {
//        dispatch(getEnvdListFailure(error))
//      })
//   }
// }

export function getEnvdList (sessionToken) {
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
    dispatch(getEnvdListRequest())

    setTimeout(() => {
      dispatch(getEnvdListSuccess(listViewData))
    }, 1000)
  }
}

/**
 * ## Activitylist actions
 */
export function getActivitylistRequest () {
  return {
    type: ACTIVITY_LIST_REQUEST
  }
}

export function getActivitylistSuccess (Activitylist) {
  return {
    type: ACTIVITY_LIST_SUCCESS,
    payload: Activitylist
  }
}
export function getActivitylistFailure (error) {
  return {
    type: ACTIVITY_LIST_FAILURE,
    payload: error
  }
}
/**
 * ## activitylist
 * hz
 */
// export function getActivitylist(sessionToken) {
//   return dispatch => {
//     dispatch(getActivitylistRequest())
//    // store or get a sessionToken
//     return appAuthToken.getSessionToken(sessionToken)
//      .then((token) => {
//        return BackendFactory(token).getActivitylist()
//      })
//      .then((json) => {
//        dispatch(getActivitylistSuccess(json))
//      })
//      .catch((error) => {
//        dispatch(getActivitylistFailure(error))
//      })
//   }
// }

export function getActivitylist (sessionToken) {
  var listViewData = [
      [1, '01', 7500, 'Бытовые услуги', 'Оказание бытовых услуг'],
      [2, '02', 7500, 'Ветеринарные услуги', 'Оказание ветеринарных услуг'],
      [3, '03', 12000, 'Услуги для автовладельцев', 'Оказание услуг по ремонту, техническому обслуживанию и мойке автомототранспортных средств'],
      [4, '04', 50, 'Стоянка и хранение автотранспорта', 'Оказание услуг по предоставлению во временное владение (в пользование) мест для стоянки автомототранспортных средств, а также по хранению автомототранспортных средств на платных стоянках'],
      [5, '05', 6000, 'Перевозка грузов на автотранспорте', 'Оказание автотранспортных услуг по перевозке грузов'],
      [6, '06', 1500, 'Перевозка пассажиров на автотранспорте', 'Оказание автотранспортных услуг по перевозке пассажиров'],
      [7, '07', 1800, 'Розничная торговля в торговых залах', 'Розничная торговля, осуществляемая через объекты стационарной торговой сети, имеющие торговые залы'],
      [8, '08', 9000, 'Нестационарная торговля на площади до 5м2', 'Розничная торговля, осуществляемая через объекты стационарной торговой сети, не имеющие торговых залов, а также через объекты нестационарной торговой сети, площадь торгового места в которых не превышает 5 квадратных метров']
  ]
  return dispatch => {
    dispatch(getActivitylistRequest())
    setTimeout(() => {
      dispatch(getActivitylistSuccess(listViewData))
    }, 1000)
  }
}


/**
 * ## addTask actions
 */
export function addEnvdRequest () {
  return {
    type: ADDENVD_REQUEST
  }
}

export function addEnvdSuccess () {
  return {
    type: ADDENVD_SUCCESS
  }
}
export function addEnvdFailure (error) {
  return {
    type: ADDENVD_FAILURE,
    payload: error
  }
}

/**
 * ## addEnvd
 * hz
 */
export function addEnvd (sessionToken, title) {
  return dispatch => {
    dispatch(addEnvdRequest())
   // store or get a sessionToken
    return appAuthToken.getSessionToken(sessionToken)
     .then((token) => {
       return BackendFactory(token).addEnvd(title)
     })
     .then((json) => {
       dispatch(addEnvdSuccess(json))
     })
     .catch((error) => {
       dispatch(addEnvdFailure(error))
     })
  }
}
