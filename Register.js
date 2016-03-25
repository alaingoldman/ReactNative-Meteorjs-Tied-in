'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} = React;

import Login from './Login';
import Aboutios from './Aboutios';
import ddpClient from './ddpClient';
import Accounts from './accounts';
import NavigationBar from 'react-native-navbar'; 


class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: 'alain.goldman@gmail.com',
			username: "",
			password: 'red123',
			alert: "",
			loaded: true,
		}
	}

	_handlePress(){
		ddpClient.initialize()
		  .then(() => {
		  	return Accounts.signUpWithUsername(
		  		this.state.username.toLowerCase(),
		  		this.state.email.toLowerCase(),
		  		this.state.password
		  		);
		  })
		  .then(() => {
		  	return Accounts.emailVerify(
		  		this.state.email.toLowerCase());
		  })
		  .then(() => {
		  	let newState = {};
		  	newState["alert"] = "Check your email for confirmation link";
		  	return this.setState(newState);
		  })
		  .catch((err) => {
		    let newState = {};
		    newState["alert"] = err.reason;
		    return this.setState(newState);
		  })
	}

	_handleChange(x, event) {
		var newState = {};
		newState[x] = event.nativeEvent.text;
		this.setState(newState);
	}

	render() {
		const leftButtonConfig = {
		  title: 'login',
		  tintColor: "white",
		  handler: () => {
		  	this.props.navigator.pop();
		  	
		  },
		}

		const titleConfig =
			<View>
		      <Text style={styles.navTitleText}>register</Text>
		  	</View>;
		
		return(
			<View style={styles.backBlue}>
				<NavigationBar
				  style={styles.container}
				  title={titleConfig}
				  tintColor="black"
				  leftButton={leftButtonConfig} />
			    <Text style={styles.title}>
					Register
			  	</Text>
			  	<Text style={styles.alert}>
			  	 	{this.state.alert}
			  	</Text>
			  	<TextInput 
			  	    style={styles.input} 
			  	    keyboardType='default'
			  	    value={this.state.username}
			  	    onChange={this._handleChange.bind(this,"username")}
			  	    autoCorrect={false}
			  	    placeholder="username"/>

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
  navTitleText: {
  	color: "white",
  	fontSize: 18,
  	marginBottom: 3.5,
  },
  larger: {
    fontSize: 29,
  },
  backBlue: {
  	flex: 1,
  	backgroundColor: "white",
  },
  alert:{
  	color: 'red',
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
  	justifyContent: 'center',
  	alignItems: "center",
  },
  buttInner: {
  	color: "white",
  	fontSize: 30,
  	justifyContent: 'center',

  }
});

module.exports = Register;