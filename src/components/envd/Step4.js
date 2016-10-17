
'use strict'
import NavigationBar from 'react-native-navbar'
import React, {Component} from 'react'
import
{
  StyleSheet,
  View,
  Text,
  TouchableHighlight
}
from 'react-native'

import ErrorAlert from '../../components/ErrorAlert'
import formStylesheet from '../envd/formStylesheet'
import {Actions} from 'react-native-router-flux'

import t from 'tcomb-form-native'
let Form = t.form.Form

export default class extends Component {
  constructor (props) {
    super(props)
    this.errorAlert = new ErrorAlert()
    this.state = {
      value: props
    }
  }
  onChange (value) {
    this.setState({ value })
  }

  onPressForvard () {
    this.props.handleSteps('forvard', 'step4', this.state.value)
  }
  onPressBack () {
    this.props.handleSteps('back', 'step4')
  }

  render () {
    let Step4Form = t.struct({
      city: t.String,
      street: t.String,
      house: t.String,
      building: t.String,
      flat: t.String
    })
    let options = {
      auto: 'none',
      stylesheet: formStylesheet,
      fields: {
        city: {placeholder: 'Город, населенный пункт'},
        street: {placeholder: 'Улица'},
        house: {placeholder: 'Дом'},
        building: {placeholder: 'Корпус'},
        flat: {placeholder: 'Квартира'}
      }
    }

    return (
      <View style={styles.container}>
        <NavigationBar
          title={{title: 'Адрес деятельности (2 из 6)'}}
          leftButton={{
            title: '<-',
            handler: this.onPressBack.bind(this)
          }} />
        <View style={styles.containerData}>
          <View style={styles.inputs}>
            <Form
              ref='form'
              type={Step4Form}
              options={options}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              />
          </View>
          <TouchableHighlight style={styles.button}
            underlayColor='lavenderblush'
            onPress={() => this.onPressForvard()}>
            <Text style={styles.textButton}>Далее</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  containerData: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10
  },
  button: {
    backgroundColor: '#6ec740',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 5,
    padding: 5
  },
  textButton: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500'
  }
})
