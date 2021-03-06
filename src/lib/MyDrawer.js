import React, {Component} from 'react'
import Drawer from 'react-native-drawer'
import SideMenu from './SideMenu'
import {Actions, DefaultRenderer} from 'react-native-router-flux'

export default class extends Component {

  closeDrawer () {
    this._drawer.close()
  }

  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        open={state.open}
        onOpen={() => Actions.refresh({key: state.key, open: true})}
        onClose={() => Actions.refresh({key: state.key, open: false})}
        type='displace'
        content={<SideMenu closeDrawer={this.closeDrawer.bind(this)} />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) }
        })}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
      )
  }
}
