import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import Login from '../Components/Login/Login';

export default class LoginScreen extends Component {
  render () {
    return (
      <View>
      
        <Login />
      </View>
    )
  }
}
