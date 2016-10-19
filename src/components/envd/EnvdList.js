import React, { Component } from 'react'
import {
  Alert,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native'
import NavigationBar from 'react-native-navbar'
import { SwipeListView } from 'react-native-swipe-list-view'
var I18n = require('react-native-i18n')
import Translations from '../../lib/Translations'
I18n.translations = Translations

import CONFIG from '../../lib/config'
let Theme = CONFIG.COLOR_SCHEME.SCHEME_CURRENT

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
    const ColorGrey = Theme.COLOR_BUTTON2
    var actType = this.props.activityType
    var colorLeft = (actType === 1||actType === 4)? ColorGrey:(actType === 2)? ColorGreen:ColorRed
    if (actType === 1) {

    }
    var currentDate = new Date()
    var currentMonth = currentDate.getMonth()
    var currentDay = currentDate.getDay()



    return (
      <TouchableHighlight onPress={() => this._onPressENVD(this.props.acti)}
        underlayColor={'#AAA'}>
        <View style={styles.rowFront}>
          <View>
            <Text> Отчет в налоговую и оплата ЕНВД {this.props.quarter} квартал {this.props.year} </Text>
            <Text> {this._getTaxDate(this.props.quarter)}</Text>
            <Text> Статус: {this._getActivityString(this.props.activityType)}</Text>
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
    padding: 5
  },
  bottom: {
    flex: 1
  },
  rowFront: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    backgroundColor: '#CCC',
    borderBottomColor: 'darkgreen',
    borderBottomWidth: 1,
    height: 100
  },
  rowBack: {
    alignItems: 'stretch',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 100
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 110
  },
  backRightBtnRight: {
    backgroundColor: 'darkgreen',
    right: 0
  },
  backTextWhite: {
    color: 'white'
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
