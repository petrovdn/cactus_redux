/**
 * # Main.js
 *  This is the main app screen
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * The actions we need
 */
import * as repboxActions from '../reducers/repbox/repboxActions'
import * as globalActions from '../reducers/global/globalActions'
import * as profileActions from '../reducers/profile/profileActions'

/**
 * Router
 */
import {Actions} from 'react-native-router-flux'

/**
 * The Header will display a Image and support Hot Loading
 */
import Header from '../components/Header'

/**
 * The components needed from React
 */
import React, {Component} from 'react'
import
{
  StyleSheet,
  View,
  Text
}
from 'react-native'

import ReplistRender from '../components/ReplistRender'
import RepEditRender from '../components/RepEditRender'

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button')

/**
 *  Instead of including all app states via ...state
 *  One could explicitly enumerate only those which Main.js will depend on.
 *
 */
function mapStateToProps (state) {
  return {
    repbox: {
      form: {
        state: state.repbox.form.state,
        isFetching: state.repbox.form.isFetching,
        replist: state.repbox.form.replist
      }
    },
    global: {
      currentUser: state.global.currentUser
    }
  }
};

/*
 * Bind all the actions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...repboxActions, ...globalActions, ...profileActions }, dispatch)
  }
}

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

class RepBox extends Component {

  handlePressAddRep () {
    this.props.actions.repeditState('Add')
  }
  handlePressGetList () {
    this.props.actions.getReplist(this.props.global.currentUser)
  }
  /**
   * ### componentDidMount
   *
   * During Hot Loading, when the component mounts due the state
   * immediately being in a "logged in" state, we need to just set the
   * form fields.  Otherwise, we need to go fetch the fields
   */
  componentDidMount () {
    //this.props.actions.getTasklist(this.props.global.currentUser)
  }

  render () {
    if (this.props.repbox.form.state === 'REPLIST') {
      return (
        <View style={styles.container}>
          <View>
            <Header isFetching={this.props.repbox.form.isFetching}
              showState={this.props.global.showState}
              currentState={this.props.global.currentState}
              onGetState={this.props.actions.getState}
              onSetState={this.props.actions.setState} />
            <Button style={styles.button} onPress={this.handlePressGetList.bind(this)}>
              {I18n.t('repbox.getlist')}
            </Button>
            <Button style={styles.button} onPress={this.handlePressAddRep.bind(this)}>
              {I18n.t('repbox.addrep')}
            </Button>
            <ReplistRender replist={this.props.repbox.form.replist} />
          </View>
        </View>
    )
  } else if (this.props.repbox.form.state === 'REPEDIT') {
      return (
        <View style={styles.container}>
          <View>
            <Header isFetching={this.props.repbox.form.isFetching}
              showState={this.props.global.showState}
              currentState={this.props.global.currentState}
              onGetState={this.props.actions.getState}
              onSetState={this.props.actions.setState} />
            <RepEditRender
              onCancel={this.props.actions.replistState}
              onSave = {this.props.actions.addReport}
              onSend = {this.props.actions.addReport}

             />
          </View>
        </View>
        )
    }
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    marginBottom: 80,
    flexDirection: 'column',
    flex: 1
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#6ec740',
    borderColor: '#6ec740',
    marginLeft: 10,
    marginRight: 10
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepBox)
