'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} = React;

import NavigationBar from 'react-native-navbar'; 
import DrawerLayout from 'react-native-drawer-layout';
import Browse from './Browse';
import Messages from './Messages';
import Listings from './Listings';
import Orders from './Orders';
import Purchases from './Purchases';
import Settings from './Settings';

class AccountPage extends React.Component {

  _handleChange(x, event) {
    var newState = {};
    newState[x] = event.nativeEvent.text;
    this.setState(newState);
  }
  _openShelf(){
    this.refs['DRAWER'].openDrawer();
  }

  _linker(comp){
    this.props.navigator.push({
      component: comp
    });
  }

  render() {
    const leftButtonConfig = 
      <View>
        <TouchableHighlight
            onPress={this._openShelf.bind(this)}
            activeOpacity={1}
            underlayColor='#0d0d0d'>
            <Image resizeMode="cover"
              source={require('./ic_navigation_drawer.png')} style={styles.burger}/>
        </TouchableHighlight>
      </View>;

    const titleConfig =
      <View>
          <Text style={styles.navTitleText}>Account</Text>
      </View>;

    const navigationView = (
        <Image source={require('./dash.png')} style={styles.container}>
          <View style={styles.siteWrap}>
            <Image 
              resizeMode="stretch"
              source={require('./logoalt.png')} 
              style={styles.logo}/>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Browse)}> Browse </Text>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, AccountPage)}> Account </Text>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Messages)}> Messages </Text>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Listings)}> Listings </Text>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Orders)}> Orders </Text>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Purchases)}> Purchases </Text>
            <Text style={styles.sidebarLink} onPress={this._linker.bind(this, Settings)}> Settings </Text>
            <Text style={styles.sidebarLink}> Logout </Text>
          </View>
        </Image>);

    return(
      <DrawerLayout 
        drawerWidth={275}
        ref={'DRAWER'}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.contain}>
          <NavigationBar
            title={titleConfig}
            tintColor="black"
            leftButton={leftButtonConfig} />
        </View>
      </DrawerLayout>
    )
  }
};



var styles = StyleSheet.create({
  sidebarLink: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 32,
  },
  siteWrap: {
    flex: 1,
    marginLeft: 55,
    alignSelf: "flex-start",
  },
  logo: {
    width: 30,
    height: 30,
    marginTop: 90,
    marginBottom: 15,
  },
  burger: {
    marginLeft: 10,
    height: 22,
    width: 23,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },  
  navTitleText: {
    color: "white",
    fontSize: 18,
    marginBottom: 3.5,
  },
  contain: {
    backgroundColor: "white",
    flex: 1,
  }
});

export default AccountPage;