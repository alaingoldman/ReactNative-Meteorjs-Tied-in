'use strict';
var React = require('react-native');
var {
  Component,
  StyleSheet,
  NavigatorIOS,
  StatusBarIOS,
} = React;

class WhiteStatus extends React.Component {
	componentWillMount() {
  		return StatusBarIOS.setStyle(1);
	}
}


module.exports = WhiteStatus;