import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.text}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }

}
