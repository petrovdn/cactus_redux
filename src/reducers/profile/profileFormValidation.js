/**
 * # profileFormValidation.js
 *
 * This class determines only if the form is valid
 * so that the form button can be enabled.
 * if all the fields on the form are without error,
 * the form is considered valid
 */
'use strict'

/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 *
 * As there are only two fields, the form is valid if they are
 */
export default function formValidation (state) {
  if (state.form.fields.inn !== '' &&
      state.form.fields.surname !== '' &&
      state.form.fields.name !== '' &&
      state.form.fields.middlename !== '' &&
      state.form.fields.adress !== '' &&
      state.form.fields.okved !== '' &&
      state.form.fields.phone !== '' &&
        (state.form.fields.inn !== state.form.originalProfile.inn ||
          state.form.fields.surname !== state.form.originalProfile.surname ||
          state.form.fields.name !== state.form.originalProfile.name ||
          state.form.fields.middlename !== state.form.originalProfile.middlename ||
          state.form.fields.adress !== state.form.originalProfile.adress ||
          state.form.fields.okved !== state.form.originalProfile.okved ||
         state.form.fields.phone !== state.form.originalProfile.phone)
       ) {
    return state.setIn(['form', 'isValid'], true)
  } else {
    return state.setIn(['form', 'isValid'], false)
  }
}
