
import React, { Component } from 'react'
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import NavigationBar from 'react-native-navbar'

export default class extends Component {
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      listViewData: this.props.Activitylist,
      activityType: this.props.activityType,
      taxBase:this.props.taxBase
    }
  }
  componentWillReceiveProps (nextprops) {
    this.setState({
      listViewData: nextprops.Activitylist,
      activityType: this.props.activityType,
      taxBase:this.props.taxBase
    })
  }

  onPressForvard (isCopy) {
    this.props.handleSteps('forvard', 'step3', this.state.activityType, this.state.taxBase)
  }

  onPressBack () {
    this.props.handleSteps('back', 'step3')
  }

  deleteRow (secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({listViewData: newData})
  }

  _pressRow (data, secId, rowId, rowMap) {
    this.setState({
      activityType: data[0],
      taxBase: data[2]
    })
  }

  _renderRow (data, secId, rowId, rowMap) {
    if (data[0] !== this.state.activityType) {
      return (
        <TouchableHighlight onPress={() => this._pressRow(data, secId, rowId, rowMap)}
          underlayColor={'#AAA'}>
          <View style={styles.rowFront}>
            <View>
              <Text style={styles.rowText}>
                <Text style={{ color: 'rgb(252, 100, 75)' }}> {data[1]} </Text>
                {data[3]} </Text>
            </View>
          </View>
        </TouchableHighlight>
    )
    } else {
      return (
        <TouchableHighlight onPress={() => this._pressRow(data, secId, rowId, rowMap)}
          underlayColor={'#AAA'}>
          <View style={styles.rowFrontDetail}>
            <View >
              <Text style={styles.rowText}> {data[1]} {data[3]}</Text>
              <Text style={styles.rowDetail}> {data[4]}}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{title: 'Вид деятельности? (1 из 6)'}}
          leftButton={{
            title: '<-',
            handler: this.onPressBack.bind(this)
          }} />
        <SwipeListView
          dataSource={this.ds.cloneWithRows(this.state.listViewData)}
          enableEmptySections
          renderRow={(data, secId, rowId, rowMap) => this._renderRow(data, secId, rowId, rowMap)}
      />
      <TouchableHighlight style={styles.button}
        underlayColor='lavenderblush'
        onPress={() => this.onPressForvard()}>
        <Text style={styles.textButton}>Далее</Text>
      </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(240,240,240)'
  },
  rowFront: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgb(173,186,195)',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 10,
    shadowRadius: 10
  },
  rowFrontDetail: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgb(173,186,195)',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 10,
    shadowRadius: 10
  },
  rowText: {
    fontSize: 18,
    fontWeight: '500'
  },
  rowDetail: {
    marginTop:5,
    fontSize: 14
  },
  button: {
    backgroundColor: '#6ec740',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    padding: 5
  },
  textButton: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500'
  }
})
