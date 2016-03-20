'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
} = React;

class Aboutios extends React.Component {

	render() {
		return(
		  <View>
			<Text>
				about page bro
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


module.exports = Aboutios;