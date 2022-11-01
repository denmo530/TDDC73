import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export class Button extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>BUTTON</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Button;
