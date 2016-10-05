/**
 * # Backend.js
 *
 * Abstract Base class for Backend support
 *
 */
'use strict'
/**
 * ## Async support
 *
 */
require('regenerator/runtime')

export default class Backend {
  /**
   * ### signup
   *
   * @param data object
   *
   * {login: "foo@gmail.com" or mobile number}
   *
   * @return
   * if ok,
   *{
   *"status": "success",
   *"password": "713b8d",
   *"message": "Учетная запись зарегистрирована. Пароль выслан вам на указанный email адрес."
   *}
   * if error,
   {
    "status": "error",
      "error": {
      "login": "Введите корректный email или номер телефона"
    },
      "message": "Введите корректный email или номер телефона"
      }
  signup (data) {
  }
 /**

   * ### login
   * encode the data and and call _fetch
   *
   * @param data
   *
   *  {login: "barton@lll.rr or +79200047779, password: "Passw0rd!"}
   *
   * @returns
   * error:
   *{"status": "error"}
   * success
   * c{
   *"status": "success",
   *"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNDc1NjcwMDA3fQ.fIHVG8z3fbArsg6PoGJBqCHjSpvkM3iW_gJuhCOFiuw"
   *}
   *
   */
  login (data) {

  }
  /**
   * ### logout
   * prepare the request and call _fetch
   */
  logout () {

  }
  /**
   * ### resetPassword
   * the data is already in a JSON format, so call _fetch
   *
   * @param data
   * {email: "barton@foo.com"}
   *
   * @returns empty object
   *
   * if error:  {code: xxx, error: 'message'}
   */
  resetPassword (data) {

  }
  /**
   * ### getProfile
   * Using the sessionToken, we'll get everything about
   * the current user.
   *
   * @returns
   *
   * if good:
   * {createdAt: "2015-12-30T15:29:36.611Z"
   *  email: "barton@acclivyx.com"
   *  objectId: "Z4yvP19OeL"
   *  sessionToken: "r:uFeYONgIsZMPyxOWVJ6VqJGqv"
   *  updatedAt: "2015-12-30T15:29:36.611Z"
   *  login: "barton"}
   *
   * if error, {code: xxx, error: 'message'}
   */
  getProfile () {
  }
  /**
   * ### updateProfile
   * for this user, update their record
   * the data is already in JSON format
   *
   * @param userId
   * @param data object:
   * {login: "barton", email: "barton@foo.com"}
   */
  updateProfile (userId, data) {
  }

}
