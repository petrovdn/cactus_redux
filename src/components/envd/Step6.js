
'use strict'
import NavigationBar from 'react-native-navbar'
import React, {Component} from 'react'
import
{
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
}
from 'react-native'

import NumTextInput from 'react-native-num-textinput'

import CONFIG from '../../lib/config'
let Theme = CONFIG.COLOR_SCHEME.SCHEME_CURRENT

import ErrorAlert from '../../components/ErrorAlert'

function number_format (number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec)
      return '' + (Math.round(n * k) / k)
        .toFixed(prec)
    }
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1)
      .join('0')
  }
  return s.join(dec)
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.errorAlert = new ErrorAlert()
    this.state = {
      insurancePayments: this.props.taxBeforeInsurance,  // пока принимаем равным страховому взносу
      taxDecrease: this.props.taxDecrease,
      taxToPay: this.props.taxToPay
    }
  }

  onPressForvard () {
    this.props.handleSteps('forvard', 'step6', this.state)
  }
  onPressBack () {
    this.props.handleSteps('back', 'step6')
  }

  render () {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navBarStyle}
          title={{
            title: 'Страховые взносы',
            tintColor: 'white'
          }}
          leftButton={{
            title: '<',
            tintColor: 'white',
            handler: this.onPressBack.bind(this)
          }} />
        <View style={styles.containerData}>
        <View style={styles.boxHor}>
          <View style={styles.box1}>
            <Text style={styles.textBold}>Страховые взносы, уплаченные в {this.props.quarter} квартале {this.props.year} года</Text>
          </View>
          <View style={styles.box1}>
            <NumTextInput
              style={styles.inputs} onChangeText={(text) => this.onChange({factor1: text})}
              value={this.state.insurancePayments.toString() === '0' ? '' : this.state.insurancePayments.toString()}
              />
          </View>
        </View>
        <View style={styles.boxHor}>
          <View style={{flex: 2}}>
            <Text>Сумма налога может быть уменьшена на:</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.textBig}>19 356</Text>
          </View>
        </View>
        <View style={styles.boxHor}>
          <View style={{flex: 2}}>
            <Text>Сумма налога до учета страховых взносов:</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.textBig}>43 584</Text>
          </View>
        </View>
        <View style={styles.boxHor}>
          <View style={{flex: 2}}>
            <Text style={styles.textBold}>Сумма налога к уплате за вычетом страховых взносов:</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.textBig}>43 584</Text>
          </View>
        </View>

  </View>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.onPressForvard()}>
          <Text style={styles.textButton}>4 / 6      ПРОДОЛЖИТЬ</Text>
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
    backgroundColor: 'white',
    margin: 10,
    flex: 1,
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
  boxHor: {
    flex: 1,
    flexDirection: 'row'
  },
  boxVer: {
    flex: 1,
    flexDirection: 'column'
  },
  box2: {
    flex: 2
  },
  box1: {
    flex: 1
  },
  textBig: {
    fontSize: 22,
    fontWeight: '500'
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500'
  },
  inputs: {
    flex: 1,
    height: 42,
    padding: 4,
    margin: 20,
    fontSize: 22,
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
