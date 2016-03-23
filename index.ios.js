'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  StatusBarIOS,
  Navigator,
  View,
} = React;

var Homeios = require('./Homeios');
global.process = require("./process.polyfill");
import NavigationBar from 'react-native-navbar'; // for better navbar control


function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class AppWrapper extends React.Component{
  
  componentWillUnmount() {
    ddpClient.close();
  }

  render(){
    const initialRoute = {
          component: Homeios
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


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('andApp', () => AppWrapper);
