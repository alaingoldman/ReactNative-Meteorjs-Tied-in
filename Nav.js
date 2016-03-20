'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native';

class Nav extends Component {
  render() {
    return (
        <Text style={styles.welcome}>
           navbar
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
