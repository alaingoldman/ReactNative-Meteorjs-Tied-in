'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  BackAndroid,
  DrawerLayoutAndroid,
  StatusBar,
} = React;

class Contact extends React.Component {

	render() {

		return(
        <View>
          <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          />
          <ToolbarAndroid
              actions={[]}
              style={styles.toolbar}
              titleColor="white"
              title="Contact"
              />
          <Text>
              Contact page yo 
          </Text>
        </View>
		)
	}
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: 'black',
    height: 56,
  },
});

module.exports = Contact;