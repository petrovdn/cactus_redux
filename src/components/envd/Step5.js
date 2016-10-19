
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
      factor1: this.props.factor1,
      factor2: this.props.factor2,
      factor3: this.props.factor3,
      taxRate: this.props.taxRate,
      k2: this.props.k2
    }
  }

  onPressForvard () {
    this.props.handleSteps('forvard', 'step5', this.state)
  }
  onPressBack () {
    this.props.handleSteps('back', 'step5')
  }

  render () {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navBarStyle}
          title={{
            title: 'ЕНВД за ?? квартал (3 из 6)',
            tintColor: 'white'
          }}
          leftButton={{
            title: '<',
            tintColor: 'white',
            handler: this.onPressBack.bind(this)
          }} />
        <View style={styles.containerData}>
          <View style={styles.boxHor}>
            <View>
              <Text>Базовая доходность</Text>
              <Text style={styles.textBig}>{this.props.taxBase} рублей</Text>
            </View>
            <View>
              <Text style={styles.textBigBig}> ? </Text>
            </View>
          </View>
          <View style={styles.boxVer}>
            <Text>Площадь торгового зала</Text>
            <View style={styles.boxHor}>
              <TextInput
                style={styles.factors} onChangeText={(data) => this.setState({factor1: Number(data)})}
                value={String(this.state.factor1)}
                placeholder='ИЮН' />
              <TextInput
                style={styles.factors} onChangeText={(data) => this.setState({factor2: Number(data)})}
                value={String(this.state.factor2)}
                placeholder='ИЮЛ' />
              <TextInput
                style={styles.factors} onChangeText={(data) => this.setState({factor3: Number(data)})}
                value={String(this.state.factor3)}
                placeholder='АВГ' />
            </View>
          </View>
          <View style={styles.boxHor}>
            <View>
              <Text>k1 (2016 год)</Text>
              <Text style={styles.textBig}>1,7980</Text>
            </View>
            <View>
              <Text style={styles.textBigBig}> ? </Text>
            </View>
          </View>
          <View style={styles.boxHor}>
            <View style={{flex: 2}}>
              <Text>k2</Text>
              <TextInput
                style={styles.factors} onChangeText={(data) => this.setState({k2: Number(data)})}
                value={String(this.state.k2)}
                placeholder='К2' />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.textBigBig}> ? </Text>
            </View>
            <View style={{flex: 2}}>
              <Text>Ставка налога</Text>
              <TextInput
                style={styles.factors} onChangeText={(data) => this.setState({taxRate: Number(data)})}
                value={String(this.state.taxRate)}
                placeholder='К2' />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.textBigBig}> ? </Text>
            </View>
          </View>
          <View style={styles.boxHor}>
            <Text> чек </Text>
            <Text> неполный период </Text>
            <Text> галка </Text>
          </View>
          <View style={styles.boxHor}>
            <View>
              <Text>Сумма налога</Text>
              <Text style={styles.textBig}>0 рублей</Text>
            </View>
            <View>
              <Text style={styles.textBigBig}> ? </Text>
            </View>
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
    backgroundColor: 'white',
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
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
  textBig: {
    fontSize: 22,
    fontWeight: '500'
  },
  textBigBig: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center'
  },
  factors: {
    flex: 1,
    height: 42,
    padding: 4,
    margin: 5,
    fontSize: 18,
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
