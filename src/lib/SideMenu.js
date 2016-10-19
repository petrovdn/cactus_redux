
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

import {Actions} from 'react-native-router-flux'

export default class extends Component {

  onPress () {
    //this.props.closeDrawer()
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => { Actions.EnvdBox() }}>
          <Text style={styles.textButton}> Отчетность ЕНВД</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => Actions.Profile()}>
          <Text style={styles.textButton}>Профиль</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => Actions.Profile()}>
          <Text style={styles.textButton}>Параметры</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => Actions.Logout()}>
          <Text style={styles.textButton}>Выйти</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.onPress()}>
          <Text style={styles.textButton}>Закрыть меню</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1
  },
  button: {
    backgroundColor: '#6ec740',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    margin: 20,
    padding: 5,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 50,
    shadowRadius: 10
  },
  textButton: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500'
  }
})
