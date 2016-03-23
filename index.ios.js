'use strict';
var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  StatusBarIOS,
} = React;

var Homeios = require('./Homeios');
var WhiteStatus = require('./WhiteStatusIos'); 
    // keeps status bar white after leaving app and coming back
    // http://stackoverflow.com/questions/34058371/statusbarios-color-change-on-page-load-in-react-native
global.process = require("./process.polyfill");

class AppWrapper extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      loaded: 'false'
    }
  }
  componentWillMount() {  
    return StatusBarIOS.setStyle(1); // keeps status bar white
  }

  componentWillUnmount() {
    ddpClient.close();
  }

  render(){
    return(
      <NavigatorIOS
        barTintColor='black'
        titleTextColor='white'
        tintColor='white'
        style={styles.container}
        translucent={false}
        initialRoute={{
          backButtonTitle: ' ',
          component: Homeios,
          title: 'lootfly',
        }}
      />
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('andApp', () => AppWrapper);
