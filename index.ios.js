'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  StatusBarIOS,
  Navigator,
  View,
} = React;


import Login from './Login';
import NavigationBar from 'react-native-navbar'; // for better navbar control
import WhiteStatus from './WhiteStatusIos'; 
// keeps status bar white; supposedly
// http://stackoverflow.com/questions/34058371/statusbarios-color-change-on-page-load-in-react-native

global.process = require("./process.polyfill");


function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class AppWrapper extends React.Component{
  componentWillMount() {
    return StatusBarIOS.setStyle(1);
  }

  componentWillUnmount() {
    ddpClient.close();
  }

  render(){
    const initialRoute = {
          component: Login
    }

    return(
      <View style={styles.container}>
      <Navigator 
        initialRoute={initialRoute}
        renderScene={renderScene}  />
      </View>
    )
  }
}

// if this color is black the swipe effect will product a "shadowy" like feel
var styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

AppRegistry.registerComponent('andApp', () => AppWrapper);
