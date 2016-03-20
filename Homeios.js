'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
} = React;

var Aboutios = require('./Aboutios');

class Homeios extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: 'alain.goldman@gmail.com',
			password: 'quilava1'
		}
	}

	_goToAbout(){
		this.props.navigator.push({
			title: "About",
			component: Aboutios
		});
	}

	_handlePress(){
		alert(this.state.email);
	}

	_handleChange(x, event) {
		var newState = {};
		newState[x] = event.nativeEvent.text;
		this.setState(newState);
	}

	render() {
		return(
			<View style={styles.backBlue}>
			    <Text style={styles.larger}>
					Home page
			  	</Text>
			  	<Text 
			  	    onPress={this._goToAbout.bind(this)}
			  	    style={styles.link} >
			  	    Next page ?
			  	</Text>

			  	<Text style={styles.title}> 
			  		Login bitch
			  	</Text>
				<TextInput 
				    style={styles.input} 
				    keyboardType='email-address'
				    value={this.state.email}
				    onChange={this._handleChange.bind(this,"email")}
				    autoCorrect={false}
				    placeholder="email"/>

				<TextInput 
				    style={styles.input} 
				    placeholder="password"
				    onChange={this._handleChange.bind(this,"password")}
				    value={this.state.password}
				    secureTextEntry={true}/>

				<TouchableHighlight
				    onPress={this._handlePress.bind(this)}
				    style={styles.butt}
				    activeOpacity={1}
				    underlayColor='#0d0d0d'>
				  <Text style={styles.buttInner}>
				  	click
				  </Text>
				</TouchableHighlight>

			</View>

		)
	}
};


var styles = StyleSheet.create({
  link: {
  	color: "blue",
  },
  larger: {
    fontSize: 29,
  },
  backBlue: {
  	flex: 1,
  },
  input: {
  	height: 40, 
  	borderColor: 'gray', 
  	borderWidth: 1, 
  	width: 280, 
  	marginTop: 10,
  },
  title: {
  	fontSize: 30,
  	marginTop: 20,
  	marginBottom: 10,
  },
  butt: {
  	backgroundColor: "black",
  	width: 280,
  	marginTop: 10,
  	height: 60,
  },
  buttInner: {
  	color: "white",
  	fontSize: 30,
  }
});

module.exports = Homeios;