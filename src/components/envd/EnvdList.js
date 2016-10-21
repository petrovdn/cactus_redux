import React, { Component } from 'react'
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

import CONFIG from '../../lib/config'
let Theme = CONFIG.COLOR_SCHEME.SCHEME_CURRENT

var moment = require('moment')
moment.locale('ru')

class ENVDrow extends React.Component {
    _onPressENVD (data) {
    // in case of activityType choose the action
      switch (data) {
        case 1:
          return

        case 2:
          this.props.addEnvd()
          return
      }
    }
    _onPressComplete () {

    }


  _getTaxDate (quarter) {
    switch (quarter) {
      case 1:
        return 'c 1 по 20 апреля'
      case 2:
        return 'c 1 по 20 июля'
      case 3:
        return 'c 1 по 20 октября'
      case 4:
        return 'c 1 по 20 января'
    }
  }
  _getActivityString (activityType) {
    switch (activityType) {
      case 1:
        return '<Text>Ожидается оформление</Text>'
      case 2:
        return 'c 1 по 20 июля'
      case 3:
        return 'c 1 по 20 октября'
      case 4:
        return 'c 1 по 20 января'
    }
  }
  render () {
    const ColorRed = Theme.COLOR_NAVBAR
    const ColorGreen = Theme.COLOR_BUTTON1
    const ColorGrey = 'grey'
    var actType = this.props.activityType
    // 1: ожидается оформление
    // 2: Нужно готовить
    // 3: Просрочено
    // 4: Завершено
    var quarter = this.props.quarter
    var year = this.props.year

    var colorLeft = (actType === 1 || actType === 4) ? ColorGrey : (actType === 2) ? ColorGreen : ColorRed
    var taxMonth = (quarter === 1) ? 3 : (quarter === 2) ? 6 : (quarter === 3) ? 9 : 0
    var taxYear = (quarter === 4) ? year + 1 : year
    var startDate = new Date(taxYear, taxMonth, 1)
    var taxDate = new Date(taxYear, taxMonth, 20)
    var payDate = new Date(taxYear, taxMonth, 25)
    var currentDate = moment(new Date())
    var daysForTax = Math.round((taxDate - currentDate) / 86400000)
    var daysForPay = Math.round((payDate - currentDate) / 86400000)
    var colorTax = (daysForTax <= 5) ? ColorRed : 'black'
    var colorPay = (daysForPay <= 5) ? ColorRed : 'black'

    return (
      <TouchableHighlight onPress={() => this._onPressENVD(this.props.acti)}
        underlayColor={'#AAA'}>
        <View style={styles.rowFront}>
          <View>
            <Text style = {{color: colorLeft}}> Отчет в налоговую и оплата ЕНВД {quarter} квартал {year} </Text>
            <Text> {this._getTaxDate(this.props.quarter)}</Text>
            <Text style = {{color: colorTax}}> Сдать в ИФНС до {moment(taxDate).format('D.MM.YYYY')} (осталось {daysForTax} дн.)</Text>
            <Text style = {{color: colorPay}}> Сдать в ИФНС до {moment(payDate).format('D.MM.YYYY')} (осталось {daysForPay} дн.)</Text>
            <Text> Доступно c  {moment(startDate).format('D.MM.YYYY')}</Text>

            <TouchableHighlight style={styles.buttonSmall}
              underlayColor='lavenderblush'
              onPress={() => this._onPressComplete()}>
              <Text style={styles.textButton}>Завершить</Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
         )
  }
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      listViewData: this.props.envdlist
    }
  }


    _onPressENVD (data) {
    // in case of activityType choose the action
      switch (data[3]) {
        case 1:
          return

        case 2:
          this.props.addEnvd()
          return
      }
    }
    _onPressComplete () {

    }

  deleteRow (secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({listViewData: newData})
  }

  componentWillReceiveProps (nextprops) {
    this.setState({ listViewData: nextprops.envdlist })
  }




  render () {
    return (
      <View style={styles.container}>
        <SwipeListView
          dataSource={this.ds.cloneWithRows(this.state.listViewData)}
          enableEmptySections
          renderRow={data => (
            <ENVDrow
              activityType={data[3]}
              year={data[1]}
              quarter={data[2]}
            />
      )}
      />
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Theme.COLOR_BACK
  },
  bottom: {
    flex: 1
  },
  rowFront: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    height: 200,
    backgroundColor: 'white'
  },
  buttonSmall: {
    backgroundColor: Theme.COLOR_BUTTON2,
    padding: 5,
    height: 30,
    width: 110,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center'
  }
})
