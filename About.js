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

class About extends React.Component {

	showContact() {
	    this.props.navigator.push({
	        name: "contact"
	    });
	}

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
		  	      title="About"
		  	      />
		      <Text style={{margin: 10, fontSize: 25}} 
		            onPress={this.showContact.bind(this)}>
		      	Brody
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


module.exports = About;