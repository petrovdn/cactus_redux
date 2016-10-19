
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

import CONFIG from '../../lib/config'
let Theme = CONFIG.COLOR_SCHEME.SCHEME_CURRENT

import ErrorAlert from '../../components/ErrorAlert'

export default class extends Component {
  constructor (props) {
    super(props)
    this.errorAlert = new ErrorAlert()
    this.state = {
      factor1: this.props.factor1,
      factor2: this.props.factor2,
      factor3: this.props.factor3,
      taxRate: this.props.taxRate,
      k2: this.props.k2
    }
  }

  onPressForvard () {
    this.props.handleSteps('forvard', 'step7', this.state)
  }
  onPressBack () {
    this.props.handleSteps('back', 'step7')
  }

  render () {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navBarStyle}
          title={{
            title: 'Налоговая инспекция (5 из 6)',
            tintColor: 'white'
          }}
          leftButton={{
            title: '<',
            tintColor: 'white',
            handler: this.onPressBack.bind(this)
          }} />
        <View style={styles.containerData}>
          <View>
            <Text style={styles.text}>Необходимо указать ИФНС, в которой Вы состоите на учете в качестве
              <Text style={{fontWeight: 'bold'}}> плательщика ЕНВД</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.text}>ИФНС (определена автоматически):</Text>
          </View>
          <View>
            <Text style={styles.textBig}>№5258 ИФНС по Ленинскому району г. Нижнего Новгорода:</Text>
          </View>
          <View style={{margin: 40}}>
            <Text style={styles.textBig}>а тут такая оч. красивая карта)</Text>
          </View>
          <View>
            <Text style={styles.text}>603000, Нижний Новгород, ул. Ильинская, 52А. (831) 422-22-01</Text>
          </View>



  </View>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.onPressForvard()}>
          <Text style={styles.textButton}>Далее</Text>
        </TouchableHighlight>
      </View>
    )
  }
}






var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Theme.COLOR_BACK
  },
  navBarStyle: {
    backgroundColor: Theme.COLOR_NAVBAR,
    height: 60
  },
  containerData: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 8,
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowOpacity: 20,
    shadowRadius: 5
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10
  },
  textBig: {
    fontSize: 22,
    fontWeight: '500',
    borderWidth: 1
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  inputs: {
    flex: 1,
    height: 84,
    padding: 4,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    borderWidth: 1
  },
  button: {
    backgroundColor: Theme.COLOR_BUTTON2,
    padding: 15,
    height: 60
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
