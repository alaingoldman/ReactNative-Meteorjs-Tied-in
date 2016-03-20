'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  ToolbarAndroid,
  StatusBar,
} = React;

var Home     =  require('./Home');
var About    = require('./About');
var Contact  = require('./Contact');


var AppWrapper = React.createClass({

  renderScene: function(route, navigator){

    switch (route.name) {
      case 'home':
        return <Home navigator={navigator} />;
      case 'about':
        return <About navigator={navigator} />;
      case 'contact':
        return <Contact navigator={navigator} />;
      default:
        throw new Error('No route found for id ' + route.name);
    }
  },

  render: function(){
    return(
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        
      />
    )
  }
})


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    backgroundColor: 'black',
    height: 56,
  },
});

AppRegistry.registerComponent('andApp', () => AppWrapper);