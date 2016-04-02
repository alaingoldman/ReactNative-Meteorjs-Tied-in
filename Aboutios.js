'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
} = React;



import NavigationBar from 'react-native-navbar'; 

class Aboutios extends React.Component {

	render() {

    const titleConfig = {
      title: 'lootfly',
      tintColor: "white",
    }

		return(
		  <View style={styles.container}>
      <NavigationBar
        style={{ flex: 1, }}
        title={titleConfig}
        tintColor="black" />
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