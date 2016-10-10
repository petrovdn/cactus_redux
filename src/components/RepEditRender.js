import React, { Component, propTypes} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

const t = require('tcomb-form-native')
let Form = t.form.Form

const Button = require('apsl-react-native-button')

export default class extends Component {
  handlePressEdit () {

  }
  handlePressSave () {
    //this.props.actions.getTasklist(this.props.global.currentUser)
  }
  handlePressSend () {
    //this.props.actions.getTasklist(this.props.global.currentUser)
  }


  render () {
    let options = {
      fields: {
      }
    }

    let repTitle = {
      label: I18n.t('repedit.repTitle'),
      maxLength: 200,
      editable: true
    }

    let repeditForm = t.struct({
      repTitle: t.String
    })
    options.fields['repTitle'] = repTitle
    options.fields['repTitle'].placeholder = I18n.t('repedit.repTitlePlaceHolder')
    options.fields['repTitle'].autoCapitalize = 'none'

    return (
      <View style={styles.container}>

        <Form ref='repeditForm'
          type={repeditForm}
          options={options}
      />
      <Button style={styles.button} onPress={this.handlePressSend.bind(this)}>
        {I18n.t('repedit.sendButton')}
      </Button>
      <Button style={styles.button} onPress={this.handlePressSave.bind(this)}>
        {I18n.t('repedit.saveButton')}
      </Button>
      <Button style={styles.button} onPress={() => this.props.onCancel()}>
        {I18n.t('repedit.cancelButton')}
      </Button>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center'
  }
})
