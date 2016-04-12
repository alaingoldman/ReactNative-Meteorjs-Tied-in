'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Navigator,
  View,
} = React;


import Login from './Login';
import NavigationBar from 'react-native-navbar'; // for better navbar control
global.process = require("./process.polyfill");


function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class AppWrapper extends React.Component{

  componentWillUnmount() {
    ddpClient.close();
  }

  render(){
    const initialRoute = {
          component: Login
    }

    return(
      <View style={styles.container}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
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
