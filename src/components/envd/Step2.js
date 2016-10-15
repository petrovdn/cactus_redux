
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
          title={{title: 'Скопировать данные? (2 из 6)'}}
          leftButton={{
            title: '<-',
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
    padding: 20
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
  },
  textBig: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
  textSmall: {
    textAlign: 'center',
    fontSize: 14
  }
})
