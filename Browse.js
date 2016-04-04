'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

import Login from './Login';
import Aboutios from './Aboutios';
import ddpClient from './ddpClient';
import Accounts from './accounts';
import NavigationBar from 'react-native-navbar'; 
import DrawerLayout from 'react-native-drawer-layout';


class Browse extends React.Component {

  _handleChange(x, event) {
    var newState = {};
    newState[x] = event.nativeEvent.text;
    this.setState(newState);
  }
  _openShelf(){
    this.refs['DRAWER'].openDrawer();
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
          <Text style={styles.navTitleText}>Browse</Text>
      </View>;

    const navigationView = (
        <Image source={require('./dash.png')} style={styles.container}>
          <View style={styles.siteWrap}>
            <Image 
              resizeMode="stretch"
              source={require('./logoalt.png')} 
              style={styles.logo}/>
            <Text style={styles.sidebarLink}> Browse    </Text>
            <Text style={styles.sidebarLink}> Messages  </Text>
            <Text style={styles.sidebarLink}> Listings  </Text>
            <Text style={styles.sidebarLink}> Orders    </Text>
            <Text style={styles.sidebarLink}> Purchases </Text>
            <Text style={styles.sidebarLink}> Settings  </Text>
            <Text style={styles.sidebarLink}> Logout    </Text>
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
  whiteArrow: {
    color: "white",
    fontSize: 22,
    marginTop: -5,
    marginLeft: 10,
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

module.exports = Browse;