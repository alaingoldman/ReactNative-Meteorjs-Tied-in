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

import Register from  './Register';
import ResetPass from './ResetPass';
import ddpClient from './ddpClient';
import Accounts from  './accounts';
import NavigationBar from 'react-native-navbar'; 


class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: 'alain.goldman@gmail.com',
			password: 'red123',
			alert: "",
			loaded: true,
		}
	}

	componentWillUnmount() {
	  ddpClient.close();
	} 

	_handlePress(){
		ddpClient.initialize()
		  .then((res) => {
		  	return Accounts.signIn(
		  		this.state.email.toLowerCase(), 
		  		this.state.password );
		  })
		  .then((res) => {
		  	console.log("Logged in successfull");
		  	this.props.navigator.push({
		  		component: Aboutios
		  	});
		  })
		  .catch((err) => {
		    console.log(err);
		    var newState = {};
		    newState["alert"] = err.reason;
		    return this.setState(newState);
		  })
	}

	_handleChange(x, event) {
		var newState = {};
		newState[x] = event.nativeEvent.text;
		this.setState(newState);
	}

	linkToReg(){
		this.props.navigator.push({
			component: Register
		});
	}

	linkToReset(){
		this.props.navigator.push({
			component: ResetPass
		});
	}

	render() {
		// inside of navigationbar component  rightButton={rightButtonConfig}
		// const rightButtonConfig = {
		//   title: '',
		//   handler: () => alert('hello!'),
		// }

		const titleConfig =
			<View>
		      <Text style={styles.navTitleText}>login</Text>
		  	</View>;
		return(
			<View style={styles.backBlue}>
				<NavigationBar
				  style={styles.container}
				  title={titleConfig}
				  tintColor="black" />
			  	<Text style={styles.title}> 
			  		Login
			  	</Text>
			  	<Text style={styles.alert}>
			  	 	{this.state.alert}
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
				<Text 
				  style={styles.link}
				  onPress={this.linkToReg.bind(this)}>
				   Register
				</Text>

				<Text 
				  style={styles.link}
				  onPress={this.linkToReset.bind(this)}>
				   Reset Password
				</Text>
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
  },
  link: {
  	color: "blue",
  	marginTop: 10,
  }
});

module.exports = Login;