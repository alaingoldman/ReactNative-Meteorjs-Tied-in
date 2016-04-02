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
import ddpClient from './ddpClient';
import Accounts from './accounts';
import NavigationBar from 'react-native-navbar'; 


class ResetPass extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: 'alain.goldman@gmail.com',
			loaded: true,
			alert: "",
		}
	}

	_handlePress(){
		ddpClient.initialize()
		  .then((res) => {
		  	return Accounts.forgotPass(this.state.email.toLowerCase());
		  })
		  .then((res) => {
		  	var newState = {};
		  	newState["alert"] = "reset sent to email";
		  	return this.setState(newState);
		  })
		  .catch((err) => {
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
			<Image source={require('./sweater.png')} style={styles.container}>
				<View style={styles.navbar}>
				<NavigationBar
				    title={titleConfig}
				    tintColor="transparent"
				    leftButton={leftButtonConfig} />
				</View>
				<View style={styles.midder}>
  		  	<Text style={styles.alert}>
  		  	 	{this.state.alert}
  		  	</Text>
  		  	<View style={styles.boxer}>
  		  		<Text style={styles.inputTitle}>E-mail</Text>
  				<TextInput 
  				    style={styles.input} 
  				    keyboardType='email-address'
  				    value={this.state.email}
  				    onChange={this._handleChange.bind(this,"email")}
  				    autoCorrect={false} />
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
  			<Text style={styles.introText}>
  				Reset instructions will be emailed to you
  			</Text>
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
  	flex: 1,
    alignSelf: "stretch",
    marginLeft: 20,
    marginRight: 20,
  },
  navy: {
  	flex: 1,
  	backgroundColor: "red",
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
  introText: {
  	color: "white",
  	fontSize: 11,
  	alignSelf: "center",
  	marginTop: 17,
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

module.exports = ResetPass;