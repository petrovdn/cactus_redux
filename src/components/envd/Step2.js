
'use strict'
import {Actions} from 'react-native-router-flux'
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

import CONFIG from '../../lib/config'
let Theme = CONFIG.COLOR_SCHEME.SCHEME_CURRENT

export default class extends Component {
  onPressForvard (isCopy) {
    this.props.handleSteps('forvard', 'step2')
  }
  onPressBack () {
    this.props.handleSteps('back', 'step2')
  }

  render () {
    return (
      <View>
      <NavigationBar
        style={styles.navBarStyle}
        title={{
          title: 'Скопировать данные?',
          tintColor: 'white'
        }}
        leftButton={{
          title: '<',
          tintColor: 'white',
          handler: this.onPressBack.bind(this)
        }} />
        <View style={styles.container}>
          <Text style={styles.textBig}>Скопировать данные предыдущего периода (2 Квартал 2015 года)?</Text>
          <TouchableHighlight style={styles.button}
            underlayColor='lavenderblush'
            onPress={() => this.onPressForvard(true)}>
            <Text style={styles.textButton}>Да, использовать данные предыдущего периода</Text>
          </TouchableHighlight>
          <Text style={styles.textSmall}> Информацию можно будет проверить и изменить</Text>
          <TouchableHighlight style={styles.button}
            underlayColor='lavenderblush'
            onPress={() => this.onPressForvard(false)}>
            <Text style={styles.textButton}>Нет, оформить декларацию заново</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Theme.COLOR_BACK
  },
  navBarStyle: {
    backgroundColor: Theme.COLOR_NAVBAR,
    height: 60
  },
  button: {
    backgroundColor: Theme.COLOR_BUTTON2,
    padding: 10,
    height: 60,
    borderRadius: 8,
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowOpacity: 20,
    shadowRadius: 5
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textBig: {
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
  textSmall: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14
  }
})
