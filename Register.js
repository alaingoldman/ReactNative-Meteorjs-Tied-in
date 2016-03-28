'use strict';
var React = require('react-native');
var {
  Component,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

import Login from './Login';
import Aboutios from './Aboutios';
import ResetPass from './ResetPass'
import ddpClient from './ddpClient';
import Accounts from './accounts';
import NavigationBar from 'react-native-navbar'; 


class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: 'alain.goldman@gmail.com',
			username: "iceman",
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
	_linker(comp){
		this.props.navigator.push({
			component: comp
		});
	}
	_goBack(){
		this.props.navigator.pop();
	}
	render() {

		const leftButtonConfig = 
			<View>
		      <Text style={styles.whiteArrow} onPress={this._goBack.bind(this)} > {'<'} </Text>
		  	</View>;

		const titleConfig =
			<View>
		      <Text style={styles.navTitleText}>Registration</Text>
		  	</View>;

		return(
			<Image source={require('./reg.png')} style={styles.container}>
				<View style={styles.navbar}>
				<NavigationBar
				    title={titleConfig}
				    tintColor="transparent"
				    leftButton={leftButtonConfig} />
				</View>
				<View style={styles.midder}>
					<View style={styles.wrap}>
					  	<Text style={styles.alert}>
					  	 	{this.state.alert}
					  	</Text>
					  	<View style={styles.boxer}>
					  		<Text style={styles.inputTitle}>Username</Text>
							<TextInput 
							    style={styles.input} 
							    keyboardType='default'
							    value={this.state.username}
							    onChange={this._handleChange.bind(this,"username")}
							    autoCorrect={false} />
						</View>
					  	<View style={styles.boxer}>
					  		<Text style={styles.inputTitle}>E-mail</Text>
							<TextInput 
							    style={styles.input} 
							    keyboardType='email-address'
							    value={this.state.email}
							    onChange={this._handleChange.bind(this,"email")}
							    autoCorrect={false} />
						</View>
						<View style={styles.boxer}>
						    <Text style={styles.inputTitle}>Password</Text>
							<TextInput 
							    style={styles.input} 
							    onChange={this._handleChange.bind(this,"password")}
							    value={this.state.password}
							    secureTextEntry={true}/>
						</View>
						<TouchableHighlight
						    onPress={this._handlePress.bind(this)}
						    style={styles.butt}
						    activeOpacity={1}
						    underlayColor='#0d0d0d'>
						  <Text style={styles.buttInner}>
						  	REGISTER
						  </Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.wrap}>
					<View style={styles.bot}>
						<Text 
						  style={styles.link}
						  onPress={this._linker.bind(this, ResetPass)}>
						   RESET PASSWORD
						</Text>
					</View>
				</View>
			</Image>
		)
	}
};



var styles = StyleSheet.create({
  navbar: {
  	alignSelf: "stretch",
  },
  midder: {
  	alignItems: "center",
  },
  navy: {
  	flex: 1,
  	backgroundColor: "red",
  },
  wrap: {
  	flex: 1,
  	width: 280,
  },
  boxer: {
    borderBottomWidth: 1,
    borderColor: "white",
    marginBottom: 16,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
  },	
  whiteArrow: {
  	color: "white",
  	fontSize: 22,
  	marginTop: -5,
  	marginLeft: 10,
  },
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
  	height: 35, 
  	borderColor: 'gray', 
  	borderBottomWidth: 1, 
  	marginTop: 10,
  	color: "white",
  },
  inputTitle: {
  	color: "rgba(255,255,255,0.4)",
  	fontSize: 12,
  	height: 12,
  },
  butt: {
  	backgroundColor: "rgb(14,185,125)",
  	marginTop: 17,
  	height: 40,
  	justifyContent: 'center',
  	alignItems: "center",
  },
  buttInner: {
  	color: "white",
  	fontSize: 11,
  	justifyContent: 'center',
  },
  link: {
  	color: "white",
  	marginTop: 10,
  },
  bot: {
  	width: 280,
  	position: "absolute",
  	alignSelf: "center",
  	alignItems: "center",
  	bottom: 0,
  	paddingBottom: 20,
  }
});

module.exports = Register;