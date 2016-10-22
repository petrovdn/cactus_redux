
'use strict'
import NavigationBar from 'react-native-navbar'
import React, {Component} from 'react'
import
{
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
}
from 'react-native'

import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as envdboxActions from '../reducers/envdbox/envdboxActions'
import * as globalActions from '../reducers/global/globalActions'

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...envdboxActions, ...globalActions }, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    global: {
      currentUser: state.global.currentUser,
    }
  }
}

class SideMenu extends Component {



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

  initializeServer () {
    this.props.actions.initializeServer(this.props.global.currentUser)
  }
  render () {
    return (
      <View style={styles.container}>
      <Image style={styles.logo}
        source={require('../images/logo.png')}
    />
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
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.initializeServer()}>
          <Text style={styles.textButton}>Инициализировать сервер</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
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
  },
  logo: {
    alignSelf: 'center',
    margin: 20,
    height: 70,
    width: 70
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
