
'use strict'
import NavigationBar from 'react-native-navbar'
import React, {Component} from 'react'
import
{
  StyleSheet,
  View,
  Text,
  Image,
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
      k2: this.props.k2,
      taxBeforeInsurance: this.props.taxBeforeInsurance
    }
  }

  onPressForvard () {
    this.props.handleSteps('forvard', 'step5', this.state)
  }
  onPressBack () {
    this.props.handleSteps('back', 'step5')
  }

  _onChange (val) {
    this.setState(val)
    let taxBeforeInsurance = +this.props.taxBase * (+this.state.factor1 + +this.state.factor2 + +this.state.factor3) * 1.7980 * +this.state.k2 * this.state.taxRate/100
    this.setState({ taxBeforeInsurance: taxBeforeInsurance })
  }

  render () {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navBarStyle}
          title={{
            title: 'ЕНВД за ?? квартал',
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
            <Image style={styles.mark}
              source={require('../../images/question.png')}
          />
          </View>
          <View style={[styles.boxVer, {marginRight: 20}, styles.line]}>
            <Text style={{marginTop: 10}}>Площадь торгового зала</Text>
            <View style={styles.boxHorMargin}>
              <TextInput
                style={styles.factors} onChangeText={(data) => this._onChange({factor1: +data})}
                value={this.state.factor1}
                placeholder='ИЮЛЬ' />
              <TextInput
                style={styles.factors} onChangeText={(data) => this._onChange({factor2: +data})}
                value={this.state.factor2}
                placeholder='АВГУСТ' />
              <TextInput
                style={styles.factors} onChangeText={(data) => this._onChange({factor3: +data})}
                value={this.state.factor3}
                placeholder='СЕНТЯБРЬ' />
            </View>
          </View>
          <View style={[styles.boxHorMargin, styles.line]}>
            <View style={styles.boxVer}>
              <Text style={{marginTop: 10}}>K1 (за 2016 год)       (К2)              Ставка налога</Text>
              <View style={styles.boxHorMargin}>
                <TextInput
                  style={styles.factors}
                  editable={false}
                  value={'1,7980'}
                  />
                <TextInput
                  keyboardType='numeric'
                  style={styles.factors} onChangeText={(data) => this._onChange({k2: +data})}
                  value={this.state.k2}
                  placeholder='K2' />
                <TextInput
                  style={styles.factors} onChangeText={(data) => this._onChange({taxRate: +data})}
                  value={this.state.factor3}
                  placeholder='%' />
              </View>
            </View>
          </View>
          <View style={[styles.boxHor, styles.line, {backgroundColor: Theme.COLOR_BACK2, marginRight: 20}]}>
            <View style={{flex: 2}}>
              <Text style={styles.rightBottomText}>Сумма налога</Text>
              <Text style={styles.textBig}>{this.state.taxBeforeInsurance} рублей</Text>
            </View>
            <View style={styles.rightBottomBox}>
              <Text style={styles.rightBottomText}></Text>
            </View>
          </View>
        </View>
        <TouchableHighlight style={styles.button}
          underlayColor='lavenderblush'
          onPress={() => this.onPressForvard()}>
          <Text style={styles.textButton}>3 / 6      ПРОДОЛЖИТЬ</Text>
        </TouchableHighlight>
      </View>
    )
  }
}






//

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
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 20
  },
  boxHor: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxHorMargin: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 20
  },
  boxVer: {
    flex: 1,
    flexDirection: 'column'
  },
  textBig: {
    fontSize: 22,
    fontWeight: 'bold'
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
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: Theme.COLOR_LINE
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
  },
  mark: {
    height: 55,
    width: 55
  },
  line: {
    borderTopColor: Theme.COLOR_LINE,
    borderTopWidth: 2
  },
  rightBottomBox: {
    padding: 10
  },
  rightBottomText: {
    borderLeftColor: Theme.COLOR_LINE,
    borderLeftWidth: 2
  }
})
