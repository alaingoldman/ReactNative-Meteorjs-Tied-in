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
    // keeps status bar white; supposedly
    // http://stackoverflow.com/questions/34058371/statusbarios-color-change-on-page-load-in-react-native

class AppWrapper extends React.Component{
  componentWillMount() {
    return StatusBarIOS.setStyle(1);
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