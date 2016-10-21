
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

  onPress (state) {
    switch (state) {
      case 'ENVD':
        Actions.EnvdBox()
        break
      case 'Profile':
        Actions.Profile()
        break
      case 'Logout':
        Actions.Logout()
        break
    }
    this.props.closeDrawer()
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.onPress('ENVD')}>
          <Text style={styles.textButton}>Отчетность ЕНВД</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.onPress('Profile')}>
          <Text style={styles.textButton}>Профиль</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.onPress('Logout')}>
          <Text style={styles.textButton}>Выйти</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1
  },
  button: {
    margin: 10,
    padding: 5
  },
  textButton: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500'
  }
})
