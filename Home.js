'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  Navigator,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableHighlight,
  ToolbarAndroid,
  StatusBar,
  NavigatorIOS,
} = React;

class Home extends React.Component {

	showAbout() {
		//alert('test');
	    this.props.navigator.push({
	        name: 'about'
	    });
	}

	trigEvent() {
		//alert("test");
		console.log(" clicked ");
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
				    title="Home"
				    titleColor={'pink'}
				    />
			    <Text>
					Home page here btw
			  	</Text>
		      	<Text onPress={this.showAbout.bind(this)} >
		      		Go to About
		      	</Text>
		      	<Text onPress={this.trigEvent.bind(this)}>
		      	    OPEN DRAWER 
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


module.exports = Home;